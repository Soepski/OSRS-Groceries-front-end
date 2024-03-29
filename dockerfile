# FROM node:14.17.6-alpine as build-step
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install

# Stage 1

FROM node:14.17.6-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

# COPY . /app

# RUN npm run build --prod

# EXPOSE 4200
