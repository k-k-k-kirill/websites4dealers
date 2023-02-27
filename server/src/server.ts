import "express-async-errors";
import { Application } from "express";
import config from "./config/index";
import app from "./app";
import knex from "./db/db";

const startServer = async (app: Application) => {
  app.listen(config.SERVER_PORT, () => {
    console.log(`App is listening on port ${config.SERVER_PORT}`);
  });
};

startServer(app);
