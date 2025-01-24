import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    hobby : {type: [String], required: true},
    age: {type: Number, required: true}
});

const User = mongoose.model("admin", userSchema);

export default User;