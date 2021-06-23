const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");

router.get("/", cors(), async(req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
});

router.post("/", cors(), async (req, res) => {
	try {
		const newPost = await Post.create(req.body);
		res.json(newPost);
	} catch (error) {
		res.json(error);
	}
});

// Don't touch the comments, and date properties for now
// The comments will need to be an array of objects, which are then set with the commments
router.put("/:id", cors(), async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.id },
			{ 
                $set: { 
                    author: req.body.author, 
                    title: req.body.title,
                    ingredients: req.body.ingredients,
                    method: req.body.method,
                    tags: req.body.tags
                } 
            }
		);
		res.json(updatedPost);
	} catch (error) {
		res.json(error);
	}
});

router.delete("/:id", cors(), async (req, res) => {
	try {
		const deletedCodeSnippet = await Post.deleteOne(
			{ _id: req.params.id }
		);
		res.json(deletedCodeSnippet);
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;