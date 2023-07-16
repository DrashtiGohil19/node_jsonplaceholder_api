const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: String },
    title: { type: String },
    body: { type: String }
})

const postModel = mongoose.model('post', postSchema);

module.exports = postModel