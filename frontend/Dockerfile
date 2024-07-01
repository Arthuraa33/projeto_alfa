FROM node:alpine

WORKDIR /frontend

# COPY ./frontend .
COPY ./frontend .
COPY . .

RUN npm i react-beautiful-dnd
RUN npm install --save react-google-charts
RUN npm install
RUN npm install -g serve

EXPOSE 3000

# CMD [ "npm", "run", "deploy" ]
CMD [ "npm", "run", "start-watch" ]