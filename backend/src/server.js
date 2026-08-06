import express from "express";
import config from "./config/config.js";
import app from "./app.js";
import connectDatabase from "./config/database.config.js";
await connectDatabase();
app.listen(config.BACKEND_PORT, ()=>{
    console.log(`Backend is running at http://localhost:${config.BACKEND_PORT} .....`);
})