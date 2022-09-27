FROM node:lts as dependencies
WORKDIR /financial-managemnt
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /financial-managemnt
COPY . .
COPY --from=dependencies /financial-managemnt/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /financial-managemnt
ENV NODE_ENV production
COPY --from=builder /financial-managemnt/dist ./
COPY --from=builder /financial-managemnt/node_modules ./node_modules
COPY --from=builder /financial-managemnt/package.json ./package.json

EXPOSE 3001
CMD ["node", "src/main.js"]