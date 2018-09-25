const path = require('path');
const { Pact } = require('../../node_modules/@pact-foundation/pact');

global.port = 1122;
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), '../', 'logs', 'pact-mockserver-integration.log'),
  dir: path.resolve(process.cwd(), '../', 'pacts'),
  spec: 2,
  cors: true,
  pactfileWriteMode: 'update',
  consumer: 'books-web-client',
  provider: 'books-api'
});