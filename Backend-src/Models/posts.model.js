import mongoose  from "mongoose";

const postSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postText: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true

});

const User = mongoose.model('Post', postSchema);

export default Post;

