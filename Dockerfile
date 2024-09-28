FROM node:16

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]