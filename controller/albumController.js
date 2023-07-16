const albumModel = require('../model/albumModel');

exports.addAlbum = async (req,res) => {
    try {
        var id = req.params.id;
        var obj = {
            userId:id,
            title:req.body.title
        }
        var data = await albumModel.create(obj);
        res.status(200).json({
            status:"succesfully added album",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to add album",
            error
        })
    }
}

exports.getAlbum = async (req,res) => {
    try {
        var data = await albumModel.find();
        res.status(200).json({
            status:"Succesfully get album data",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Fialed to get album",
            error
        })
    }
}

exports.updateAlbum = async (req,res) => {
    try {
        var id = req.params.id;
        var updateData = req.body;
        var data = await albumModel.findByIdAndUpdate(id, updateData);
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

exports.deleteAlbum = async (req,res) => {
    try {
        var id = req.params.id;
        var data = await albumModel.findByIdAndDelete(id);
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

exports.searchAlbum = async (req,res) => {
    try {
        var search = req.query.search
        const regex = new RegExp(search,'i');
        var data = await albumModel.find({ title: regex })
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