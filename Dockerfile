FROM node:20.10-alpine3.17

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

# RUN yarn i -g serve

COPY . .

RUN yarn build

# EXPOSE 8000
# RUN yarn dev
CMD ["yarn", "dev"]

# RUN yarn global add serve

# WORKDIR /app/build

# # EXPOSE 3000

# CMD ["serve", "-p", 80,"-s"]
# # CMD [ "yarn", "start" ]
# # CMD [ "serve", "-s", "dist" ]