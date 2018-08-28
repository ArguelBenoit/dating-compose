FROM node:10

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/
RUN npm install

COPY . /usr/app

CMD ["npm", "run", "dev"]
