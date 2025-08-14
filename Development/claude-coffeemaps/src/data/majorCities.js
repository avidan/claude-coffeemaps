export const majorCities = [
  { name: "New York", country: "United States", coordinates: [40.7128, -74.0060], shopCount: 25 },
  { name: "Los Angeles", country: "United States", coordinates: [34.0522, -118.2437], shopCount: 15 },
  { name: "San Francisco", country: "United States", coordinates: [37.7749, -122.4194], shopCount: 12 },
  { name: "Seattle", country: "United States", coordinates: [47.6062, -122.3321], shopCount: 18 },
  { name: "Chicago", country: "United States", coordinates: [41.8781, -87.6298], shopCount: 8 },
  { name: "Portland", country: "United States", coordinates: [45.5152, -122.6784], shopCount: 10 },
  { name: "Austin", country: "United States", coordinates: [30.2672, -97.7431], shopCount: 11 },
  { name: "Boston", country: "United States", coordinates: [42.3601, -71.0589], shopCount: 8 },
  { name: "Denver", country: "United States", coordinates: [39.7392, -104.9903], shopCount: 10 },
  
  { name: "Toronto", country: "Canada", coordinates: [43.6532, -79.3832], shopCount: 9 },
  { name: "Vancouver", country: "Canada", coordinates: [49.2827, -123.1207], shopCount: 8 },
  { name: "Montreal", country: "Canada", coordinates: [45.5017, -73.5673], shopCount: 4 },
  { name: "Calgary", country: "Canada", coordinates: [51.0447, -114.0719], shopCount: 5 },
  
  { name: "London", country: "United Kingdom", coordinates: [51.5074, -0.1278], shopCount: 22 },
  { name: "Paris", country: "France", coordinates: [48.8566, 2.3522], shopCount: 17 },
  { name: "Berlin", country: "Germany", coordinates: [52.5200, 13.4050], shopCount: 11 },
  { name: "Amsterdam", country: "Netherlands", coordinates: [52.3676, 4.9041], shopCount: 4 },
  { name: "Copenhagen", country: "Denmark", coordinates: [55.6761, 12.5683], shopCount: 7 },
  { name: "Stockholm", country: "Sweden", coordinates: [59.3293, 18.0686], shopCount: 5 },
  { name: "Oslo", country: "Norway", coordinates: [59.9139, 10.7522], shopCount: 5 },
  { name: "Vienna", country: "Austria", coordinates: [48.2082, 16.3738], shopCount: 2 },
  { name: "Prague", country: "Czech Republic", coordinates: [50.0755, 14.4378], shopCount: 3 },
  { name: "Rome", country: "Italy", coordinates: [41.9028, 12.4964], shopCount: 3 },
  { name: "Milan", country: "Italy", coordinates: [45.4642, 9.1900], shopCount: 3 },
  { name: "Barcelona", country: "Spain", coordinates: [41.3851, 2.1734], shopCount: 2 },
  { name: "Istanbul", country: "Turkey", coordinates: [41.0082, 28.9784], shopCount: 5 },
  
  { name: "Tokyo", country: "Japan", coordinates: [35.6762, 139.6503], shopCount: 14 },
  { name: "Seoul", country: "South Korea", coordinates: [37.5665, 126.9780], shopCount: 10 },
  { name: "Hong Kong", country: "China", coordinates: [22.3193, 114.1694], shopCount: 7 },
  { name: "Shanghai", country: "China", coordinates: [31.2304, 121.4737], shopCount: 4 },
  { name: "Beijing", country: "China", coordinates: [39.9042, 116.4074], shopCount: 2 },
  { name: "Singapore", country: "Singapore", coordinates: [1.3521, 103.8198], shopCount: 2 },
  { name: "Bangkok", country: "Thailand", coordinates: [13.7563, 100.5018], shopCount: 5 },
  { name: "Taipei", country: "Taiwan", coordinates: [25.0330, 121.5654], shopCount: 6 },
  
  { name: "Melbourne", country: "Australia", coordinates: [-37.8136, 144.9631], shopCount: 15 },
  { name: "Sydney", country: "Australia", coordinates: [-33.8688, 151.2093], shopCount: 7 },
  { name: "Brisbane", country: "Australia", coordinates: [-27.4698, 153.0251], shopCount: 6 },
  { name: "Adelaide", country: "Australia", coordinates: [-34.9285, 138.6007], shopCount: 4 },
  { name: "Auckland", country: "New Zealand", coordinates: [-36.8485, 174.7633], shopCount: 2 },
  
  { name: "São Paulo", country: "Brazil", coordinates: [-23.5505, -46.6333], shopCount: 5 },
  { name: "Mexico City", country: "Mexico", coordinates: [19.4326, -99.1332], shopCount: 5 },
  { name: "Bogota", country: "Colombia", coordinates: [4.7110, -74.0721], shopCount: 2 },
  { name: "Lima", country: "Peru", coordinates: [-12.0464, -77.0428], shopCount: 6 }
];

// Function to search cities by name
export function searchCities(query) {
  if (!query || query.length < 2) return [];
  
  const normalizedQuery = query.toLowerCase();
  return majorCities
    .filter(city => 
      city.name.toLowerCase().includes(normalizedQuery) ||
      city.country.toLowerCase().includes(normalizedQuery)
    )
    .sort((a, b) => b.shopCount - a.shopCount) // Sort by shop count descending
    .slice(0, 8); // Limit to 8 results
}