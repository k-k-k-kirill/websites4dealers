import React from "react";
import { Formik, Form } from "formik";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import useAuth from "../../../hooks/useAuth";
import SignupSchema from "./schema";

export interface SignupFormValues {
  email: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  company: string;
  street: string;
  street_number: string;
  city: string;
  state_name: string;
  zip_code: string;
}

const SignupForm: React.FC = () => {
  const { signup } = useAuth();

  return (
    <>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email: "",
          username: "",
          first_name: "",
          last_name: "",
          company: "",
          street: "",
          street_number: "",
          city: "",
          state_name: "",
          zip_code: "",
          password: "",
        }}
        onSubmit={(values: SignupFormValues) => {
          signup(values);
        }}
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
            <Box sx={{ marginBottom: "1rem" }}>
              <TextField
                value={values.username}
                sx={{ width: "100%" }}
                id="username"
                label="Username"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={!!errors.username}
                helperText={errors.username || ""}
              />
            </Box>
            <Box sx={{ marginBottom: "1rem" }}>
              <TextField
                value={values.first_name}
                sx={{ width: "100%" }}
                id="first_name"
                label="First name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={!!errors.first_name}
                helperText={errors.first_name || ""}
              />
            </Box>
            <Box sx={{ marginBottom: "1rem" }}>
              <TextField
                value={values.last_name}
                sx={{ width: "100%" }}
                id="last_name"
                label="Last name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={!!errors.last_name}
                helperText={errors.last_name || ""}
              />
            </Box>
            <Box sx={{ marginBottom: "1rem" }}>
              <TextField
                value={values.company}
                sx={{ width: "100%" }}
                id="company"
                label="Company"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={!!errors.company}
                helperText={errors.company || ""}
              />
            </Box>
            <Box sx={{ marginBottom: "1rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">Address</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={values.street}
                    sx={{ width: "100%" }}
                    id="street"
                    label="Street"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={!!errors.street}
                    helperText={errors.street || ""}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={values.street_number}
                    sx={{ width: "100%" }}
                    id="street_number"
                    label="Building No."
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={!!errors.street_number}
                    helperText={errors.street_number || ""}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={values.city}
                    sx={{ width: "100%" }}
                    id="city"
                    label="City"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={!!errors.city}
                    helperText={errors.city || ""}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={values.state_name}
                    sx={{ width: "100%" }}
                    id="state_name"
                    label="State"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={!!errors.state_name}
                    helperText={errors.state_name || ""}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ marginBottom: "2rem" }}>
              <TextField
                value={values.zip_code}
                sx={{ width: "100%" }}
                id="zip_code"
                label="Zip code"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={!!errors.zip_code}
                helperText={errors.zip_code || ""}
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
                You can <Link to="login">log in</Link> if you already have an
                account
              </Typography>
              <Button type="submit" variant="contained">
                Create account
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
