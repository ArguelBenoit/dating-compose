FROM node:10

RUN mkdir -p /usr/src/api/strapi
WORKDIR /usr/src/api/strapi

RUN npm install -g strapi@3.0.0-alpha.13.0.1

COPY ./app /usr/src/api/strapi

RUN npm install

RUN npm run postinstall

CMD ["strapi", "start"]
