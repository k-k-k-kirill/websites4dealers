import React from "react";
import { Grid } from "@mui/material";
import fieldsMetadata from "../metadata/webblog";
import FormBase from "../FormBase/FormBase";
import useWebblog from "../../../hooks/useWebblog";
import { getInitialValues, getValidationSchema } from "../utils";

interface WebblogFormProps {
  itemId?: string;
}

const AddWebblogForm: React.FC<WebblogFormProps> = () => {
  const { add } = useWebblog();

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

export default AddWebblogForm;
