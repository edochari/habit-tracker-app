const mongoose=require('mongoose');

const multer = require('multer');
const path = require('path');


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        // required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    name:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,
    }
},{
    timestamps:true
});


const User = mongoose.model('User',userSchema);

module.exports=User;