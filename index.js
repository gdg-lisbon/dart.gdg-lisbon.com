var Hapi = require('hapi');
var logger = require('./modules/logger.js')

var port = parseInt(process.env.PORT) || 8080
var server = module.exports = new Hapi.Server(port);

// Add the route
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: { path: './', listing: false, index: true }
    }
});

// Start the server
server.start(function () {
  logger.info('Server started at ' + server.info.uri);
});
