FROM node:14.15.4-alpine

WORKDIR /app

COPY . ./

RUN npm i

EXPOSE 1234

CMD ["npm", "start"]