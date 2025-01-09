FROM node:20.18-alpine

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install pm2 -g
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "start", "npm", "--name", "devops-blog-app", "--", "run", "start", "--", "-p", "3000"]

