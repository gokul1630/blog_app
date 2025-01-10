FROM node:20.18-alpine AS base

FROM base AS build
WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

RUN cp -r public .next/standalone/ 
RUN cp -r .next/static .next/standalone/.next/

FROM base AS runner

WORKDIR /app

COPY --from=build /app/.next/standalone ./

EXPOSE 3000

CMD ["node", "server.js"]

