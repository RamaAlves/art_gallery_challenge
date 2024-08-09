FROM node:20.10-alpine3.17

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["yarn", "dev"]