FROM node:19.6-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

USER node 

COPY --chown=node:node ./src .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]