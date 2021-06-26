// Multer middleware for dealing with image uploads
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, `../uploads/`),
    filename: (req, file, cb) => {
        // Validate the extension
        const extension = path.extname(file.originalname.toLowerCase());
        if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
            return cb(new Error(`File type ${extension} is not supported.`));
        };
        // Make the file name the current date, then add on the extension from the original file that was uploaded
        const fileName = `${Date.now()}${extension}`;
        cb(null, fileName);
    }
});

const uploadImage = multer({ storage }).single("image");

module.exports = uploadImage;