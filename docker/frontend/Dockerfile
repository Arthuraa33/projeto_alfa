FROM node:alpine

WORKDIR /frontend

COPY ./frontend .
RUN npm i react-beautiful-dnd
RUN npm install --save react-google-charts
RUN npm install
RUN npm install -g serve

CMD [ "npm", "run", "deploy" ]