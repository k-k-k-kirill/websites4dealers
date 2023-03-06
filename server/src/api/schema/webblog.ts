import { body } from "express-validator";

export default {
  addWebblog: [
    body("First_Name").notEmpty().withMessage("First name is required."),
    body("Last_Name").notEmpty().withMessage("Last name is required."),
    body("Type").notEmpty().withMessage("Type is required."),
    body("Write_Up").notEmpty().withMessage("Write up is required."),
  ],
  editWebblog: [
    body("First_Name").notEmpty().optional(),
    body("Last_Name").notEmpty().optional(),
    body("Type").notEmpty().optional(),
    body("Write_Up").notEmpty().optional(),
  ],
};
