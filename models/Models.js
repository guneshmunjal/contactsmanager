const mongoose = require("mongoose");


const  creatingContacts = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }
    
});

module.exports = mongoose.model("contactmanager",creatingContacts);