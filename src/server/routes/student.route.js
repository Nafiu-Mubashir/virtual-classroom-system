const express = require('express')
const router = express.Router()
const studentController = require("../controllers/student.controller")
router.post("/signup",studentController.displaySignup)
module.exports=router