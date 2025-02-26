FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/Abhijith126/portfolio.git /app

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
