import { Router } from "express";
import controllers from "./userController";
const router =Router();
router.get('/',controllers.getOne);
router.post('/',controllers.createOne);
export default router;