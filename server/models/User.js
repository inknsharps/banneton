const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required!",
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required!",
        validate: [({ length }) => length >= 6, "Password must be 6 characters or more."]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }
});

userSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")){
        return next();
    };
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.pre("updateOne", function(next) {
    const update = this.getUpdate().$set;
    if (!update.password) {
        return next();
    };
    try {
        const hashedPassword = await bcrypt.hash(update.password, 10);
        update.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = function(inputtedPass) {
    return bcrypt.compareSync(inputtedPass, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;