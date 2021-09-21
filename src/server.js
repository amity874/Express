import express from "express";
import morgan from 'morgan';
import {json,urlencoded}from 'body-parser';
const router=express.Router();
const app=express();
app.use(morgan('tiny'));
app.use(json());
app.use(urlencoded({extended: true}));
app.use('/api/v1',router);
const customlogger=(req,res,next)=>{
    console.log("Logger incomming");
    console.log(req.body);
    next();
}
app.get('/',(req,res)=>{
    console.log(req.body);
    res.send({"Message":"ok get"});
});
app.post('/',customlogger,(req,res)=>{
    console.log(req.body);
    res.send({"Message":"ok post"});
});
// router.get('/post',(req,res)=>{
//     res.send({"message":"Router Ok"});
// });
// router.post('/post',(req,res)=>{
//     res.send({"message":"Ok POST"});
// });
app.post('/',customlogger,(req,res)=>{
    console.log(req.body);
    res.send({"Message":"ok post"});
});
router
.route('/post')
.get((req,res)=>{
    res.send({"message":"Router Ok Get"});
})
.post((req,res)=>{
    res.send({"message":"Router Ok POST"});
});
router
.route('/post/:id/:num')
.put((req,res)=>{ 
    console.log(req.params);
    res.send({message:"Router ok put"});
})
.patch((req,res)=>{
    res.send({message:"Router ok Patch"});
})
.delete((req,res)=>{
    res.send({message:"Router ok delete"});
})

export const start=()=>{
app.listen(3000,()=>{
    console.log("Server started at 3000");
})
}