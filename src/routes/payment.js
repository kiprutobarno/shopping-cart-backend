import { Router } from "express";
import { makePayment } from "../controllers/payment";

const paymentRoute = Router();

paymentRoute.post("/api/v1/checkout/payment", makePayment);

export default paymentRoute;
