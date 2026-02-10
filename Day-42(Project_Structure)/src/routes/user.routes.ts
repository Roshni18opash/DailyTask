import { Router } from "express";
import { getTasks } from "../controllers/user.controller"

const router = Router();

router.get("/tasks", getTasks);

export default router;
