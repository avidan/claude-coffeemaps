import { useState, useEffect } from 'react'
import CoffeeList from './components/CoffeeList'
import SimpleMap from './components/SimpleMap'
import CitySearch from './components/CitySearch'
import { coffeeShops } from './data/coffeeShops'
import { getDistance } from './utils/distance'
import './App.css'

function App() {
  const [viewMode, setViewMode] = useState('list')
  const [userLocation, setUserLocation] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [filteredShops, setFilteredShops] = useState([])
  const [locationStatus, setLocationStatus] = useState('requesting') // 'requesting', 'granted', 'denied'

  // Request user location on app load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          setUserLocation(location)
          setLocationStatus('granted')
        },
        (error) => {
          console.log('Location access denied:', error)
          setLocationStatus('denied')
          // If location denied, show all shops
          setFilteredShops(coffeeShops)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      )
    } else {
      setLocationStatus('denied')
      setFilteredShops(coffeeShops)
    }
  }, [])

  // Filter shops when user location or selected city changes
  useEffect(() => {
    if (selectedCity) {
      // When city is selected, show shops within 50 miles of that city
      const cityShops = coffeeShops
        .map(shop => ({
          ...shop,
          distance: getDistance(
            selectedCity.coordinates[0],
            selectedCity.coordinates[1],
            shop.coordinates[0],
            shop.coordinates[1],
            'miles'
          )
        }))
        .filter(shop => shop.distance <= 50)
        .sort((a, b) => a.distance - b.distance)
      
      setFilteredShops(cityShops)
    } else if (userLocation && locationStatus === 'granted') {
      // Show shops within 5 miles of user location
      const nearbyShops = coffeeShops
        .map(shop => ({
          ...shop,
          distance: getDistance(
            userLocation.lat,
            userLocation.lng,
            shop.coordinates[0],
            shop.coordinates[1],
            'miles'
          )
        }))
        .filter(shop => shop.distance <= 5)
        .sort((a, b) => a.distance - b.distance)
      
      setFilteredShops(nearbyShops)
    }
  }, [userLocation, selectedCity, locationStatus])

  const handleCitySelect = (city) => {
    setSelectedCity(city)
  }

  const clearLocationFilter = () => {
    setSelectedCity(null)
    setUserLocation(null)
    setLocationStatus('denied')
    setFilteredShops(coffeeShops)
  }

  const getHeaderMessage = () => {
    if (selectedCity) {
      return `${filteredShops.length} shops near ${selectedCity.name}`
    } else if (locationStatus === 'granted' && userLocation) {
      return `${filteredShops.length} shops within 5 miles`
    } else if (locationStatus === 'requesting') {
      return 'Requesting your location...'
    } else {
      return `${filteredShops.length} coffee shops worldwide`
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>☕ Coffee Maps</h1>
        <div className="header-message">
          {getHeaderMessage()}
        </div>
        <div className="header-controls">
          <button 
            className={`view-toggle ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => setViewMode('map')}
          >
            Map
          </button>
          <button 
            className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </header>

      <div className="search-section">
        <CitySearch 
          onCitySelect={handleCitySelect}
          selectedCity={selectedCity}
        />
        {(selectedCity || locationStatus === 'denied') && (
          <button 
            className="clear-filter-btn"
            onClick={clearLocationFilter}
          >
            {selectedCity ? 'Clear city filter' : 'Use my location'}
          </button>
        )}
      </div>

      <main className="app-main">
        {viewMode === 'map' ? (
          <SimpleMap 
            shops={filteredShops} 
            userLocation={userLocation}
            selectedCity={selectedCity}
          />
        ) : (
          <CoffeeList shops={filteredShops} />
        )}
      </main>
    </div>
  )
}

export default App