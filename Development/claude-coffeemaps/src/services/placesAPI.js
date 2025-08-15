// Google Places API service for searching coffee shops

const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

// Check if API key is configured
if (!API_KEY || API_KEY === 'your_api_key_here') {
  console.warn('Google Places API key not configured. Using mock data.');
}

// Base URL for Google Places API (New)
const PLACES_API_BASE = 'https://places.googleapis.com/v1/places';

/**
 * Search for coffee shops using Google Places API
 * @param {string} query - Search query (e.g., "coffee shop" or "Blue Bottle San Francisco")
 * @param {Object} location - Optional lat/lng for location bias
 * @returns {Promise<Array>} Array of coffee shop results
 */
export async function searchCoffeeShops(query, location = null) {
  // Fallback to mock data if no API key
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    return getMockResults(query);
  }

  try {
    const searchQuery = query.toLowerCase().includes('coffee') ? query : `${query} coffee shop`;
    
    const requestBody = {
      textQuery: searchQuery,
      includedType: 'cafe',
      maxResultCount: 10,
      languageCode: 'en',
    };

    // Add location bias if provided
    if (location) {
      requestBody.locationBias = {
        circle: {
          center: {
            latitude: location.lat,
            longitude: location.lng
          },
          radius: 50000.0 // 50km radius
        }
      };
    }

    const response = await fetch(`${PLACES_API_BASE}:searchText`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.priceLevel,places.location,places.types,places.photos'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`Places API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Transform API response to our format
    return (data.places || []).map(place => ({
      place_id: place.id,
      name: place.displayName?.text || 'Unknown Coffee Shop',
      formatted_address: place.formattedAddress || 'Address not available',
      rating: place.rating || null,
      price_level: place.priceLevel || null,
      geometry: {
        location: {
          lat: place.location?.latitude || 0,
          lng: place.location?.longitude || 0
        }
      },
      types: place.types || [],
      photos: place.photos || []
    }));

  } catch (error) {
    console.error('Error searching coffee shops:', error);
    
    // Fallback to mock data on error
    console.log('Falling back to mock data due to API error');
    return getMockResults(query);
  }
}

/**
 * Get details for a specific place
 * @param {string} placeId - Google Place ID
 * @returns {Promise<Object>} Detailed place information
 */
export async function getPlaceDetails(placeId) {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    return null;
  }

  try {
    const response = await fetch(`${PLACES_API_BASE}/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'id,displayName,formattedAddress,rating,priceLevel,location,openingHours,phoneNumber,website,photos'
      }
    });

    if (!response.ok) {
      throw new Error(`Place details error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting place details:', error);
    return null;
  }
}

/**
 * Mock data for development/fallback
 */
function getMockResults(query) {
  const mockResults = [
    {
      place_id: 'mock_blue_bottle',
      name: 'Blue Bottle Coffee',
      formatted_address: '1 Ferry Building, San Francisco, CA 94111, USA',
      rating: 4.2,
      price_level: 2,
      geometry: {
        location: { lat: 37.7955, lng: -122.3933 }
      },
      types: ['cafe', 'food', 'point_of_interest', 'establishment'],
      photos: []
    },
    {
      place_id: 'mock_stumptown',
      name: 'Stumptown Coffee Roasters',
      formatted_address: '18 W 29th St, New York, NY 10001, USA',
      rating: 4.4,
      price_level: 2,
      geometry: {
        location: { lat: 40.7453, lng: -73.9885 }
      },
      types: ['cafe', 'food', 'point_of_interest', 'establishment'],
      photos: []
    },
    {
      place_id: 'mock_intelligentsia',
      name: 'Intelligentsia Coffee',
      formatted_address: '1331 W Randolph St, Chicago, IL 60607, USA',
      rating: 4.3,
      price_level: 3,
      geometry: {
        location: { lat: 41.8843, lng: -87.6568 }
      },
      types: ['cafe', 'food', 'point_of_interest', 'establishment'],
      photos: []
    },
    {
      place_id: 'mock_local_coffee',
      name: 'Local Coffee House',
      formatted_address: '123 Main St, Anytown, USA',
      rating: 4.5,
      price_level: 1,
      geometry: {
        location: { lat: 40.7128, lng: -74.0060 }
      },
      types: ['cafe', 'food', 'point_of_interest', 'establishment'],
      photos: []
    },
    {
      place_id: 'mock_artisan_roasters',
      name: 'Artisan Coffee Roasters',
      formatted_address: '456 Coffee Ave, Bean City, USA',
      rating: 4.6,
      price_level: 2,
      geometry: {
        location: { lat: 34.0522, lng: -118.2437 }
      },
      types: ['cafe', 'food', 'point_of_interest', 'establishment'],
      photos: []
    }
  ];

  // Filter mock results based on query
  const lowerQuery = query.toLowerCase();
  return mockResults.filter(place => 
    place.name.toLowerCase().includes(lowerQuery) ||
    place.formatted_address.toLowerCase().includes(lowerQuery) ||
    lowerQuery.split(' ').some(word => 
      place.name.toLowerCase().includes(word) ||
      place.formatted_address.toLowerCase().includes(word)
    )
  );
}

/**
 * Validate API key configuration
 */
export function isAPIConfigured() {
  return API_KEY && API_KEY !== 'your_api_key_here';
}

/**
 * Get API status for debugging
 */
export function getAPIStatus() {
  return {
    hasKey: !!API_KEY,
    isConfigured: isAPIConfigured(),
    keyPreview: API_KEY ? `${API_KEY.substring(0, 8)}...` : 'Not set'
  };
}