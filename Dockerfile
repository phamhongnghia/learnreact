FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN mkdir react
WORKDIR /react/

ADD . .

RUN npm install react-scripts -save

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]

