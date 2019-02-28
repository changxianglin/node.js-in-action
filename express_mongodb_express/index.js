const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const mongoose = require('mongoose')

const db = require('./config/db').dbURI

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err))

// mongoose.connect('mongodb://localhost:27017/writehome')

var Schema = mongoose.Schema

var userDataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    author: String
}, { collation: 'user-data'})

var UserData = mongoose.model('UserData', userDataSchema)

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.get('/get-data', (req, res, next) => {
    UserData.find()
        .then((doc) => res.send({items: doc}))
        .catch(err = console.error(err))
})

app.post('/insert', (req, res, next) => {
    console.log(req.body)
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    }

    var data = new UserData(item)
    data.save()
})


const homeRoute = require('./routes/home')

app.use(homeRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.info(`Server running in port ${PORT}`))