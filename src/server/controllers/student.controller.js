const studentModel = require("../models/student.model")
const jwt = require('jsonwebtoken')
const jwtSecrete = process.env.JWT_SECRETE
const displaySignup=(req,res)=>{
    console.log(req.body)
    const newStudent= req.body

}
module.exports={displaySignup}