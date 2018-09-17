const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = Schema({
    _userId:mongoose.Schema.Types.ObjectId,
    userNanme:{
        type:String
    },
    passWord:{
        type:String
    }
});

const userModel = mongoose.model('User',userSchema);
module.exports =userModel;