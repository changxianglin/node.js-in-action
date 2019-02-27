const CustomerModel = require('../models/customer.model')
const express = require('express')
const router = express.Router()

router.post('/customer', (req, res) => {
    if(!req.body) {
        return res.status(404).send('Request body is missing')
    } 

    // let user = {
    //     name: 'firstname lastname',
    //     email: 'email@gmail.com'
    // }

    let model = new CustomerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router