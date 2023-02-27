import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CenteredLayout from "./Layouts/Centered/Centered";
import LoginForm from "../components/Forms/LoginForm/LoginForm";

const Login = () => (
  <CenteredLayout>
    <Grid justifyContent="center" alignItems="center" container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ padding: "2rem" }}>
          <Typography sx={{ marginBottom: "2rem" }} variant="h4">
            Login
          </Typography>
          <LoginForm />
        </Paper>
      </Grid>
    </Grid>
  </CenteredLayout>
);

export default Login;
