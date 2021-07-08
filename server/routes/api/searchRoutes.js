const router = require("express").Router();
const Post = require("../../models/Post");
const cors = require("cors");

// These suckers are for fuzzy search use only!
// Remember to pass in the query in the JSON body request

router.get("/title/:title", cors(), async (req, res) => {
    try {
        const result = await Post.fuzzy({
            title_tg: {
                searchQuery: req.params.title
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/tag/:tag", cors(), async (req, res) => {
    try {
        const result = await Post.fuzzy({
            tags_tg: {
                searchQuery: req.params.tag
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/ingredient/:ingredient", cors(), async (req, res) => {
    try {
        const result = await Post.find({
            ingredients: { 
                $elemMatch: { 
                    $in: req.params.ingredient
                }
            }
        });
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;