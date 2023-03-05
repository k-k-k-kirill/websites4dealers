import express, { Router, Request, Response } from "express";
import validateRequest from "../helpers/validateRequest";
import inventorySchema from "./schema/inventory";
import requireAuth from "../middlewares/requireAuth";
import Inventory from "../services/Inventory";
import UnauthorizedError from "../errors/UnauthorizedError";
import inventoryMetadata from "../tableMetadata/Inventory";
import DataTable from "../services/DataTable";
import { check } from "express-validator";

const inventory: Router = express.Router();

interface CustomRequest extends Request {
  user?: {
    id: string;
  };
}

inventory.post(
  "/",
  inventorySchema.addInventory,
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const inventoryService = new Inventory(req.user.id);
      const result = await inventoryService.add(req.body);
      res.status(200).send(result);
    } else {
      throw new UnauthorizedError();
    }
  }
);

inventory.get("/", requireAuth, async (req: CustomRequest, res: Response) => {
  validateRequest(req);

  if (req.user?.id) {
    const inventoryService = new Inventory(req.user.id);
    const inventoryTableService = new DataTable(
      inventoryMetadata,
      inventoryService
    );
    const tableData = await inventoryTableService.makeTable();
    res.status(200).send(tableData);
  } else {
    throw new UnauthorizedError();
  }
});

inventory.get(
  "/:id",
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const inventoryService = new Inventory(req.user.id);

      const item = await inventoryService.findItemById(req.params.id);
      res.status(200).send(item.length > 0 ? item[0] : null);
    } else {
      throw new UnauthorizedError();
    }
  }
);

inventory.patch(
  "/:id",
  inventorySchema.editInventory,
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const inventoryService = new Inventory(req.user.id);

      const item = await inventoryService.updateItemById(
        req.params.id,
        req.body
      );
      res.status(204).send();
    } else {
      throw new UnauthorizedError();
    }
  }
);

inventory.delete(
  "/",
  check("rowIds").isArray().optional(),
  check("rowIds.*").isNumeric().optional(),
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const inventoryService = new Inventory(req.user.id);
      console.log(req.body);
      await inventoryService.delete(req.body.rowIds);
      res.status(204).send();
    } else {
      throw new UnauthorizedError();
    }
  }
);

export default inventory;
