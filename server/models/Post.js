const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fuzzy = require("mongoose-fuzzy-search");

const commentSchema = new Schema({
    author: {
        type: String,
        default: "author",
        required: true
    },
    authorId: {
        type: String,
        default: "authorid",
        require: true
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

postSchema.plugin(fuzzy, {
    fields: {
        title_tg: "title",
        ingredients_tg: doc => doc.get("ingredients").join(" "),
        tags_tg: doc => doc.get("tags").join(" ")
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;