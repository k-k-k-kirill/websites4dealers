import * as Yup from "yup";

export default {
  VEHICLES___kp_Stock_Number: Yup.string()
    .email("Invalid e-mail.")
    .required("Email is required."),
};
