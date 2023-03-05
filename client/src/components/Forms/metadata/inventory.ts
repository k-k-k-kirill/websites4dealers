import { FieldMetadata } from "../types";
import { FieldType } from "../types";
import * as Yup from "yup";

const fieldsMetadata: FieldMetadata[] = [
  {
    label: "Stock number",
    key: "VEHICLES___kp_Stock_Number",
    type: FieldType.Text,
    required: false,
  },
  {
    label: "Status",
    key: "Status",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Year",
    key: "VEHICLES_Year",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Make",
    key: "VEHICLES_Make",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Model",
    key: "VEHICLES_Model",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Trim",
    key: "VEHICLES_Trim",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Body style",
    key: "VEHICLES_Body_Style",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Doors",
    key: "VEHICLES_Doors",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Drive type",
    key: "VEHICLES_Drive_Type",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Exterior color",
    key: "VEHICLES_Exterior_Color",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Interior color",
    key: "VEHICLES_Interior_Color",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Transmission",
    key: "VEHICLES_Transmission",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Current mileage",
    key: "VEHICLES_Mileage_Current",
    type: FieldType.Text,
    required: true,
    validator: Yup.number()
      .typeError("Current mileage must be a number.")
      .integer()
      .positive("Current mileage must be a positive number.")
      .required("Current mileage is required."),
  },
  {
    label: "Engine description",
    key: "VEHICLES_Engine_Description",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Fuel type",
    key: "VEHICLES_Fuel_Type",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Vin number",
    key: "VEHICLES_Vin_Number",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Price display feeds",
    key: "Price_Display_Feeds",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Price asking",
    key: "VEHICLES_Price_Asking",
    type: FieldType.Text,
    required: true,
    validator: Yup.number()
      .integer()
      .typeError("Price asking must be a number.")
      .positive("Price asking must be a positive number.")
      .required("Price asking is required."),
  },
  {
    label: "Web publish special",
    key: "VEHICLES_Web_Publish_Special",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Details",
    key: "vehicle_FEATURES_Details",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Extra features final",
    key: "vehicle_FEATURES_Extra_Features_Final",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Mileage EPA city",
    key: "vehicle_FEATURES_Mileage_EPA_City",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Mileage EPA highway",
    key: "vehicle_FEATURES_Mileage_EPA_Highway",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Days on market",
    key: "Vehicles_Days_On_Market",
    type: FieldType.Text,
    required: true,
    validator: Yup.number()
      .integer()
      .typeError("Days on market must be a number.")
      .positive("Days on market must be a positive number.")
      .required("Days on market is required."),
  },
  {
    label: "Location name",
    key: "VEHICLES_Location_Name",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Location number",
    key: "VEHICLES_Location_Number",
    type: FieldType.Text,
    required: true,
    validator: Yup.number()
      .integer()
      .typeError("Location number market must be a number.")
      .positive("Location number must be a positive number.")
      .required("Location number is required."),
  },
  {
    label: "Virtual tour link",
    key: "vehicle_FEATURES_Virtual_Tour_Link",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Web custom link",
    key: "vehicle_FEATURES_Web_Custom_Link",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Photo count",
    key: "VEHICLES_Photo_Count",
    type: FieldType.Text,
    required: true,
    validator: Yup.number()
      .integer()
      .typeError("Photo count must be a number.")
      .positive("Photo count must be a positive number.")
      .required("Photo count is required."),
  },
];

export default fieldsMetadata;
