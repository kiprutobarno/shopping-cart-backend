import express from "express";

const createApp = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
};

export default createApp;
