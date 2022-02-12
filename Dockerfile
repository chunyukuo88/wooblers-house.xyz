FROM node:14.15.4-alpine

WORKDIR /app

COPY . ./

COPY package-lock.json ./

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g

COPY . ./

EXPOSE 1234

CMD ["npm", "start"]