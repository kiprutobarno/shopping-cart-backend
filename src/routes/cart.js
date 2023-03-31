import { Router } from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} from "../middleware/auth";
import {
  createCart,
  deleteCart,
  getCarts,
  getCartByUserId,
  updateCart,
} from "../controllers/cart";  

const cartRouter = new Router();

cartRouter.post("/api/v1/carts/", verifyToken, createCart);
cartRouter.get(
  "/api/v1/carts/:userid",
  verifyTokenAndAuthorize,
  getCartByUserId
);
cartRouter.get("/api/v1/carts", verifyTokenAndAdmin, getCarts);
cartRouter.put("/api/v1/carts/:id", verifyTokenAndAuthorize, updateCart);
cartRouter.delete("/api/v1/carts/:id", verifyTokenAndAuthorize, deleteCart);

export { cartRouter };
