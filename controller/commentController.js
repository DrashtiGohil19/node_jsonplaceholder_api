const commentModel = require('../model/commentModel');
const loginModel = require('../model/loginModel');
const postModel = require('../model/postModel');
const userModel = require('../model/userModel');

exports.addComment = async (req, res) => {
    try {
        var id = req.params.id;
        var postData = await postModel.findById(id);
        var userId = postData.userId;
        var userData = await userModel.findById(userId)
        var obj = {
            postId: id,
            name:userData.name,
            email:userData.email,
            body:req.body.body
        }
        var data = await commentModel.create(obj);
        res.status(200).json({
            status:"Succesfully added comment",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to add comment",
            error
        })
    }
}

exports.getComment = async (req,res) => {
    try {
        var data = await commentModel.find();
        res.status(200).json({
            status:"Succesfully get all comments",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to get comments",
            error
        })
    }
}

exports.updateComment = async (req,res) => {
    try {
        var id = req.params.id;
        updateData = req.body;
        var data = await commentModel.findByIdAndUpdate(id, updateData)
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

exports.deleteComment = async (req,res) => {
    try {
        var id = req.params.id;
        var data = await commentModel.findByIdAndDelete(id);
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

exports.searchComment = async (req,res) => {
    try {
        var search = req.query.search;
        const regex = new RegExp(search,'i');
        var data = await commentModel.find({ body: regex })
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