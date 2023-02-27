import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string().email("Invalid e-mail.").required("Email is required."),
  password: Yup.string().required("Password field is required."),
});
