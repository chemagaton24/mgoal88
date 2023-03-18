const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String
})

module.exports = mongoose.model('Users', schema)