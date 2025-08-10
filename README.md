# Privacy Policy for Facebook App

A modern, responsive Privacy Policy page for Facebook applications, built with Vite and deployed on Firebase Hosting.

## Features

- **Professional Design**: Clean, Facebook-branded design with proper typography
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Built with Vite for optimal performance
- **Easy Deployment**: One-command deployment to Firebase Hosting

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI (installed globally)

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see your Privacy Policy page.

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Firebase Deployment

### Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firebase Hosting for your project
3. Update the project ID in `.firebaserc`:
   ```json
   {
     "projects": {
       "default": "your-firebase-project-id"
     }
   }
   ```
4. Login to Firebase (if not already logged in):
   ```bash
   firebase login
   ```

### Deploy

Deploy to Firebase Hosting:
```bash
npm run deploy
```

Or manually:
```bash
npm run build
firebase deploy
```

Your Privacy Policy page will be available at `https://your-project-id.web.app`

## Customization

### Update Privacy Policy Content

Edit the content in `src/main.js` to customize:
- Company name and contact information
- Specific privacy practices
- Data collection details
- Facebook-specific requirements

### Styling

Modify `src/style.css` to change:
- Colors and branding
- Typography
- Layout and spacing
- Responsive breakpoints

### SEO and Meta Tags

Update `index.html` for:
- Page title and description
- Open Graph tags
- Favicon

## Project Structure

```
├── index.html          # Main HTML file with meta tags
├── src/
│   ├── main.js         # Privacy Policy content and logic
│   └── style.css       # Styling and responsive design
├── public/             # Static assets
├── firebase.json       # Firebase hosting configuration
├── .firebaserc         # Firebase project configuration
└── package.json        # Project dependencies and scripts
```

## Facebook App Requirements

This Privacy Policy template includes sections required by Facebook's Platform Policy:

1. **Data Collection**: What information is collected
2. **Data Usage**: How the information is used
3. **Data Sharing**: When and how data is shared
4. **Data Security**: Security measures in place
5. **User Rights**: User control over their data
6. **Contact Information**: How to reach you

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this Privacy Policy page or have questions about Facebook's requirements, please refer to:

- [Facebook Platform Policy](https://developers.facebook.com/policy/)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Vite Documentation](https://vitejs.dev/)
