import mongoose from "mongoose"
import config from "./config.js";

const connectDatabase = async ()=>{
    try{
        await mongoose.connect(config.MONGODB_URI);
        console.log("Database connected...")
    }catch (e){
        console.error(e);
    }
}

export default connectDatabase;