FROM node:14.15.4-alpine

ENV APP_HOME /app

WORKDIR $APP_HOME 

COPY . $APP_HOME 

RUN npm i

EXPOSE 1234

CMD ["npm", "start"]
