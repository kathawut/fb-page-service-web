# DigitalOcean App Platform Deployment Guide

## Facebook Pages API Privacy Policy App

This guide explains how to deploy the Facebook Pages API Privacy Policy app to DigitalOcean App Platform.

## Project Structure
- **Privacy Policy Page**: Main landing page with Facebook app compliance
- **Comments API Tester**: Tool for testing Facebook Comments API with attachment support
- **Static Assets**: Icons, favicon, and manifest files

## Deployment Options

### Option 1: Static Site (Recommended)
This project is optimized for static site deployment since it's a frontend-only application.

#### Steps:
1. **Push to GitHub**: Make sure your code is pushed to the GitHub repository
2. **DigitalOcean App Platform**: 
   - Go to https://cloud.digitalocean.com/apps
   - Click "Create App"
   - Connect to GitHub repository: `kathawut/fb-page-service-web`
   - Select branch: `main`

3. **App Configuration**:
   - **App Type**: Static Site
   - **Build Command**: `npm run build && cp public/comments-tester.html dist/`
   - **Output Directory**: `dist`
   - **Environment Variables**: 
     - `NODE_ENV=production`

4. **Custom Domain** (Optional):
   - Add your custom domain in the app settings
   - Configure DNS to point to DigitalOcean's nameservers

### Option 2: Using app.yaml (Automated)
The `.do/app.yaml` file is included for automated deployment configuration.

## Features Deployed
- ✅ Privacy Policy page with Facebook compliance
- ✅ Comments API Tester with comprehensive attachment support
- ✅ Smart Facebook embed handling
- ✅ Production-ready API endpoint configuration
- ✅ Responsive design for mobile and desktop
- ✅ Professional styling and UX

## Environment Detection
The app automatically detects the environment:
- **Development**: Uses Vite proxy for CORS handling
- **Production**: Uses direct API calls to external service

## Cost Estimation
- **Static Site**: Free tier (3 static sites included)
- **Basic App**: $5/month if using the app service option

## Post-Deployment
1. **Test the Comments API Tester**: Access `/comments-tester.html`
2. **Verify Privacy Policy**: Check the main page at `/`
3. **Test API Functionality**: Use the CORS test button to verify connectivity

## Troubleshooting
- **CORS Issues**: The app is configured for production API calls
- **404 Errors**: Ensure `catchall_document: index.html` is configured
- **Build Failures**: Check that Node.js version is compatible (16.x recommended)

## Support
- DigitalOcean App Platform Docs: https://docs.digitalocean.com/products/app-platform/
- Facebook API Documentation: https://developers.facebook.com/docs/graph-api/
