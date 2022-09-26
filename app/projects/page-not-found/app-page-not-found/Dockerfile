FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install --legacy-peer-deps

RUN npm run build:single-spa

FROM nginx:latest

COPY --from=build /usr/local/app/dist/app-page-not-found /usr/share/nginx/html

EXPOSE 80