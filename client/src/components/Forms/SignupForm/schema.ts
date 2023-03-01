import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string().email("Invalid e-mail.").required("Email is required."),
  password: Yup.string()
    .required("Password field is required.")
    .min(8, "Password must be at least 8 characters long"),
  first_name: Yup.string()
    .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
    .required("First name is required."),
  last_name: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
    .required("Last name is required."),
  company: Yup.string().required("Company name is required."),
  street: Yup.string().required("Street name is required."),
  street_number: Yup.string().required("Street number is required."),
  city: Yup.string().required("City is required."),
  state_name: Yup.string().required("State name is required."),
  zip_code: Yup.string().required("Zip code is required."),
});
