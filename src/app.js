import express from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";

const createApp = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));

  app.use(authRouter);
  app.use(userRouter);
};

export default createApp;
