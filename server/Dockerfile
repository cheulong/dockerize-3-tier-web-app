FROM node:19.6-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

USER node 

COPY --chown=node:node ./ .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]