FROM node:lts as dependencies
WORKDIR /server
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /server
COPY . .
COPY --from=dependencies /server/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /server
ENV NODE_ENV production
COPY --from=builder /server/dist ./
COPY --from=builder /server/node_modules ./node_modules
COPY --from=builder /server/package.json ./package.json

EXPOSE 3000
CMD ["node", "main.js"]