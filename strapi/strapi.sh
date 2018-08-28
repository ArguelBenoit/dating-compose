#!/bin/sh

cd /usr/src/api/strapi

if [ ! -d "/node_modules" ]; then
  npm install
  npm run postinstall
fi

strapi start
