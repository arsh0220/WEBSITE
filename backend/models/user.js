import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName:"string",
    lastName:"string",
    email:"string",
    password:"string"
},{timestamps:true});
const User = mongoose.model("User", userSchema);
export default User;
