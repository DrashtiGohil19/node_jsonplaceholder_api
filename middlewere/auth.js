const jwt = require('jsonwebtoken')

const checkToken = (req,res,next) => {
    jwt.verify(req.headers.authorazation,"practiceExam",next);
}

module.exports = { checkToken }