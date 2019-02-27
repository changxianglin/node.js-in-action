const express = require('express')

const app = express()
const path = require('path')

const bodyParser = require('body-parser')

const personRoute = require('./routes/person')
const customerRoute = require('./routes/customer')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// Handle for 404 - Not found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// Handle for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`))