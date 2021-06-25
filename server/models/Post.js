const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: {
        type: String,
        default: "author",
        required: true
    },
    content: {
        type: String,
        default: "comment content",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const postSchema = new Schema({
    author: {
        type: String,
        default: "author",
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: "title",
        required: true
    },
    image: {
        type: String
    },
    ingredients: {
        type: Array,
        default: ["list", "ingredients", "here"],
        required: true
    },
    method: {
        type: String,
        default: "method",
        required: true
    },
    tags: {
        type: Array,
        default: ["list", "tags", "here"]
    },
    comments: {
        type: [ commentSchema ],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;