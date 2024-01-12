# Dockerfile for Nginx

# Use the official Nginx base image
FROM nginx:alpine

# Copy the nginx.conf file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
