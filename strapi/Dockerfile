FROM node:10

WORKDIR /usr/src/api

RUN npm install -g strapi@3.0.0-alpha.13.1

COPY strapi.sh ./
RUN chmod +x ./strapi.sh

EXPOSE 1337

CMD ["./strapi.sh"]
