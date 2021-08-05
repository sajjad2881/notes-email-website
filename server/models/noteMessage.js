import mongoose from 'mongoose';


//adds some sort of uniformity to the schema 
const postSchema = mongoose.Schema({
    title: String,
    content: String, 
    creator: String,
    tags:  [String],
    selectedFile: String, 
    community: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostNote = mongoose.model('PostNote', postSchema)

//exporting a mongoose model from this file, later can run commands like find, delete, run, update
export default PostNote