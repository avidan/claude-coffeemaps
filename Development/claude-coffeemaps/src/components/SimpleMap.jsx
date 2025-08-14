import { useState } from 'react'
import './SimpleMap.css'

export default function SimpleMap({ shops, userLocation, selectedCity }) {
  const [selectedShop, setSelectedShop] = useState(null)

  // Determine map center
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
    return [40.7128, -74.0060] // Default to NYC
  }

  const center = getMapCenter()
  const centerString = `${center[0]},${center[1]}`

  // Create Google Maps URL showing coffee shops in the area
  const getGoogleMapsUrl = () => {
    if (shops.length === 0) {
      return `https://maps.google.com/maps?q=coffee+shops+near+${centerString}&t=&z=12&ie=UTF8&iwloc=&output=embed`
    }

    // Create a URL that searches for the specific coffee shops by name and location
    const firstShop = shops[0]
    const searchQuery = `${firstShop.name.replace(/\s+/g, '+')}+${firstShop.city.replace(/\s+/g, '+')}`
    
    return `https://maps.google.com/maps?q=${searchQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`
  }

  const renderQualityBadges = (indicators) => {
    const badges = []
    if (indicators.singleOrigin) badges.push('Single Origin')
    if (indicators.latteArt) badges.push('Latte Art')
    if (indicators.noFlavoredSyrups) badges.push('No Syrups')
    if (indicators.artisanal) badges.push('Artisanal')
    if (indicators.experimental) badges.push('Experimental')
    if (indicators.localRoaster) badges.push('Local Roaster')
    
    return badges.map(badge => (
      <span key={badge} className="quality-badge-simple">{badge}</span>
    ))
  }

  return (
    <div className="simple-map">
      <div className="map-container-simple">
        {shops.length > 0 ? (
          <div className="map-embed-container">
            <iframe
              src={getGoogleMapsUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Shops Map"
            />
            <div className="map-overlay-info">
              <div className="map-markers-legend">
                <span className="legend-item">📍 {shops.length} coffee shops in this area</span>
                {shops.length > 10 && (
                  <span className="legend-note">Showing first 10 locations on map</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="no-shops-simple">
            <div className="no-shops-message-simple">
              <h3>No coffee shops found in this area</h3>
              <p>Try searching for a different city or location.</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="map-sidebar">
        <div className="map-info">
          {selectedCity && (
            <div className="location-info">
              <h3>📍 {selectedCity.name}, {selectedCity.country}</h3>
              <p>{shops.length} coffee shops within 50 miles</p>
            </div>
          )}
          
          {userLocation && !selectedCity && (
            <div className="location-info">
              <h3>📍 Your Location</h3>
              <p>{shops.length} coffee shops within 5 miles</p>
            </div>
          )}
          
          {!userLocation && !selectedCity && (
            <div className="location-info">
              <h3>🌍 Global Coffee Shops</h3>
              <p>{shops.length} shops worldwide</p>
            </div>
          )}
        </div>
        
        <div className="shop-list-mini">
          <h4>Coffee Shops in this area:</h4>
          <div className="mini-shop-list">
            {shops.slice(0, 5).map(shop => (
              <div 
                key={shop.id} 
                className={`mini-shop-card ${selectedShop?.id === shop.id ? 'selected' : ''}`}
                onClick={() => setSelectedShop(selectedShop?.id === shop.id ? null : shop)}
              >
                <div className="mini-shop-header">
                  <strong>{shop.name}</strong>
                  <div className="mini-rating">
                    {'★'.repeat(shop.rating)}
                  </div>
                </div>
                <div className="mini-shop-location">
                  {shop.city}, {shop.country}
                  {shop.distance && <span> • {shop.distance} mi</span>}
                </div>
                
                {selectedShop?.id === shop.id && (
                  <div className="mini-shop-details">
                    {shop.notes && (
                      <p className="mini-notes">"{shop.notes}"</p>
                    )}
                    <div className="mini-quality-indicators">
                      {renderQualityBadges(shop.qualityIndicators)}
                    </div>
                    <div className="mini-action-buttons">
                      <button 
                        className="mini-directions-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          const [lat, lng] = shop.coordinates
                          window.open(`https://maps.apple.com/?q=${lat},${lng}`, '_blank')
                        }}
                      >
                        Directions
                      </button>
                      <button 
                        className="mini-map-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          const [lat, lng] = shop.coordinates
                          window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank')
                        }}
                      >
                        View on Map
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {shops.length > 5 && (
              <div className="more-shops-indicator">
                + {shops.length - 5} more shops
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}