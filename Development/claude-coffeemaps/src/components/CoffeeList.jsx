import './CoffeeList.css'

export default function CoffeeList({ shops }) {
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
    <div className="coffee-list">
      <div className="list-header">
        <h2>Nearby Coffee Shops</h2>
        <p className="shop-count">{shops.length} high-quality shops found</p>
      </div>
      
      <div className="shops-grid">
        {shops.map(shop => (
          <div key={shop.id} className="shop-card">
            <div className="shop-header">
              <h3>{shop.name}</h3>
              <div className="rating">
                {'★'.repeat(shop.rating)}{'☆'.repeat(5 - shop.rating)}
              </div>
            </div>
            
            <div className="shop-location">
              <span className="location-text">{shop.city}, {shop.country}</span>
              {shop.distance && (
                <span className="distance">{shop.distance} mi away</span>
              )}
            </div>
            
            {shop.notes && (
              <div className="shop-notes">
                "{shop.notes}"
              </div>
            )}
            
            <div className="quality-indicators">
              {renderQualityBadges(shop.qualityIndicators)}
            </div>
            
            <div className="shop-actions">
              <button 
                className="directions-btn"
                onClick={() => {
                  const [lat, lng] = shop.coordinates
                  window.open(`https://maps.apple.com/?q=${lat},${lng}`, '_blank')
                }}
              >
                Directions
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {shops.length === 0 && (
        <div className="no-shops">
          <p>No high-quality coffee shops found nearby.</p>
          <p>Try expanding your search area or add a new shop!</p>
        </div>
      )}
    </div>
  )
}