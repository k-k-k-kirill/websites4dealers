import { body } from "express-validator";

export default {
  addInventory: [
    // Stock number
    body("VEHICLES___kp_Stock_Number")
      .optional()
      .isString()
      .withMessage("Stock number must be a string."),

    // Status
    body("Status").notEmpty().withMessage("Status is required."),

    // Year
    body("VEHICLES_Year").notEmpty().withMessage("Year is required."),

    // Make
    body("VEHICLES_Make").notEmpty().withMessage("Make is required."),

    // Model
    body("VEHICLES_Model").notEmpty().withMessage("Model is required."),

    // Trim
    body("VEHICLES_Trim").notEmpty().withMessage("Trim is required."),

    // Body style
    body("VEHICLES_Body_Style")
      .notEmpty()
      .withMessage("Body style is required."),

    // Doors
    body("VEHICLES_Doors").notEmpty().withMessage("Doors is required."),

    // Drive type
    body("VEHICLES_Drive_Type")
      .notEmpty()
      .withMessage("Drive type is required."),

    // Exterior color
    body("VEHICLES_Exterior_Color")
      .notEmpty()
      .withMessage("Exterior color is required."),

    // Interior color
    body("VEHICLES_Interior_Color")
      .notEmpty()
      .withMessage("Interior color is required."),

    // Transmission
    body("VEHICLES_Transmission")
      .notEmpty()
      .withMessage("Transmission is required."),

    // Current mileage
    body("VEHICLES_Mileage_Current")
      .notEmpty()
      .withMessage("Current mileage is required.")
      .isInt({ min: 1 })
      .withMessage("Current mileage must be a positive number."),

    // Engine description
    body("VEHICLES_Engine_Description")
      .notEmpty()
      .withMessage("Engine description is required."),

    // Fuel type
    body("VEHICLES_Fuel_Type").notEmpty().withMessage("Fuel type is required."),

    // Vin number
    body("VEHICLES_Vin_Number")
      .notEmpty()
      .withMessage("Vin number is required."),

    // Price display feeds
    body("Price_Display_Feeds")
      .notEmpty()
      .withMessage("Price display feeds is required."),

    // Price asking
    body("VEHICLES_Price_Asking")
      .notEmpty()
      .withMessage("Price asking is required.")
      .isInt({ min: 1 })
      .withMessage("Price asking must be a positive number."),

    // Web publish special
    body("VEHICLES_Web_Publish_Special")
      .notEmpty()
      .withMessage("Web publish special is required."),

    // Details
    body("vehicle_FEATURES_Details")
      .notEmpty()
      .withMessage("Details is required."),

    // Extra features final
    body("vehicle_FEATURES_Extra_Features_Final")
      .notEmpty()
      .withMessage("Extra features final is required."),

    // Mileage EPA city
    body("vehicle_FEATURES_Mileage_EPA_City")
      .notEmpty()
      .withMessage("Mileage EPA city is required."),

    // Mileage EPA highway
    body("vehicle_FEATURES_Mileage_EPA_Highway")
      .notEmpty()
      .withMessage("Mileage EPA highway is required."),

    // Days on market,
    body("Vehicles_Days_On_Market")
      .notEmpty()
      .withMessage("Days on market is required.")
      .isInt({ min: 1 })
      .withMessage("Days on market must be a positive number."),

    // Location name
    body("VEHICLES_Location_Name")
      .notEmpty()
      .withMessage("Location name is required."),

    // Location number
    body("VEHICLES_Location_Number")
      .notEmpty()
      .withMessage("Location number is required.")
      .isInt({ min: 1 })
      .withMessage("Location number must be a positive number."),

    // Virtual tour link
    body("vehicle_FEATURES_Virtual_Tour_Link")
      .notEmpty()
      .withMessage("Virtual tour link is required."),

    // Web custom link
    body("vehicle_FEATURES_Web_Custom_Link")
      .notEmpty()
      .withMessage("Web custom link is required."),

    // Photo count
    body("VEHICLES_Photo_Count")
      .notEmpty()
      .withMessage("Photo count is required.")
      .isInt({ min: 1 })
      .withMessage("Photo count must be a positive number."),
  ],
  editInventory: [
    // Stock number
    body("VEHICLES___kp_Stock_Number")
      .optional()
      .isString()
      .withMessage("Stock number must be a string."),

    // Status
    body("Status").optional().notEmpty(),

    // Year
    body("VEHICLES_Year").optional().notEmpty(),

    // Make
    body("VEHICLES_Make").optional().notEmpty(),

    // Model
    body("VEHICLES_Model").optional().notEmpty(),

    // Trim
    body("VEHICLES_Trim").optional().notEmpty(),

    // Body style
    body("VEHICLES_Body_Style").optional().notEmpty(),

    // Doors
    body("VEHICLES_Doors").optional().notEmpty(),

    // Drive type
    body("VEHICLES_Drive_Type").optional().notEmpty(),

    // Exterior color
    body("VEHICLES_Exterior_Color").optional().notEmpty(),

    // Interior color
    body("VEHICLES_Interior_Color").optional().notEmpty(),

    // Transmission
    body("VEHICLES_Transmission").optional().notEmpty(),

    // Current mileage
    body("VEHICLES_Mileage_Current")
      .optional()
      .notEmpty()
      .isInt({ min: 1 })
      .withMessage("Current mileage must be a positive number."),

    // Engine description
    body("VEHICLES_Engine_Description").optional().notEmpty(),

    // Fuel type
    body("VEHICLES_Fuel_Type").optional().notEmpty(),

    // Vin number
    body("VEHICLES_Vin_Number").optional().notEmpty(),

    // Price display feeds
    body("Price_Display_Feeds").optional().notEmpty(),

    // Price asking
    body("VEHICLES_Price_Asking")
      .optional()
      .notEmpty()
      .isInt({ min: 1 })
      .withMessage("Price asking must be a positive number."),

    // Web publish special
    body("VEHICLES_Web_Publish_Special").optional().notEmpty(),
    // Details
    body("vehicle_FEATURES_Details").optional().notEmpty(),

    // Extra features final
    body("vehicle_FEATURES_Extra_Features_Final").optional().notEmpty(),

    // Mileage EPA city
    body("vehicle_FEATURES_Mileage_EPA_City").optional().notEmpty(),

    // Mileage EPA highway
    body("vehicle_FEATURES_Mileage_EPA_Highway").optional().notEmpty(),

    // Days on market,
    body("Vehicles_Days_On_Market")
      .optional()
      .notEmpty()
      .isInt({ min: 1 })
      .withMessage("Days on market must be a positive number."),

    // Location name
    body("VEHICLES_Location_Name").optional().notEmpty(),

    // Location number
    body("VEHICLES_Location_Number")
      .optional()
      .notEmpty()
      .isInt({ min: 1 })
      .withMessage("Location number must be a positive number."),

    // Virtual tour link
    body("vehicle_FEATURES_Virtual_Tour_Link").optional().notEmpty(),

    // Web custom link
    body("vehicle_FEATURES_Web_Custom_Link").optional().notEmpty(),

    // Photo count
    body("VEHICLES_Photo_Count")
      .optional()
      .notEmpty()
      .isInt({ min: 1 })
      .withMessage("Photo count must be a positive number."),
  ],
};
