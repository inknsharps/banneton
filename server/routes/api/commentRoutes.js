const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");

// The _id that should be passed here is the Post's _id.
// We use the push operator to push the new comment to the Post's subdocument.
// Make sure that the comment value is in the format of the comment schema.
router.put("/:id", cors(), async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.id },
			{ $push: { comments: req.body.comments } }
		);
		res.json(updatedPost);
	} catch (error) {
        res.status(500).json(error);
	};
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