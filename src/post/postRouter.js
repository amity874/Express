import { Router } from "express";
import Controllers from "./postController";
const router=Router();
router
.route('/')
.get(Controllers.getAll)
.post(Controllers.createOne);
router
.route('/:id')
.get(Controllers.getOne)
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