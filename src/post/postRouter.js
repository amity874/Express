import { Router } from "express";
const router=Router();
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

export default router;