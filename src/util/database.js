import mongoose from "mongoose";
import { config } from "../config/develepment";
export const connect=(url=config.databaseURL,opts={})=>{
    console.log("MongoDb connected!!!!");
    return mongoose.connect(url);
}