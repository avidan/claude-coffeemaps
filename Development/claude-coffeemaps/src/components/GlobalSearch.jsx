import { useState, useRef } from 'react'
import { searchCoffeeShops, isAPIConfigured, getAPIStatus } from '../services/placesAPI'
import './GlobalSearch.css'

export default function GlobalSearch({ onAddCoffeeShop }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const inputRef = useRef(null)
  const searchTimeoutRef = useRef(null)

  // Real Google Places API search
  const performSearch = async (searchQuery) => {
    if (!searchQuery || searchQuery.length < 3) return []
    
    try {
      const results = await searchCoffeeShops(searchQuery)
      return results
    } catch (error) {
      console.error('Search failed:', error)
      return []
    }
  }

  const handleInputChange = async (e) => {
    const value = e.target.value
    setQuery(value)

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    if (value.length >= 3) {
      setIsSearching(true)
      setShowSuggestions(true)

      // Debounce search
      searchTimeoutRef.current = setTimeout(async () => {
        try {
          const results = await performSearch(value)
          setSuggestions(results)
        } catch (error) {
          console.error('Search error:', error)
          setSuggestions([])
        } finally {
          setIsSearching(false)
        }
      }, 300)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
      setIsSearching(false)
    }
  }

  const handleSuggestionClick = (place) => {
    setSelectedPlace(place)
    setQuery(place.name)
    setShowSuggestions(false)
  }

  const handleAddToDatabase = () => {
    if (!selectedPlace) return

    // Extract city and country from address
    const addressParts = selectedPlace.formatted_address.split(', ')
    const city = addressParts[addressParts.length - 3] || addressParts[0]
    const state = addressParts[addressParts.length - 2] || ''
    const country = addressParts[addressParts.length - 1] || 'Unknown'

    const newCoffeeShop = {
      id: Date.now(), // Temporary ID
      name: selectedPlace.name,
      city: city,
      country: country,
      coordinates: [
        selectedPlace.geometry.location.lat,
        selectedPlace.geometry.location.lng
      ],
      rating: selectedPlace.rating || 4,
      notes: `Added from global search - ${selectedPlace.formatted_address}`,
      qualityIndicators: {
        singleOrigin: true,
        latteArt: true,
        noFlavoredSyrups: true,
        thirdWave: true
      },
      isUserSubmitted: true,
      submitDate: new Date().toISOString(),
      googlePlaceId: selectedPlace.place_id
    }

    onAddCoffeeShop(newCoffeeShop)
    
    // Reset search
    setQuery('')
    setSelectedPlace(null)
    setSuggestions([])
  }

  const clearSearch = () => {
    setQuery('')
    setSuggestions([])
    setShowSuggestions(false)
    setSelectedPlace(null)
    inputRef.current?.focus()
  }

  const renderPriceLevel = (priceLevel) => {
    if (!priceLevel) return ''
    return '$'.repeat(priceLevel)
  }

  const apiStatus = getAPIStatus()

  return (
    <div className="global-search">
      <div className="search-header">
        <h3>🌍 Find Coffee Shops Worldwide</h3>
        <p>Search for any coffee shop around the world and add it to our database</p>
        {!isAPIConfigured() && (
          <div className="api-status warning">
            ⚠️ Using demo data - Configure Google Places API for live results
          </div>
        )}
        {isAPIConfigured() && (
          <div className="api-status success">
            ✅ Connected to Google Places API
          </div>
        )}
      </div>

      <div className="search-input-container">
        <input
          ref={inputRef}
          type="text"
          className="global-search-input"
          placeholder="Search coffee shops worldwide (e.g., Blue Bottle San Francisco, Monmouth London)"
          value={query}
          onChange={handleInputChange}
        />
        {query && (
          <button 
            className="clear-search"
            onClick={clearSearch}
            type="button"
          >
            ×
          </button>
        )}
        <div className="search-icon">
          {isSearching ? '⏳' : '🔍'}
        </div>
      </div>

      {showSuggestions && (
        <div className="global-suggestions-dropdown">
          {isSearching && (
            <div className="searching-indicator">
              <span>🔍 Searching coffee shops worldwide...</span>
            </div>
          )}
          
          {!isSearching && suggestions.length === 0 && query.length >= 3 && (
            <div className="no-results">
              <span>No coffee shops found for "{query}"</span>
              <small>Try different keywords or check the spelling</small>
            </div>
          )}

          {suggestions.map((place) => (
            <div
              key={place.place_id}
              className="global-suggestion-item"
              onClick={() => handleSuggestionClick(place)}
            >
              <div className="place-info">
                <div className="place-header">
                  <h4>{place.name}</h4>
                  <div className="place-meta">
                    {place.rating && (
                      <span className="rating">★ {place.rating}</span>
                    )}
                    {place.price_level && (
                      <span className="price">{renderPriceLevel(place.price_level)}</span>
                    )}
                  </div>
                </div>
                <p className="place-address">{place.formatted_address}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPlace && (
        <div className="selected-place">
          <div className="selected-place-info">
            <h4>Selected: {selectedPlace.name}</h4>
            <p>{selectedPlace.formatted_address}</p>
            <div className="selected-place-meta">
              {selectedPlace.rating && (
                <span>★ {selectedPlace.rating}</span>
              )}
              {selectedPlace.price_level && (
                <span>{renderPriceLevel(selectedPlace.price_level)}</span>
              )}
            </div>
          </div>
          <button 
            className="add-to-database-btn"
            onClick={handleAddToDatabase}
          >
            ➕ Add to Coffee Shop Database
          </button>
        </div>
      )}
    </div>
  )
}