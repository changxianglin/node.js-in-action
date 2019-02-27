const mongoose = require('mongoose')

const server = '@ds255005.mlab.com:55005'
const database = '/rest-api-workshop'
const user = 'restapi'
const password = 'api123'
// mongodb://<dbuser>:<dbpassword>@ds255005.mlab.com:55005/rest-api-workshop

mongoose.connect(`mongodb://${user}:${password}${server}${database}`)

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)