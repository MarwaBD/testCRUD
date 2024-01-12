# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json /usr/src/app/

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["node", "server.js"]
