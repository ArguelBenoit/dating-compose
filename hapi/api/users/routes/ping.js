'use strict';

module.exports = {
  method: 'GET',
  path: '/api/ping',
  config: {
    handler: (req, res) => {
        res('pong');
    },
    // Add authentication to this route
    // The user must have a scope of `admin`
    auth: {
      strategy: 'jwt',
      scope: ['user']
    }
  }
};
