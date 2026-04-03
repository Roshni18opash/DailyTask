import { Router } from "express";
import { showUsers, addUser } from "../controllers/user.controller";

const router = Router();

router.get("/", showUsers);
router.post("/insert", addUser);

export default router;
