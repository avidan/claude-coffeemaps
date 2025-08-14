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

  // Create Google Maps embed URL
  const getGoogleMapsUrl = () => {
    let baseUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw8Q4R8Dg9dJyE&center=${centerString}&zoom=12`
    
    // Add markers for coffee shops
    if (shops.length > 0) {
      const markers = shops.slice(0, 10).map(shop => 
        `${shop.coordinates[0]},${shop.coordinates[1]}`
      ).join('|')
      baseUrl += `&markers=${markers}`
    }
    
    return baseUrl
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
              src={`https://maps.google.com/maps?q=${shops.map(s => `${s.coordinates[0]},${s.coordinates[1]}`).join('|')}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Shops Map"
            />
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
                    <button 
                      className="mini-directions-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        const [lat, lng] = shop.coordinates
                        window.open(`https://maps.apple.com/?q=${lat},${lng}`, '_blank')
                      }}
                    >
                      Get Directions
                    </button>
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