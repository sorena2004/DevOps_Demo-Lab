FROM node:22-alpine

WORKDIR /app

COPY package*.js ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

USER node

CMD ["npm" , "start"]
