import { Router } from "express";
import { getUserById, getUsers, updateUser } from "../controllers/user";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} from "../middleware/auth";

const userRouter = Router();

userRouter.put("/api/v1/users/:id", verifyTokenAndAuthorize, updateUser);
userRouter.get("/api/v1/users/:id", verifyTokenAndAdmin, getUserById);
userRouter.get("/api/v1/users/", verifyTokenAndAdmin, getUsers);

export default userRouter;
