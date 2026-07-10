import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type: String,
        required:true,
    },
    hashedPassword:{
        type:String,
        required:true,
    }
});

const userModel = mongoose.model("users", userSchema);
export default userModel;