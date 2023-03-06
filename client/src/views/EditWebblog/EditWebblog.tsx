import React from "react";
import Dashboard from "../Layouts/Dashboard";
import EditInventoryForm from "../../components/Forms/EditWebblogForm/EditWebblogForm";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EditWebblog = () => {
  const { id } = useParams();

  return (
    <Dashboard>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h4">Edit web blog item</Typography>
      </Box>
      <Box>{id && <EditInventoryForm itemId={id} />}</Box>
    </Dashboard>
  );
};

export default EditWebblog;
