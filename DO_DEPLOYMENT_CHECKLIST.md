# DigitalOcean Deployment Checklist

## Pre-Deployment Checklist
- [x] Created `.do/app.yaml` configuration
- [x] Updated package.json with deployment scripts
- [x] Created production server (server.js)
- [x] Added Dockerfile for container deployment
- [x] Tested build process locally
- [x] Ensured comments-tester.html is copied to dist

## Repository Setup
1. **Ensure code is pushed to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for DigitalOcean deployment"
   git push origin main
   ```

## DigitalOcean App Platform Deployment

### ⚠️ CORS Solution Required
Due to CORS restrictions, this app **must be deployed as an App Service** (not static site) to use the built-in CORS proxy.

### Deployment Steps
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. **Source**: GitHub → `kathawut/fb-page-service-web` → `main` branch
4. **App Type**: App Service (Node.js)
5. **Configuration**:
   - Build Command: `npm run build && cp public/comments-tester.html dist/`
   - Run Command: `npm start`
   - Environment Variables: `NODE_ENV=production`, `PORT=8080`
   - HTTP Port: 8080
6. **Domain**: Use provided `.ondigitalocean.app` domain or add custom domain

### Why App Service is Required
- **CORS Proxy**: The Node.js server includes a built-in CORS proxy for `/api/*` routes
- **Facebook API Access**: Bypasses browser CORS restrictions by proxying requests server-side
- **Environment Detection**: Automatically detects DigitalOcean App Platform and uses proxy

### Cost
- **App Service**: $5/month (basic tier) - **Required for CORS functionality**
- **Static Site**: Not suitable due to CORS limitations

## Post-Deployment Verification
- [ ] Main page loads at `/`
- [ ] Comments tester accessible at `/comments-tester.html`
- [ ] API endpoints show correct URLs (production)
- [ ] CORS test passes
- [ ] Facebook comment API functionality works
- [ ] Attachment display and clicking works
- [ ] Responsive design works on mobile

## Expected URLs
- **Main App**: `https://your-app-name.ondigitalocean.app/`
- **Comments Tester**: `https://your-app-name.ondigitalocean.app/comments-tester.html`

## Features Available After Deployment
✅ Privacy Policy page with Facebook compliance  
✅ Facebook Comments API Tester  
✅ Enhanced attachment support with clickable elements  
✅ Smart iframe handling for Facebook URLs  
✅ Production-ready API configuration  
✅ Responsive design  
✅ Professional styling and UX  

## Cost
- **Static Site**: FREE (includes 3 static sites)
- **App Service**: $5/month (basic tier)
- **Container**: $5/month (basic tier)

## Notes
- The app automatically detects production environment
- API calls use direct URLs to external service (no proxy needed)
- Facebook iframe previews handled gracefully
- All attachment types supported with enhanced metadata display
