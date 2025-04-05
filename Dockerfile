# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM node:18-alpine as prod

WORKDIR /app

COPY from=build /app/node_modules ./node_modules
COPY from=build /app/next ./next
COPY from=build /app/public ./public
COPY from=build /app/package.json ./package.json

RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
