const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");

// Unsure if this works, basically we pass in the _id of the comment, then update the Post directly (since the comment is a subdocument). 
// Our matcher is for the comment _id, then we use the $pull operator to remove the entry with that _id from the array of comments.
router.delete("/:id", cors(), async (res, req) => {
    try {
        const deletedComment = await Post.updateOne(
            { 
                [comment._id]: req.params.id 
            },
            {
                $pull: { comment: { _id: req.params.id }
            }
        });
        res.json(deletedComment);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;