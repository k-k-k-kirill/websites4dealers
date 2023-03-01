import "express-async-errors";
import { Application } from "express";
import config from "./config/index";
import app from "./app";
import https from "https";
import fs from "fs";
import path from "path";

const options =
  config.ENVIRONMENT === "production"
    ? {
        key: fs.readFileSync(path.resolve(__dirname, "key.key")),
        cert: fs.readFileSync(path.resolve(__dirname, "cert.crt")),
      }
    : {};

const startServer = async (app: Application) => {
  (config.ENVIRONMENT === "development"
    ? app
    : https.createServer(options, app)
  ).listen(
    parseInt(config.SERVER_PORT || "") || 8095,
    config.ENVIRONMENT === "production"
      ? config.SERVER_HOST || ""
      : "127.0.0.1",
    () => {
      console.log(`App is listening on port ${config.SERVER_PORT}`);
    }
  );
};

startServer(app);
