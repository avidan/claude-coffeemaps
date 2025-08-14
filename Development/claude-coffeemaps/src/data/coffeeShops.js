import { newCoffeeShops } from './newCoffeeShops.js'

export const coffeeShops = [
  {
    id: 1,
    name: "La Cabra",
    city: "Copenhagen",
    country: "Denmark",
    coordinates: [55.6761, 12.5683],
    notes: "Awesome. Way better than their NY stuff",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true
    },
    rating: 5
  },
  {
    id: 2,
    name: "Kabane",
    city: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    notes: "Specialty coffee in Paris",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true
    },
    rating: 4
  },
  {
    id: 3,
    name: "Clove Coffee Shop",
    city: "Paris",
    country: "France", 
    coordinates: [48.8566, 2.3522],
    notes: "Makes their own ceramics",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true,
      artisanal: true
    },
    rating: 4
  },
  {
    id: 4,
    name: "Kawa",
    city: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    notes: "Third wave coffee",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true
    },
    rating: 4
  },
  {
    id: 5,
    name: "Café Tormenta",
    city: "Mexico City",
    country: "Mexico",
    coordinates: [19.4326, -99.1332],
    notes: "Specialty Mexican coffee",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true,
      localRoaster: true
    },
    rating: 4
  },
  {
    id: 6,
    name: "Raku Café",
    city: "Mexico City", 
    country: "Mexico",
    coordinates: [19.4326, -99.1332],
    notes: "Artisan coffee experience",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true
    },
    rating: 4
  },
  {
    id: 7,
    name: "Bugan Coffee Lab",
    city: "Milan",
    country: "Italy",
    coordinates: [45.4642, 9.1900],
    notes: "Coffee laboratory experience",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true,
      experimental: true
    },
    rating: 5
  },
  {
    id: 8,
    name: "Bar Vabres",
    city: "Milan",
    country: "Italy",
    coordinates: [45.4642, 9.1900],
    notes: "Italian specialty coffee",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true
    },
    rating: 4
  },
  {
    id: 9,
    name: "ROOT",
    city: "Seattle",
    country: "United States",
    coordinates: [47.6062, -122.3321],
    notes: "Pacific Northwest specialty coffee",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true,
      localRoaster: true
    },
    rating: 4
  },
  {
    id: 10,
    name: "Story Coffee",
    city: "Bellevue",
    country: "United States", 
    coordinates: [47.6101, -122.2015],
    notes: "Craft coffee storytelling",
    qualityIndicators: {
      singleOrigin: true,
      latteArt: true,
      noFlavoredSyrups: true,
      thirdWave: true
    },
    rating: 4
  },
  // All new shops from Excel file
  ...newCoffeeShops
];

export const qualityFilters = {
  singleOrigin: "Single Origin Pour Overs",
  latteArt: "Quality Latte Art", 
  noFlavoredSyrups: "No Flavored Syrups",
  thirdWave: "Third Wave Coffee",
  artisanal: "Artisanal Elements",
  experimental: "Experimental/Lab Style",
  localRoaster: "Local Roaster"
};