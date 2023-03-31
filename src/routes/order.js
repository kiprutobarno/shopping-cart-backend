import { Router } from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} from "../middleware/auth";
import {
  createOrder,
  deleteOrder,
  getOrderByUserId,
  getOrders,
  updateOrder,
} from "../controllers/order";

const orderRouter = new Router();

orderRouter.post("/api/v1/orders/", verifyToken, createOrder);
orderRouter.get(
  "/api/v1/orders/:userid",
  verifyTokenAndAuthorize,
  getOrderByUserId
);
orderRouter.get("/api/v1/orders", verifyTokenAndAdmin, getOrders);
orderRouter.put("/api/v1/orders/:id", verifyTokenAndAdmin, updateOrder);
orderRouter.delete("/api/v1/orders/:id", verifyTokenAndAdmin, deleteOrder);

export { orderRouter };
