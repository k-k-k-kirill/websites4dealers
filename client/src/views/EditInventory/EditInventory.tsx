import React from "react";
import Dashboard from "../Layouts/Dashboard";
import EditInventoryForm from "../../components/Forms/EditInventoryForm/EditInventoryForm";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EditInventory = () => {
  const { id } = useParams();

  return (
    <Dashboard>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h4">Edit inventory item</Typography>
      </Box>
      <Box>{id && <EditInventoryForm itemId={id} />}</Box>
    </Dashboard>
  );
};

export default EditInventory;
