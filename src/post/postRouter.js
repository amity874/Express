import { Router } from "express";
import userController  from "./postController";
const router=Router();
router
.route('/')
.get(userController.getOne)
.post(userController.createOne);
router
.route('/:id/:num')
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