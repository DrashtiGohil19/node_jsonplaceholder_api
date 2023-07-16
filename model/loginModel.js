const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String }
})

const loginModel = mongoose.model('login', loginSchema)

module.exports = loginModel