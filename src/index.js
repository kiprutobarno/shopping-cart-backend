import "dotenv/config";
import express from "express";
import createApp from "./app";

const port = process.env.PORT;

const server = () => {
  const app = express();

  createApp(app);
  app.listen(port, () => {
    console.log(`Server runnning at port ${port}`);
  });
};

server();
