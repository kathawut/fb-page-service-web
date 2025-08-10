# Firebase Deployment Guide

## Quick Setup Steps

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "my-facebook-app-privacy")
4. Enable Google Analytics (optional)
5. Create project

### 2. Enable Firebase Hosting
1. In your Firebase project, go to "Hosting" in the left menu
2. Click "Get started"
3. Follow the setup instructions

### 3. Configure Project
1. Note your Project ID from Firebase Console
2. Update `.firebaserc` file:
   ```json
   {
     "projects": {
       "default": "YOUR_PROJECT_ID_HERE"
     }
   }
   ```

### 4. Login to Firebase (First time only)
```bash
firebase login
```

### 5. Deploy
```bash
npm run deploy
```

Your Privacy Policy will be live at:
`https://YOUR_PROJECT_ID.web.app`

## Customization Checklist

### Required Changes
- [ ] Update `.firebaserc` with your Firebase project ID
- [ ] Update company name in `src/main.js`
- [ ] Update contact email in `src/main.js`
- [ ] Update company address in `src/main.js`
- [ ] Update page title in `index.html`
- [ ] Update meta description in `index.html`

### Optional Customizations
- [ ] Add your logo/favicon
- [ ] Customize colors in `src/style.css`
- [ ] Add additional privacy policy sections
- [ ] Set up custom domain in Firebase

## Facebook App Integration

To use this Privacy Policy with your Facebook app:

1. Deploy the page to Firebase
2. Copy the live URL (e.g., `https://your-project.web.app`)
3. In Facebook App Dashboard:
   - Go to App Settings > Basic
   - Add the URL to "Privacy Policy URL" field
   - Save changes

## Important Notes

- The Privacy Policy URL must be publicly accessible
- Facebook requires HTTPS (Firebase Hosting provides this)
- Update the privacy policy whenever you change data collection practices
- Keep a copy of previous versions for compliance records
