import { body, param } from "express-validator";

export default {
  createUser: [
    body("email").isEmail(),
    body("password")
      .isLength({ min: 10 })
      .withMessage("Password must be at least 10 chars.")
      .matches(/\d/)
      .withMessage("Password must contain a number.")
      .matches(/[A-Z]/)
      .withMessage("Password must containd at least one uppercase letter.")
      .matches(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
      .withMessage("Password must contain at least one special character."),
    body("username")
      .isString()
      .withMessage("Username is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Username must be between 1 and 50 characters long."),
    body("first_name")
      .isString()
      .withMessage("First name is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("First name must be between 1 and 50 characters long."),
    body("last_name")
      .isString()
      .withMessage("Last name is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Last name must be between 1 and 50 characters long."),
    body("company")
      .isString()
      .withMessage("Company name is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Company must be between 1 and 50 characters long."),
    body("street")
      .isString()
      .withMessage("Street is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Street name must be between 1 and 50 characters long."),
    body("street_number").isString().withMessage("Street number is required."),
    body("city")
      .isString()
      .withMessage("City is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("City name must be between 1 and 50 characters long."),
    body("state_name")
      .isString()
      .withMessage("State name is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("State name must be between 1 and 50 characters long."),
    body("zip_code").isString().withMessage("Zip code is required."),
  ],
  editUser: [
    body("id").isNumeric().withMessage("User id is required."),
    body("email").isEmail().optional(),
    body("password")
      .isLength({ min: 10 })
      .withMessage("Password must be at least 10 chars.")
      .matches(/\d/)
      .withMessage("Password must contain a number.")
      .matches(/[A-Z]/)
      .withMessage("Password must containd at least one uppercase letter.")
      .matches(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
      .withMessage("Password must contain at least one special character.")
      .optional(),
    body("username")
      .isString()
      .withMessage("Username must be string.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Username must be between 1 and 50 characters long.")
      .optional(),
    body("first_name")
      .isString()
      .withMessage("First name must be a string.")
      .isLength({ min: 1, max: 50 })
      .withMessage("First name must be between 1 and 50 characters long.")
      .optional(),
    body("last_name")
      .isString()
      .withMessage("Last name must be a string.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Last name must be between 1 and 50 characters long.")
      .optional(),
    body("company")
      .isString()
      .withMessage("Company name must be a string.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Company must be between 1 and 50 characters long.")
      .optional(),
    body("street")
      .isString()
      .withMessage("Street must be a string.")
      .isLength({ min: 1, max: 50 })
      .withMessage("Street name must be between 1 and 50 characters long.")
      .optional(),
    body("street_number")
      .isString()
      .withMessage("Street number must be numeric.")
      .optional(),
    body("city")
      .isString()
      .withMessage("City is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("City name must be between 1 and 50 characters long.")
      .optional(),
    body("state_name")
      .isString()
      .withMessage("State name is required.")
      .isLength({ min: 1, max: 50 })
      .withMessage("State name must be between 1 and 50 characters long.")
      .optional(),
    body("zip_code")
      .isString()
      .withMessage("Zip code must be numeric.")
      .optional(),
  ],
};
