FROM node:lts-alpine

WORKDIR /server

COPY . .
COPY package*.json ./
COPY .env ./ 

RUN yarn install

EXPOSE 5000
EXPOSE 3306

ENV DOCKER=db

CMD ["yarn", "start"]