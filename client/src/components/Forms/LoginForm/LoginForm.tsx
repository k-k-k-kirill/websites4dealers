import React from "react";
import "./LoginForm.scss";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid e-mail.").required("Email is required."),
  password: Yup.string().required("Password field is required."),
});

interface LoginFormValues {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  const { login } = useAuth();
  const loginUser = (values: LoginFormValues) =>
    login(values.email!, values.password!);

  return (
    <>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
      >
        {({ errors, values, handleChange, handleBlur }) => (
          <Form>
            <Box sx={{ marginBottom: "1rem" }}>
              <TextField
                value={values.email}
                sx={{ width: "100%" }}
                id="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={!!errors.email}
                helperText={errors.email || ""}
              />
            </Box>
            <Box>
              <TextField
                value={values.password}
                sx={{ width: "100%" }}
                id="password"
                label="Password"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                required
                error={!!errors.password}
                helperText={errors.password || ""}
              />
            </Box>
            <Box
              sx={{
                display: "fleex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Typography>
                You can <Link to="signup">create an account</Link> if you don't
                have one
              </Typography>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
