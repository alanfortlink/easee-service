const app = require('./src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const normalizePort = require('normalize-port');

const port = normalizePort(process.env.PORT || '5100');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log('Running on port ' + port);
