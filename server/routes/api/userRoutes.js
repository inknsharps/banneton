const router = require("express").Router();
const User = require("../../models/User");
const cors = require("cors");

// This is purely testing code, get rid of it in production
router.get("/", cors(), async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// This should make a new user and log them into the session
router.post("/", cors(), async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = newUser._id;
            req.session.logged_in = true;
            res.status(200).json({ username: newUser.username, _id: newUser._id, loggedIn: req.session.logged_in, message: "You are now logged in!" });
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/login", cors(), async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(400).json({ message: "Incorrect email or password." });
            return;
        };
        const validPassword = await user.comparePassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email or password." });
            return;
        };
        req.session.save(() => {
            req.session.user_id = user._id;
            req.session.logged_in = true;
            res.json({ username: user.username, _id: user._id, loggedIn: req.session.logged_in, message: "You are now logged in!" });
        });
    } catch (error) {
        res.status(400).json(err);
    }
});

router.post("/logout", (req, res) => {
    try {
        console.log("Logout session:", req.session);
        req.session.destroy(() => {
            res.status(204).json({ message: "You have been logged out." }).end();
        });
    } catch (error) {
        console.log("Error with logout.", error);
        res.status(404).end();
    };
});

module.exports = router;