import bcrypt from "bcrypt"
import userModel from "../models/user.model.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";






export const login = async (req, res) =>{
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email
    });
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found",
            email:email,
        })
    }
    const isPasswordMatched = await bcrypt.compare(password, user.hashedPassword);
    if(!isPasswordMatched){
        res.status(401).json({
            success:false,
            message:"Incorrect password",
        })
    }
    
    res.status(200).json({
        success:true,
        message:"Login success",
        user:user
    })
}




export const register = async (req, res) =>{
    const {email, name, phoneNumber, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userEx = await userModel.findOne({email});
    if(userEx){
        return res.status(403).json({
            success:false,
            message:"User is already exist"
        })
    }
    const user = await userModel.create({email, name, phoneNumber, hashedPassword});
    res.status(201).json({
        success:true,
        message:"Account created",
        user:user
    });
}