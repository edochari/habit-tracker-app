const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habit:{
        type:String,
        required:true
    },
    monthlyCount:{
        type:Number,
    },
    user:{
        ref:user,
    }
})