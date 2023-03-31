import express from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import { productRouter } from "./routes/products";

const createApp = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));

  app.use(authRouter);
  app.use(userRouter);
  app.use(productRouter);
};

export default createApp;
