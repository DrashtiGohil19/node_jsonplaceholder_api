const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: { type: String },
    name: { type: String },
    email: { type: String },
    body: { type: String }
})

const commentModel = mongoose.model('comment',commentSchema)

module.exports = commentModel