import React from "react";
import Dashboard from "../Layouts/Dashboard";
import AddWebblogForm from "../../components/Forms/AddWebblogForm/AddWebblogForm";
import { Box, Typography } from "@mui/material";

const AddWebblog = () => {
  return (
    <Dashboard>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h4">Web blog</Typography>
      </Box>
      <Box>
        <AddWebblogForm />
      </Box>
    </Dashboard>
  );
};

export default AddWebblog;
