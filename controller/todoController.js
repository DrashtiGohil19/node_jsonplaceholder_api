const todoModel = require('../model/todoModel')

exports.addtodo = async (req,res) => {
    try {
        var id = req.params.id;
        var obj = {
            userId:id,
            title:req.body.title,
            completed:req.body.completed
        }
        var data = await todoModel.create(obj);
        res.status(200).json({
            status:"Succesfully added todo",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to add todo",
            error
        })
    }
}

exports.getTodo = async (req,res) => {
    try {
        var data = await todoModel.find();
        res.status(500).json({
            status:"Succesfully get todo data",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to get todo data",
            error
        })
    }
}


exports.updateTodo = async (req,res) => {
    try {
        var id = req.params.id;
        var updateData = req.body;
        var data = await todoModel.findByIdAndUpdate(id, updateData);
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

exports.deleteTodo = async (req,res) => {
    try {
        var id = req.params.id;
        var data = await todoModel.findByIdAndDelete(id);
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

exports.searchTodo = async (req,res) => {
    try {
        var search = req.query.search
        const regex = new RegExp(search,'i');
        var data = await todoModel.find({ title: regex })
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