import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

export default Post;