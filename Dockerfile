### STAGE 1: Build ###
FROM node:16.14.2-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN apk update && apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++ \
    && npm ci \
    && apk del .gyp
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.22.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/portfolio-website /usr/share/nginx/html
