const client = require('./webpack/webpack.client.config.js');
const server = require('./webpack/webpack.server.config.js');

const dir = __dirname + '/built';
client.output.path = dir;
server.output.path = dir;

module.exports = [
  client,
  server
];