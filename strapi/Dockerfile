FROM node:10

RUN mkdir -p /usr/src/api/strapi
WORKDIR /usr/src/api/strapi

RUN npm i npm@latest -g
RUN npm install -g strapi@3.0.0-alpha.13.0.1

COPY ./app /usr/src/api/strapi

RUN rm -f package-lock.json
RUN rm -r node_modules
RUN npm install

RUN npm run postinstall

CMD ["strapi", "start"]
