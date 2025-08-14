# ☕ Coffee Maps

A mobile-friendly web app for discovering high-quality local coffee shops, built for coffee enthusiasts who value single-origin pour-overs, quality latte art, and no flavored syrups.

## Features

- 🗺️ **Interactive Map View**: See all nearby high-quality coffee shops on a map
- 📱 **Mobile-First Design**: Optimized for iPhone and mobile usage
- 📍 **Location-Based Search**: Automatically finds coffee shops within 50km of your location
- ⭐ **Quality Indicators**: Filter by single origin, latte art, no syrups, and more
- ➕ **Community Contributions**: Add new coffee shops to share with friends
- 💾 **Local Storage**: Your added shops persist in your browser

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in your browser**: Navigate to `http://localhost:5173`

## Usage

### Viewing Coffee Shops
- Grant location permission to see nearby shops
- Switch between Map and List views using the header buttons
- Tap on map markers or list items to see shop details
- Get directions by tapping the "Directions" button

### Adding Coffee Shops
- Tap the "+ Add Shop" button
- Fill in the shop details (name, location, coordinates)
- Use "Use My Location" to auto-fill coordinates for the current location
- Select quality indicators that match the shop
- Rate the shop from 1-5 stars
- Add notes about what makes the shop special

### Quality Standards
The app focuses on coffee shops that meet high-quality standards:
- ✅ Single origin pour-overs available
- ✅ Quality latte art
- ✅ No flavored syrups (focus on coffee quality)
- ✅ Third-wave coffee approach
- ✅ Artisanal elements (optional)
- ✅ Local roasters (optional)

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast development and build tool
- **Leaflet & React-Leaflet** - Interactive maps
- **CSS3** - Mobile-first responsive design
- **LocalStorage** - Client-side data persistence

## Project Structure

```
src/
├── components/          # React components
│   ├── CoffeeMap.jsx   # Interactive map view
│   ├── CoffeeList.jsx  # List view of coffee shops
│   └── AddShopForm.jsx # Form for adding new shops
├── data/               # Coffee shop data
│   └── coffeeShops.js  # Initial curated coffee shop list
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # LocalStorage persistence
├── utils/              # Utility functions
│   └── distance.js     # Distance calculations
└── App.jsx             # Main application component
```

## Contributing

This app is designed for sharing with friends! Anyone can add high-quality coffee shops that meet our standards. Focus on:

- Specialty coffee shops with single-origin options
- Places that prioritize coffee quality over flavored drinks
- Shops with skilled baristas who create quality latte art
- Third-wave coffee establishments
- Artisanal and experimental coffee experiences

## License

Private project for personal use and sharing with coffee-loving friends.