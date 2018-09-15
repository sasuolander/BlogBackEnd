const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = Schema({
    _postId:mongoose.Schema.Types.ObjectId,
    postTitle:{
        type:String
    },
    postContent:{
        type:String
    },
    postCreated:{
        type: Date,
        default: Date.now
    },
    postAuthor:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
});

const blogModel = mongoose.model('post',postSchema);
module.exports =postModel;