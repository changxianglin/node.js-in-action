const connect = require('connect')
const setup = require('./middlewear/logger')

function hello(req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.end('hello world')
}

connect()
    .use(setup(':method: url'))
    .use(hello)
    .listen(3000)