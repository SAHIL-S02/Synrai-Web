import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:"user"
    }
}, {
    timestamps:true
})