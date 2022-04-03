FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs npm

RUN mkdir react
WORKDIR /react/

ADD . .

RUN npm install react-scripts -save

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]

