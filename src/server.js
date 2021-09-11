import express from "express";
import morgan from 'morgan';
import {json,urlencoded}from 'body-parser';
const app=express();
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    console.log(req.body);
    res.send({"Message":"ok"});
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send({"Message":"ok post"});
});
export const start=()=>{
app.listen(3000,()=>{
    console.log("Server started at 3000");
})
}