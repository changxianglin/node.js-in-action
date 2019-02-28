const express = require('express')

const router = express.Router()
const mongoose = require('mongoose')
const Home = require('../models/home')

const db = require('../config/db')



router.get('/post', (req, res) => {
    res.send('first pages')
})

router.post('/post', (req, res) => {
    console.log(req)
    res.status(200).send('OK')
})


module.exports = router