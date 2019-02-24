'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 8000
});

//Connect to db
server.app.db = mongojs('hapi', ['books']);

//Load plugins and start server
server.register([
    require('./routes/books')
], err => {
    if (err) {
      throw err;
    }
    server.start(() => {
      console.log('Server running at:', server.info.uri);
    });
});
