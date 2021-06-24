const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");
const uploadImage = require("../../utils/multer");

router.get("/", cors(), async(req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", cors(), uploadImage, async (req, res) => {
	try {
		console.log("Non-file form data received:", req.body);
		console.log("File form data received:", req.file);
		
		const newPost = await Post.create({
			author: req.body.author,
			title: req.body.title,
			image: req.file.filename,
			ingredients: req.body.ingredients,	
			method: req.body.method,
			tags: req.body.tags
		});
		res.json(newPost);
	} catch (error) {
		res.status(500).json(error);
	}
});

// This route should only deal with information that the author of the post makes.
// Comments and such should be handled in the comments route.
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
        res.status(500).json(error);
	}
});

router.delete("/:id", cors(), async (req, res) => {
	try {
		const deletedCodeSnippet = await Post.deleteOne(
			{ _id: req.params.id }
		);
		res.json(deletedCodeSnippet);
	} catch (error) {
        res.status(500).json(error);
	}
});

module.exports = router;