# JK Hospital Website

A modern, responsive website for JK Hospital built with HTML, CSS, JavaScript, and Node.js backend.

## Features

- Clean and modern design
- Responsive layout for all devices
- Google Maps integration
- Services showcase
- Contact information
- Smooth scrolling navigation
- PWA support for offline access
- Mobile app support
- Appointment booking system
- Department and facility information
- Interactive modals and notifications

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/hssling/jk-hospital-website.git
   cd jk-hospital-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The website will be available at http://localhost:3000

## Development Workflow

1. Before making changes, pull the latest code:
   ```bash
   git pull origin main
   ```

2. For major changes, create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. After making changes:
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin feature/your-feature-name
   ```

4. Create a pull request on GitHub to merge your changes into main

## Project Structure

```
jk-hospital-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── server.js           # Node.js/Express backend
├── package.json        # Node.js dependencies
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker
└── README.md          # This file
```

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript
  - Font Awesome Icons
  - Google Maps API

- Backend:
  - Node.js
  - Express.js
  - CORS
  - Body Parser
  - Nodemailer

- Development Tools:
  - Git
  - npm
  - nodemon

## Email Configuration

To enable email notifications for appointment bookings, update the email configuration in `server.js`:

```javascript
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-app-password'    // Replace with your app password
    }
});
```

## Deployment

1. GitHub Pages:
   - The website is automatically deployed to GitHub Pages
   - Accessible at: https://hssling.github.io/jk-hospital-website/

2. Local Development:
   - Frontend only: Open `index.html` in your browser
   - With backend: Run `npm start` and access at http://localhost:3000

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
