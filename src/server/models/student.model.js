const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const studentSchema = mongoose.Schema({
    firstname:{
        require:true,
        type:String,
    },
    lastname:{
        require:true,
        type:String,
    },
    department:{
        require:true,
        type:String,
    },
    gender:{
        require:true,
        type:String,
    },
    email:{
        require:true,
        type:String,
    },
    password:{
        require:true,
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }

})
let saltRound = 5;
studentSchema.pre("save",function(next){
    bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
        if (err) {
            console.log(`Error in hashing password`)
            
        } else {
            this.password= hashedPassword
            next()
            
        }
    })
})
let studentModel = mongoose.model("student_tb",studentSchema)
module.exports= studentModel