FROM node:18.12.1-alpine as build

RUN apk add g++ make py3-pip


WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install --legacy-peer-deps

RUN npm run build:webpack

FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx/

COPY --from=build /usr/local/app/dist /usr/share/nginx/html

EXPOSE 80