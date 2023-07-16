const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    userId: { type: String },
    title: { type: String }
})

const albumModel = mongoose.model('album', albumSchema);

module.exports = albumModel