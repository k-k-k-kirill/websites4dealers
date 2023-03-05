import React from "react";
import { Grid } from "@mui/material";
import fieldsMetadata from "../metadata/inventory";
import FormBase from "../FormBase/FormBase";
import useInventory from "../../../hooks/useInventory";
import { getInitialValues, getValidationSchema } from "../utils";

interface InventoryFormProps {
  itemId?: string;
}

const AddInventoryForm: React.FC<InventoryFormProps> = ({ itemId }) => {
  const { add } = useInventory();

  const initialValues = getInitialValues(fieldsMetadata);
  const validationSchema = getValidationSchema(fieldsMetadata);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormBase
          metadata={fieldsMetadata}
          submitLabel="Add item"
          handleSubmit={(values: any) => add(values)}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </Grid>
    </Grid>
  );
};

export default AddInventoryForm;
