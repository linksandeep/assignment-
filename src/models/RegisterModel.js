const mongoose= require("mongoose")

const RegisterSchema= new mongoose.Schema({
   profileImage: {
    type:String,
    }, // s3 link

   FullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Register",RegisterSchema);




