import { useState, useRef, useEffect } from 'react'
import { searchCities } from '../data/majorCities'
import './CitySearch.css'

export default function CitySearch({ onCitySelect, selectedCity }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef(null)
  const suggestionsRef = useRef(null)

  useEffect(() => {
    if (selectedCity) {
      setQuery(`${selectedCity.name}, ${selectedCity.country}`)
    }
  }, [selectedCity])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length >= 2) {
      const results = searchCities(value)
      setSuggestions(results)
      setShowSuggestions(true)
      setHighlightedIndex(-1)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (city) => {
    setQuery(`${city.name}, ${city.country}`)
    setShowSuggestions(false)
    onCitySelect(city)
  }

  const handleKeyDown = (e) => {
    if (!showSuggestions) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
          handleSuggestionClick(suggestions[highlightedIndex])
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true)
    }
  }

  const handleBlur = (e) => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(e.relatedTarget)) {
        setShowSuggestions(false)
        setHighlightedIndex(-1)
      }
    }, 200)
  }

  const clearSearch = () => {
    setQuery('')
    setSuggestions([])
    setShowSuggestions(false)
    onCitySelect(null)
    inputRef.current?.focus()
  }

  return (
    <div className="city-search">
      <div className="search-input-container">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search for a city (e.g., New York, London, Tokyo)"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
        <div className="search-icon">🔍</div>
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="suggestions-dropdown"
        >
          {suggestions.map((city, index) => (
            <button
              key={`${city.name}-${city.country}`}
              className={`suggestion-item ${index === highlightedIndex ? 'highlighted' : ''}`}
              onClick={() => handleSuggestionClick(city)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              <div className="suggestion-content">
                <span className="city-name">{city.name}</span>
                <span className="city-country">{city.country}</span>
              </div>
              <span className="shop-count">{city.shopCount} shops</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}