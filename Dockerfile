FROM node:12-alpine

# ENV NODE_ENV production

WORKDIR /app
ADD package.json .
RUN yarn install
ADD . .
RUN yarn build

ENTRYPOINT ["yarn"]
