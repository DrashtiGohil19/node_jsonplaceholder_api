const photosModel = require('../model/photosModel')

exports.addPhotos = async (req,res) => {
    try {
        var id = req.params.id;
        var obj = {
            albumId:id,
            title:req.body.tital,
            url:req.body.url,
            thumbnailUrl:req.body.thumbnailUrl
        }
        var data = await photosModel.create(obj);
        res.status(200).json({
            status:"Succesfully added data",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to add data",
            error
        })
    }
}

exports.getPhotos = async (req,res) => {
    try {
        var data = await photosModel.find();
        res.status(200).json({
            status:"succesfully get data",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Fialed to get data",
            error
        })
    }
}


exports.updatePhoto = async (req,res) => {
    try {
        var id = req.params.id;
        var updateData = req.body;
        var data = await photosModel.findByIdAndUpdate(id, updateData);
        res.status(200).json({
            status:"Succesfully updated",
            data
        })
    } catch (error) {
        res.status(200).json({
            status:"Succesfully updated",
            data
        })
    }
}

exports.deletephotos = async (req,res) => {
    try {
        var id = req.params.id;
        var data = await photosModel.findByIdAndDelete(id);
        res.status(200).json({
            status:"Succesfully deleted data",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to delete data",
            data
        })
    }
}

exports.searchphotos = async (req,res) => {
    try {
        var search = req.query.search
        const regex = new RegExp(search,'i');
        var data = await photosModel.find({ title: regex })
        res.status(200).json({
            status:"Succesfully get data",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to get data",
            error
        })
    }
}