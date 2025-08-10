#!/bin/bash

echo "🚀 Privacy Policy Deployment Test"
echo "================================="

# Check if Firebase CLI is available
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it globally:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

echo "✅ Firebase CLI found"

# Check if project is configured
if [ ! -f ".firebaserc" ]; then
    echo "❌ .firebaserc not found. Please configure your Firebase project."
    exit 1
fi

echo "✅ Firebase project configured"

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "✅ Ready for deployment!"
echo "Run 'firebase deploy' to deploy to Firebase Hosting"
echo ""
echo "📝 Don't forget to update:"
echo "   - Project ID in .firebaserc"
echo "   - Company details in src/main.js"
echo "   - Contact info in src/main.js"
