# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build && cp public/comments-tester.html dist/

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built application
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Expose port
EXPOSE 8080

# Set environment
ENV NODE_ENV=production
ENV PORT=8080

# Start the application
CMD ["npm", "start"]
