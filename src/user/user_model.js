import mongoose, { mongo, Mongoose } from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        tupe:String,
        required:true,
        unique:true
    },
    passwoed:{
        type:String,
        required:true
    }
},{timestamps:true});
export const User=mongoose.model('user',userSchema);