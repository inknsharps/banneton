const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");

// We use the push operator to push the new comment to the Post's subdocument.
// Make sure that the comment value is in the format of the comment schema.
router.put("/create", cors(), async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.body.postId },
			{ $push: { comments: req.body.comments } }
		);
		res.json(updatedPost);
	} catch (error) {
        res.status(500).json(error);
	};
});

// Again, we use the req object body to run this route.
// Because we're updating both a comment, and the post the it belongs, to, we grab both _id values from the object.
// Then we use a $set operator to update the comments data, where the first match is found in the comments array (in our case since we're using unique ids, it should be the only one that's updated).
router.put("/update", cors(), async (req, res) => {
    try {
        const updatedComment = await Post.updateOne(
            { 
                _id: req.body.postId, 
                "comments._id": req.body.commentId 
            },
            { 
                $set: { 
                    "comments.$.author": req.body.comments.author, 
                    "comments.$.content": req.body.comments.content 
                } 
            }
        )
        res.json(updatedComment);
    } catch (error) {
        res.status(500).json(error);
    }
});

// In the req object, provide a postId and a commentId key-value pair.
// Then we update the post based on its _id, then use the $pull operator to remove an entry in the comments subdocument (which is an array), where the comment _id matches the commentId in the req body.
router.delete("/", cors(), async (req, res) => {
    try {
        const deletedComment = await Post.updateOne(
            { _id: req.body.postId },
            { $pull: { comments: { _id: req.body.commentId } } },
        );
        res.json(deletedComment);
    } catch (error) {
        res.status(500).json(error);
    };
});

module.exports = router;