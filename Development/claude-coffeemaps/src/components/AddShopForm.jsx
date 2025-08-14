import { useState } from 'react'
import './AddShopForm.css'

export default function AddShopForm({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    coordinates: ['', ''],
    notes: '',
    rating: 4,
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true,
      artisanal: false,
      experimental: false,
      localRoaster: false
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.city || !formData.country) {
      alert('Please fill in all required fields')
      return
    }
    
    if (!formData.coordinates[0] || !formData.coordinates[1]) {
      alert('Please provide valid coordinates')
      return
    }
    
    onAdd({
      ...formData,
      coordinates: [parseFloat(formData.coordinates[0]), parseFloat(formData.coordinates[1])]
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCoordinateChange = (index, value) => {
    const newCoordinates = [...formData.coordinates]
    newCoordinates[index] = value
    setFormData(prev => ({
      ...prev,
      coordinates: newCoordinates
    }))
  }

  const handleQualityIndicatorChange = (indicator, checked) => {
    setFormData(prev => ({
      ...prev,
      qualityIndicators: {
        ...prev.qualityIndicators,
        [indicator]: checked
      }
    }))
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            coordinates: [
              position.coords.latitude.toString(),
              position.coords.longitude.toString()
            ]
          }))
        },
        (error) => {
          alert('Could not get your location: ' + error.message)
        }
      )
    } else {
      alert('Geolocation is not supported by this browser')
    }
  }

  return (
    <div className="modal-overlay">
      <div className="add-shop-form">
        <div className="form-header">
          <h2>Add New Coffee Shop</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Shop Name *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter coffee shop name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="City"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                placeholder="Country"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location Coordinates *</label>
            <div className="coordinates-section">
              <div className="coordinates-inputs">
                <input
                  type="number"
                  step="any"
                  value={formData.coordinates[0]}
                  onChange={(e) => handleCoordinateChange(0, e.target.value)}
                  placeholder="Latitude"
                  required
                />
                <input
                  type="number"
                  step="any"
                  value={formData.coordinates[1]}
                  onChange={(e) => handleCoordinateChange(1, e.target.value)}
                  placeholder="Longitude"
                  required
                />
              </div>
              <button 
                type="button" 
                className="location-btn"
                onClick={getCurrentLocation}
              >
                Use My Location
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="What makes this coffee shop special?"
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              value={formData.rating}
              onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quality Indicators</label>
            <div className="quality-checkboxes">
              {Object.entries({
                singleOrigin: 'Single Origin Pour Overs',
                latteArt: 'Quality Latte Art',
                noFlavoredSyrups: 'No Flavored Syrups',
                thirdWave: 'Third Wave Coffee',
                artisanal: 'Artisanal Elements',
                experimental: 'Experimental/Lab Style',
                localRoaster: 'Local Roaster'
              }).map(([key, label]) => (
                <label key={key} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.qualityIndicators[key]}
                    onChange={(e) => handleQualityIndicatorChange(key, e.target.checked)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Coffee Shop
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}