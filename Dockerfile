FROM node:6.9.4

ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
