const path = require("path");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Storing the session in a sessions collection
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({ 
	uri: process.env.MONGODB_URI || "mongodb://localhost/bannetondb",
	collection: "sessions"
});

store.on("error", error => {
    console.log(error);
});

const sessionOptions = {
	secret: process.env.SESSION_SECRET || 'This is a secret',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store
};

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/bannetondb",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, "./build")));
app.use(cors());
app.use(require("./routes"));

app.listen(PORT, () => {
	console.log(`Server is listening on port ${ PORT }!`);
});
