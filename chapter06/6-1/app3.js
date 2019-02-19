const connect = require('connect')

connect()
    .use((req, res) => {
        foo()
        res.setHeader('Content-Type', 'text/plain')
        res.end('hello world')
    })
    .listen(3000)