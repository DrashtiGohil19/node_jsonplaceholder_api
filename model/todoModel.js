const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: { type: String },
    title: { type: String },
    completed: { type: Boolean }
})

const todoModel = mongoose.model('todo', todoSchema)

module.exports = todoModel