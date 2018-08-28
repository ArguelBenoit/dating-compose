#!/bin/sh

cd /usr/src/api/strapi

npm install
npm run postinstall

strapi start
