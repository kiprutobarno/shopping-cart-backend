import { Router } from "express";
import { verifyTokenAndAdmin } from "../middleware/auth";
import generateIncome from "../controllers/income";

const incomeRouter = new Router();

incomeRouter.get("/api/v1/income/", verifyTokenAndAdmin, generateIncome);

export { incomeRouter };
