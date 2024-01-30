FROM node:14 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install --legacy-peer-deps

RUN npm run build:webpack

FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx/

COPY --from=build /usr/local/app/dist /usr/share/nginx/html

EXPOSE 80