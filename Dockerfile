FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

USER 10014

EXPOSE 3333

CMD ["npm", "run", "dev"]