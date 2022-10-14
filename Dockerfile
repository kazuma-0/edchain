FROM node:18.10-alpine3.15

WORKDIR /usr/src/app

EXPOSE 3000

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
RUN yarn global add serve
RUN yarn build

CMD ["serve", "-s", "build"]