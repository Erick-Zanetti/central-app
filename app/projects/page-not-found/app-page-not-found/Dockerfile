FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm update
RUN npm install @types/node@14

RUN npm install --legacy-peer-deps

RUN npm run build:single-spa

FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx/

COPY --from=build /usr/local/app/dist/app-page-not-found /usr/share/nginx/html

EXPOSE 80
