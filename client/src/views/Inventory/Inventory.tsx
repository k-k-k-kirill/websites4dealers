import React from "react";
import Dashboard from "../Layouts/Dashboard";
import InventoryForm from "../../components/Forms/InventoryForm/InventoryForm";
import { Box, Typography } from "@mui/material";

const Inventory = () => {
  return (
    <Dashboard>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography variant="h4">Inventory</Typography>
      </Box>
      <Box>
        <InventoryForm />
      </Box>
    </Dashboard>
  );
};

export default Inventory;
