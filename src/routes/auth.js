import { Router } from "express";
import { createUser, userLogin } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/api/v1/auth/signup", createUser);
authRouter.post("/api/v1/auth/login", userLogin);

export default authRouter;
