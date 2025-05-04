# JK Hospital Website

A modern, responsive website for JK Hospital built with HTML, CSS, and JavaScript.

## Features

- Clean and modern design
- Responsive layout for all devices
- Google Maps integration
- Services showcase
- Contact information
- Smooth scrolling navigation
- PWA support for offline access
- Mobile app support

## Setup Instructions

1. Clone this repository
2. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
3. Replace `YOUR_API_KEY` in `index.html` with your actual API key
4. Host the website on a web server

## Deploying the Website

1. Create a GitHub repository
2. Push your code to the repository
3. Enable GitHub Pages
4. The website will be available at `https://username.github.io/repository-name`

## Creating Android App (APK)

To create an Android app from this website:

1. Install Node.js from https://nodejs.org/
2. Install Bubblewrap CLI:
   ```
   npm install -g @bubblewrap/cli
   ```
3. Generate the TWA configuration:
   ```
   bubblewrap init
   ```
4. Build the APK:
   ```
   bubblewrap build
   ```
5. The APK will be generated in the `android/app/build/outputs/apk/release/` directory

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript functionality
- `manifest.json` - PWA manifest
- `sw.js` - Service Worker
- `README.md` - Project documentation

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Maps API
- Font Awesome Icons
- PWA Technology
- Trusted Web Activity (TWA) for Android app
