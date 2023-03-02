import userRouter from "./user";
import authRouter from "./auth";
import inventoryRouter from "./inventory";
import express, { Router } from "express";

const rootRouter: Router = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/inventory", inventoryRouter);

export default rootRouter;
