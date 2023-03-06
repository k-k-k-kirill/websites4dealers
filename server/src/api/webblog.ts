import express, { Router, Request, Response } from "express";
import validateRequest from "../helpers/validateRequest";
import webblogSchema from "./schema/webblog";
import requireAuth from "../middlewares/requireAuth";
import Webblog from "../services/Webblog";
import UnauthorizedError from "../errors/UnauthorizedError";
import webblogMetadata from "../tableMetadata/Webblog";
import DataTable from "../services/DataTable";
import { check } from "express-validator";
import multer from "multer";

const webblog: Router = express.Router();

interface CustomRequest extends Request {
  file?: any;
  user?: {
    id: string;
  };
}

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // limit to 5 MB
});

webblog.post(
  "/",
  upload.single("Photo"),
  webblogSchema.addWebblog,
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const photoBuffer = req.file.buffer;
      const webblogService = new Webblog(req.user.id);
      await webblogService.add({ ...req.body, Photo: photoBuffer });
      res.status(204).send();
    } else {
      throw new UnauthorizedError();
    }
  }
);

webblog.get("/", requireAuth, async (req: CustomRequest, res: Response) => {
  validateRequest(req);

  if (req.user?.id) {
    const webblogService = new Webblog(req.user.id);
    const webblogTableService = new DataTable(webblogMetadata, webblogService);
    const tableData = await webblogTableService.makeTable();
    res.status(200).send(tableData);
  } else {
    throw new UnauthorizedError();
  }
});

webblog.get("/:id", requireAuth, async (req: CustomRequest, res: Response) => {
  validateRequest(req);

  if (req.user?.id) {
    const webblogService = new Webblog(req.user.id);

    const item = await webblogService.findItemById(req.params.id);
    res.status(200).send(item.length > 0 ? item[0] : null);
  } else {
    throw new UnauthorizedError();
  }
});

webblog.patch(
  "/:id",
  upload.single("Photo"),
  webblogSchema.editWebblog,
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const photoBuffer = req.file.buffer;
      const webblogService = new Webblog(req.user.id);
      await webblogService.updateItemById(req.params.id, {
        ...req.body,
        Photo: photoBuffer,
      });
      res.status(204).send();
    } else {
      throw new UnauthorizedError();
    }
  }
);

webblog.delete(
  "/",
  check("rowIds").isArray().optional(),
  check("rowIds.*").isNumeric().optional(),
  requireAuth,
  async (req: CustomRequest, res: Response) => {
    validateRequest(req);

    if (req.user?.id) {
      const webblogService = new Webblog(req.user.id);
      console.log(req.body);
      await webblogService.delete(req.body.rowIds);
      res.status(204).send();
    } else {
      throw new UnauthorizedError();
    }
  }
);

export default webblog;
