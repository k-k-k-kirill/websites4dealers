import express, { Router, Request, Response } from "express";
import validateRequest from "../helpers/validateRequest";
import inventorySchema from "./schema/inventory";

const inventory: Router = express.Router();

inventory.post(
  "/",
  inventorySchema.addInventory,
  async (req: Request, res: Response) => {
    validateRequest(req);

    res.status(200).send();
  }
);

export default inventory;
