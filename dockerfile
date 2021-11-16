FROM node:14.17.6-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
<<<<<<< HEAD

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/OSRS-Groceries /usr/share/nginx/html

# Expose port 80
EXPOSE 80
=======
COPY . /app
RUN npm run build --prod
RUN chmod +X /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
>>>>>>> parent of 7493d24 (Update dockerfile)
