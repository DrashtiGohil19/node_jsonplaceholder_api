const userModel = require('../model/userModel')

exports.addUser = async (req,res) => {
    try {
        var data = await userModel.create(req.body);
        res.status(200).json({
            status:"Succesfully added user",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to add user",
            error
        })
    }
}

exports.getUser = async (req,res) => {
    try {
        var data = await userModel.find();
        res.status(200).json({
            status:"Succesfully get all users",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to get users",
            error
        })
    }
}

exports.updateUser = async (req,res) => {
    try {
        var id = req.params.id;
        var updateData = req.body;
        var data = await userModel.findByIdAndUpdate(id, updateData )
        res.status(200).json({  
            status:"Succesfully updated",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to update data",
            error
        })
    }
}

exports.deleteUser = async (req,res) => {
    try {
        var id = req.params.id;
        var data = await userModel.findByIdAndDelete(id);
        res.status(200).json({
            status:"Succesfully deleted",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to delete",
            error
        })
    }
}

exports.searchUser = async (req,res) => {
    try {
        var search = req.query.search;
        const regex = new RegExp(search, 'i');
        var data = await userModel.find({ username: regex })
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