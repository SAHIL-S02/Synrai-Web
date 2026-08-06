import dotenv from "dotenv"
dotenv.config();
if(!process.env.BACKEND_PORT){
    throw new Error("Backend port not found");
}
if(!process.env.MONGODB_URI){
    throw new Error("MongoDB URI not found");
} 
const config = {
    BACKEND_PORT: process.env.BACKEND_PORT,
    MONGODB_URI: process.env.MONGODB_URI,
}

export default config;