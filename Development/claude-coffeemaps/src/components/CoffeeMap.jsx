import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import './CoffeeMap.css'

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Custom coffee shop icon
const coffeeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="12" fill="#8b6914" stroke="white" stroke-width="1"/>
      <text x="12.5" y="18" text-anchor="middle" fill="white" font-size="14">☕</text>
    </svg>
  `),
  iconSize: [25, 25],
  iconAnchor: [12.5, 12.5]
})

// User location icon
const userIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" fill="#2196F3" stroke="white" stroke-width="2"/>
      <circle cx="10" cy="10" r="3" fill="white"/>
    </svg>
  `),
  iconSize: [20, 20],
  iconAnchor: [10, 10]
})

// Selected city icon
const cityIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14" fill="#ff6b6b" stroke="white" stroke-width="2"/>
      <text x="15" y="21" text-anchor="middle" fill="white" font-size="16">🏙️</text>
    </svg>
  `),
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

export default function CoffeeMap({ shops, userLocation, selectedCity }) {
  console.log('CoffeeMap rendering with shops:', shops.length, 'userLocation:', userLocation, 'selectedCity:', selectedCity)
  
  // Determine map center based on available data
  const getMapCenter = () => {
    if (selectedCity) {
      return selectedCity.coordinates
    }
    if (userLocation) {
      return [userLocation.lat, userLocation.lng]
    }
    if (shops.length > 0) {
      return shops[0].coordinates
    }
    return [48.8566, 2.3522] // Default to Paris
  }

  // Determine zoom level based on context
  const getZoomLevel = () => {
    if (selectedCity || userLocation) {
      return 12
    }
    return 2 // World view when showing all shops
  }

  const defaultCenter = getMapCenter()
  const defaultZoom = getZoomLevel()
  
  const renderQualityBadges = (indicators) => {
    const badges = []
    if (indicators.singleOrigin) badges.push('Single Origin')
    if (indicators.latteArt) badges.push('Latte Art')
    if (indicators.noFlavoredSyrups) badges.push('No Syrups')
    if (indicators.artisanal) badges.push('Artisanal')
    if (indicators.experimental) badges.push('Experimental')
    if (indicators.localRoaster) badges.push('Local Roaster')
    
    return badges.map(badge => (
      <span key={badge} className="quality-badge">{badge}</span>
    ))
  }

  return (
    <div className="coffee-map">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="map-container"
        key={`${defaultCenter[0]}-${defaultCenter[1]}-${defaultZoom}`} // Force re-render when center changes
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* User location marker */}
        {userLocation && !selectedCity && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup>
              <div className="popup-content">
                <strong>Your Location</strong>
                <p>Showing coffee shops within 5 miles</p>
              </div>
            </Popup>
          </Marker>
        )}
        
        {/* Selected city marker */}
        {selectedCity && (
          <Marker position={selectedCity.coordinates} icon={cityIcon}>
            <Popup>
              <div className="popup-content">
                <strong>{selectedCity.name}</strong>
                <p>{selectedCity.country}</p>
                <p>Showing coffee shops within 50 miles</p>
              </div>
            </Popup>
          </Marker>
        )}
        
        {/* Coffee shop markers */}
        {shops.map(shop => (
          <Marker 
            key={shop.id} 
            position={shop.coordinates} 
            icon={coffeeIcon}
          >
            <Popup>
              <div className="popup-content">
                <h3>{shop.name}</h3>
                <p className="location">{shop.city}, {shop.country}</p>
                {shop.distance && (
                  <p className="distance">{shop.distance} mi away</p>
                )}
                {shop.notes && (
                  <p className="notes">"{shop.notes}"</p>
                )}
                <div className="rating">
                  {'★'.repeat(shop.rating)}{'☆'.repeat(5 - shop.rating)}
                </div>
                <div className="quality-indicators">
                  {renderQualityBadges(shop.qualityIndicators)}
                </div>
                <div className="popup-actions">
                  <button 
                    className="directions-btn-popup"
                    onClick={() => {
                      const [lat, lng] = shop.coordinates
                      window.open(`https://maps.apple.com/?q=${lat},${lng}`, '_blank')
                    }}
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {shops.length === 0 && (
        <div className="no-shops-map">
          <div className="no-shops-message">
            <h3>No coffee shops found in this area</h3>
            <p>Try searching for a different city or expanding your search radius.</p>
          </div>
        </div>
      )}
    </div>
  )
}