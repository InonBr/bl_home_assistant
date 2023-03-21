FROM node:lts-alpine

WORKDIR /server

COPY . .
COPY package*.json ./
COPY .env ./ 

RUN yarn install

EXPOSE 5000
EXPOSE 3306

ENV NODE_ENV=docker

RUN yarn typeorm:migrate
RUN yarn typeorm:run-migrations

CMD ["yarn", "start"]