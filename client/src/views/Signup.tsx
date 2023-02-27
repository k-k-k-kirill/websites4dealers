import React from "react";
import Centered from "./Layouts/Centered/Centered";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SignupForm from "../components/Forms/SignupForm/SignupForm";

const Signup = () => (
  <Centered>
    <Grid justifyContent="center" alignItems="center" container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ padding: "2rem" }}>
          <Typography sx={{ marginBottom: "2rem" }} variant="h4">
            Sign up
          </Typography>
          <SignupForm />
        </Paper>
      </Grid>
    </Grid>
  </Centered>
);

export default Signup;
