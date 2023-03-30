import "dotenv/config";
import express from "express";
import createApp from "./app";
import conn from "./db";

const port = process.env.PORT;

const server = async () => {
  const app = express();

  await conn();

  createApp(app);
  app.listen(port, () => {
    console.log(`Server runnning at port ${port}`);
  });
};

server();
