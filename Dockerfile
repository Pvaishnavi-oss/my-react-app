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
# Build React app
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

