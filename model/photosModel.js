const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    albumId: { type:String },
    title: { type: String },
    url: { type: String },
    thumbnailUrl: { type: String }
})

const photosModel = mongoose.model('photos', photosSchema)

module.exports = photosModel