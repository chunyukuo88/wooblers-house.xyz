FROM node:16-alpine

ENV APP_HOME /app

WORKDIR $APP_HOME

COPY package.json $APP_HOME

RUN npm i

COPY . $APP_HOME

EXPOSE 1234

CMD ["npm", "start"]
