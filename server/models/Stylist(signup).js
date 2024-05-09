const mongoose=require('mongoose')

const StylistSchema=new mongoose.Schema({
    name : String,
    email: String,
    age: Number,
    gender: String,
    mobileNumber:String,
    password:String
})

const StylistModel=mongoose.model("Users",StylistSchema)
module.exports=StylistModel