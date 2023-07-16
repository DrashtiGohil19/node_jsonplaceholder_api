const postModel = require('../model/postModel');

exports.addPost = async (req,res) => {
    try {
        var id = req.params.id;
        var obj = {
            userId:id,
            title:req.body.title,
            body:req.body.body
        }
        var data = await postModel.create(obj);
        res.status(200).json({
            status:"Succesfully added post",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to add post",
            error
        })
    }
}

exports.getPost = async (req,res) => {
    try {
        var data = await postModel.find();
        res.status(200).json({
            status:"Succesfully get all post",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to get post",
            error
        })
    }
}

exports.updatePost = async (req,res) => {
    try {
        var id = req.params.id;
        var updateData = req.body;
        var data = await postModel.findByIdAndUpdate(id, updateData )
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

exports.deletePost = async (req,res) => {
    try {
        var id = req.params.id;
        var data = await postModel.findByIdAndDelete(id);
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

exports.searchPost = async (req,res) => {
    try {
        var search = req.query.search;
        const regex = new RegExp(search,'i');
        var data = await postModel.find({ title: regex })
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