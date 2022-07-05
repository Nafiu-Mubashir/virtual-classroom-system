const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
app.use(bodyParser.json({limit:'50mb'}))
app.use(cors())
require('dotenv').config()
const PORT = process.env.PORT||3000
const URI = process.env.MONGO_URI
const mongoose =require("mongoose")
mongoose.connect(URI,(err)=>{
    if (err) {
        console.log(`CANNOT CONNECT TO MONGOOSE`)
        
    } else {
        console.log(`MONGOOSE CONNECTED`)
    }
})
app.listen(PORT,()=>{
    console.log(`LISTENING ON PORT :${PORT}`)
})
