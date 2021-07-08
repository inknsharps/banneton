const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");
const uploadImage = require("../../utils/multer");
const cloudinary = require("../../utils/cloudinary");

router.get("/", cors(), async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

// This specifically gets a post based on its unique id, which will be used for single page post rendering
router.get("/post/:id", cors(), async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });
		res.json(post);
	} catch (error) {
		res.status(500).json(error);
	}
});

// This specifically gets all posts from a user based on a provided user id
router.get("/user/:id", cors(), async (req, res) => {
	try {
		const userPosts = await Post.find({ authorId: req.params.id });
		res.json(userPosts);
	} catch (error) {
		res.status(500).json(error);
	}
});

// This got a bit complicated, so the high level is:
// We set up multer as a middleware for this route, so we create a req.file property on the request object (this contains the image).
// Multer then drops off the image in the /uploads folder, which then Cloudinary picks it up through the path, and uploads it to the cloud (we set up the Cloudinary configs in another file). 
// Finally, we create a new entry in our database, referencing our newly created Cloudinary link (this is provided in the Cloudinary response in the callback).
router.post("/", cors(), uploadImage, async (req, res) => {
	try {
		console.log("Non-file form data received:", req.body);
		console.log("File form data received:", req.file);
		
		cloudinary.uploader.upload(req.file.path, async (error, result) => {
			if (error) {
				throw new Error("Issue with uploading to Cloudinary.");
			};
			console.log(result);
			const newPost = await Post.create({
				author: req.body.author,
				authorId: req.body.authorId,
				title: req.body.title,
				image: result.secure_url,
				ingredients: req.body.ingredients.toLowerCase().split(" "),	
				method: req.body.method,
				tags: req.body.tags.toLowerCase().split(" ")
			});
			res.json(newPost);
		});
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
                    title: req.body.title,
                    ingredients: req.body.ingredients.split(" "),
                    method: req.body.method,
                    tags: req.body.tags.split(" ")
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
		const deletedPost = await Post.deleteOne(
			{ _id: req.params.id }
		);
		res.json(deletedPost);
	} catch (error) {
        res.status(500).json(error);
	}
});

module.exports = router;