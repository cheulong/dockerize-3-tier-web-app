FROM node:19.6-alpine

WORKDIR /usr/src/api

ENV NODE_ENV production

COPY package*.json ./

RUN npm ci --only=production

USER node 

COPY --chown=node:node ./ .

EXPOSE 3000

CMD [ "node", "src/index.js"]