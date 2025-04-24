# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json tsconfig.json ./
RUN npm install

# Copy source and public files
COPY src ./src
COPY public ./public

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 8080

# Run the server
CMD ["npm", "start"]