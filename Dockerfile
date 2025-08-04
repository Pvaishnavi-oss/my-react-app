# Step 1: Use Nginx to serve static files
FROM nginx:alpine

# Step 2: Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy the build files from React app
COPY build/ /usr/share/nginx/html

# Step 4: Expose port
EXPOSE 80

# Step 5: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
