FROM node:12-alpine3.11

WORKDIR /usr/local/lib

COPY .  /usr/local/lib/

RUN npm install

RUN npm run build

EXPOSE 4200

CMD [ "node", "app.js" ]