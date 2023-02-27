import express, { Router, Request, Response } from "express";
import userService from "../services/User";
import { body, param } from "express-validator";
import validateRequest from "../helpers/validateRequest";
import requireAuth from "../middlewares/requireAuth";
import userSchema from "./schema/user";
import { UpdateUserData } from "../types/types";

const user: Router = express.Router();

user.post(
  "/signup",
  userSchema.createUser,
  async (req: Request, res: Response) => {
    validateRequest(req);

    const userId = await userService.signUp({ ...req.body });

    res.status(200).send(userId);
  }
);

user.post(
  "/update",
  userSchema.editUser,
  async (req: Request, res: Response) => {
    validateRequest(req);

    const { id } = req.body;
    delete req.body.id;
    const data: UpdateUserData = { ...req.body };

    const userId = await userService.update(id, data);

    res.status(200).send(userId);
  }
);

user.post(
  "/login",
  body("email").isEmail().withMessage("Invalid e-mail."),
  body("password").exists().withMessage("You must provide password to login."),
  async (req: Request, res: Response) => {
    validateRequest(req);

    const { accessToken, refreshToken, fingerprint } = await userService.login(
      req.body.email,
      req.body.password
    );

    res.cookie("Context", fingerprint, {
      httpOnly: true,
    });

    res.status(200).send({
      accessToken,
      refreshToken,
    });
  }
);

user.delete(
  "/:id",
  param("id").exists().isString().withMessage("Valid user id must be provided"),
  requireAuth,
  async (req: any, res: Response) => {
    validateRequest(req);

    if (req.user.id !== req.params.id) res.status(403).send();

    await userService.delete(req.user.id);

    res.status(204).send();
  }
);

export default user;
