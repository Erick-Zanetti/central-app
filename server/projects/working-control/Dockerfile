FROM node:lts as dependencies
WORKDIR /working-control
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /working-control
COPY . .
COPY --from=dependencies /working-control/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /working-control
ENV NODE_ENV production
COPY --from=builder /working-control/dist ./
COPY --from=builder /working-control/node_modules ./node_modules
COPY --from=builder /working-control/package.json ./package.json

EXPOSE 3002
CMD ["node", "src/main.js"]