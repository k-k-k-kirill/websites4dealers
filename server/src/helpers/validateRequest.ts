import { Request } from "express";
import RequestValidationError from "../errors/RequestValidationError";
import { validationResult } from "express-validator";

export default (req: Request) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
};
