var loginModel = require('../model/loginModel')
const jwt = require('jsonwebtoken');

exports.registration = async (req,res) => {
    try {
        var data = await loginModel.create(req.body);
        res.status(200).json({
            status:"Success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
}

exports.login = async (req,res) => {
    try {
        var data = await loginModel.find({ email:req.body.email });
        if (data.length > 0) {
            if ( data[0].password === req.body.password ) {
                var token = jwt.sign({ id:data[0].id }, "practiceExam" )
                res.status(200).json({
                    status:"Success",
                    token
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
}