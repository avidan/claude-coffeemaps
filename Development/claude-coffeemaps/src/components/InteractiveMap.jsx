import { useState, useEffect, useCallback } from 'react'
import './SimpleMap.css'

export default function InteractiveMap({ shops, userLocation, selectedCity }) {
  const [selectedShop, setSelectedShop] = useState(null)
  const [mapCenter, setMapCenter] = useState([40.7128, -74.0060])
  const [mapZoom, setMapZoom] = useState(12)
  const [visibleShops, setVisibleShops] = useState([])

  // Calculate approximate viewport bounds based on zoom level
  const getViewportBounds = useCallback((center, zoom) => {
    // Rough approximation of viewport size based on zoom level
    const latRange = 180 / Math.pow(2, zoom) * 2
    const lngRange = 360 / Math.pow(2, zoom) * 2
    
    return {
      north: center[0] + latRange,
      south: center[0] - latRange,
      east: center[1] + lngRange,
      west: center[1] - lngRange
    }
  }, [])

  // Filter shops based on current viewport
  const filterShopsByViewport = useCallback((center, zoom, allShops) => {
    const bounds = getViewportBounds(center, zoom)
    
    return allShops.filter(shop => {
      const [lat, lng] = shop.coordinates
      return lat >= bounds.south && 
             lat <= bounds.north && 
             lng >= bounds.west && 
             lng <= bounds.east
    })
  }, [getViewportBounds])

  // Update map center when props change
  useEffect(() => {
    if (selectedCity) {
      setMapCenter(selectedCity.coordinates)
      setMapZoom(12)
    } else if (userLocation) {
      setMapCenter([userLocation.lat, userLocation.lng])
      setMapZoom(13)
    } else if (shops.length > 0) {
      setMapCenter(shops[0].coordinates)
      setMapZoom(12)
    }
  }, [selectedCity, userLocation, shops])

  // Update visible shops when map center, zoom, or shops change
  useEffect(() => {
    const filtered = filterShopsByViewport(mapCenter, mapZoom, shops)
    setVisibleShops(filtered)
  }, [mapCenter, mapZoom, shops, filterShopsByViewport])

  // Create Google Maps URL with current center and zoom
  const getGoogleMapsUrl = () => {
    const centerString = `${mapCenter[0]},${mapCenter[1]}`
    
    if (visibleShops.length === 0) {
      return `https://maps.google.com/maps?q=coffee+shops+near+${centerString}&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`
    }

    // For multiple shops in viewport, search for coffee shops in the area
    return `https://maps.google.com/maps?q=coffee+shops+near+${centerString}&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`
  }

  const handleZoomIn = () => {
    const newZoom = Math.min(mapZoom + 1, 18)
    setMapZoom(newZoom)
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(mapZoom - 1, 1)
    setMapZoom(newZoom)
  }

  const handleRecenter = () => {
    if (selectedCity) {
      setMapCenter(selectedCity.coordinates)
    } else if (userLocation) {
      setMapCenter([userLocation.lat, userLocation.lng])
    }
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
                <span className="legend-item">📍 {visibleShops.length} coffee shops in view</span>
                <span className="legend-note">Zoom: {mapZoom}</span>
              </div>
            </div>
            <div className="map-controls" style={{
              position: 'absolute',
              top: '60px',
              left: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 10
            }}>
              <button onClick={handleZoomIn} style={{
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>+</button>
              <button onClick={handleZoomOut} style={{
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>−</button>
              <button onClick={handleRecenter} style={{
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '6px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontSize: '12px'
              }}>⌂</button>
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
              <p>{visibleShops.length} coffee shops in current view</p>
              <p className="zoom-info">Zoom level: {mapZoom}</p>
            </div>
          )}
          
          {userLocation && !selectedCity && (
            <div className="location-info">
              <h3>📍 Your Location</h3>
              <p>{visibleShops.length} coffee shops in current view</p>
              <p className="zoom-info">Zoom level: {mapZoom}</p>
            </div>
          )}
          
          {!userLocation && !selectedCity && (
            <div className="location-info">
              <h3>🌍 Global Coffee Shops</h3>
              <p>{visibleShops.length} shops in current view</p>
              <p className="zoom-info">Zoom level: {mapZoom}</p>
            </div>
          )}
        </div>
        
        <div className="shop-list-mini">
          <h4>Coffee Shops in current view:</h4>
          <div className="mini-shop-list">
            {visibleShops.slice(0, 5).map(shop => (
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
            
            {visibleShops.length > 5 && (
              <div className="more-shops-indicator">
                + {visibleShops.length - 5} more shops in view
              </div>
            )}

            {visibleShops.length === 0 && (
              <div className="no-shops-in-view" style={{
                textAlign: 'center',
                padding: '1rem',
                color: '#666',
                fontStyle: 'italic'
              }}>
                No coffee shops in current map view. Try zooming out or panning the map.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}