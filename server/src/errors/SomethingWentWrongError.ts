import { ValidationError } from "express-validator";
import CustomError from "./CustomError";

export default class SomethingWentWrongError extends CustomError {
  statusCode = 500;
  reason = "Something went wrong.";

  constructor() {
    super("Something went wrong.");

    Object.setPrototypeOf(this, SomethingWentWrongError.prototype);
  }

  serializeErrors = () => {
    return [{ message: this.reason }];
  };
}
