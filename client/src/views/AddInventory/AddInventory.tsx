import React from "react";
import Dashboard from "../Layouts/Dashboard";
import AddInventoryForm from "../../components/Forms/AddInventoryForm/AddInventoryForm";
import { Box, Typography } from "@mui/material";

const AddInventory = () => {
  return (
    <Dashboard>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h4">Inventory</Typography>
      </Box>
      <Box>
        <AddInventoryForm />
      </Box>
    </Dashboard>
  );
};

export default AddInventory;
