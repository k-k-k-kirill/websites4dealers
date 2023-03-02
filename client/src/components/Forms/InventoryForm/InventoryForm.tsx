import React from "react";
import { Grid } from "@mui/material";
import fieldsMetadata from "./metadata";
import FormBase from "../FormBase/FormBase";

const InventoryForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormBase
          metadata={fieldsMetadata}
          submitLabel="Add item"
          handleSubmit={() => {}}
        />
      </Grid>
    </Grid>
  );
};

export default InventoryForm;
