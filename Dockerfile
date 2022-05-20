FROM node:14.15.4-alpine

WORKDIR /app

RUN npm i

COPY . ./

EXPOSE 1234

CMD ["npm", "start"]