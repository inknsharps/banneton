const router = require("express").Router();
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");
const searchRoutes = require("./searchRoutes")

router.use("/posts", postRoutes);
router.use("/comment", commentRoutes);
router.use("/users", userRoutes);
router.use("/search", searchRoutes);

module.exports = router;