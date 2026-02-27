import express from "express";
import { loginUser, signupUser } from "../controllers/user.controller.js";

const router = express.Router();

// user login:
router.post("/login", loginUser);

//user signup:
router.post("/signup", signupUser);

export default router;
