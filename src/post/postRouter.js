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
.patch(Controllers.updateOne)
.delete(Controllers.removeOne)
export default router;