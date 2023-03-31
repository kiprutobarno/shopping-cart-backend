import { Router } from "express";
import { verifyTokenAndAdmin } from "../middleware/auth";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products";

const productRouter = new Router();

productRouter.post("/api/v1/products/", verifyTokenAndAdmin, createProduct);
productRouter.get("/api/v1/products/:id", getProductById);
productRouter.get("/api/v1/products", getProducts); ///v1/products?category=men, ///v1/products?new=true
productRouter.put("/api/v1/products/:id", verifyTokenAndAdmin, updateProduct);
productRouter.delete(
  "/api/v1/products/:id",
  verifyTokenAndAdmin,
  deleteProduct
);

export { productRouter };
