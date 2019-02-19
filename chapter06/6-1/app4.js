const connect = require('connect');
const setup = require('./middlewear/logger');
const errorHandler = require('./middlewear/error.js');
 
function hello(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  next(new Error('Intentional error'));
}

const app = connect()
  .use(setup(':method :url'))
  .use(hello)
  .use(errorHandler)
  .listen(3000);