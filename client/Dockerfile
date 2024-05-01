# FROM node:16-slim

# # Step 1 - Add container working directory
# WORKDIR /app

# # Step 2 - Copy npm dependencies
# COPY package*.json ./

# # Step 3 - Install dependencies
# RUN npm install

# # Copy app source code
# COPY . .

# # Expose port and start application
# EXPOSE 8080
# CMD [ "npm", "start" ]

# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app (optional for development if you use npm start to serve)
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]
