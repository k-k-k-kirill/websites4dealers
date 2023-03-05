import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import fieldsMetadata from "../metadata/inventory";
import FormBase from "../FormBase/FormBase";
import useInventory from "../../../hooks/useInventory";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { requestWithTokenRefresh } from "../../../api/utils/requestWithTokenRefresh";
import inventoryStorage from "../../../api/Inventory";
import { getInitialValues, getValidationSchema } from "../utils";

interface InventoryFormProps {
  itemId: string;
}

const EditInventoryForm: React.FC<InventoryFormProps> = ({ itemId }) => {
  const queryClient = useQueryClient();
  const { update } = useInventory();

  const { data: existingValues, isLoading } = useQuery(
    ["existingValues"],
    () => requestWithTokenRefresh(() => inventoryStorage.getItemById(itemId)),
    {
      initialData: getInitialValues(fieldsMetadata),
      enabled: false,
      refetchOnMount: true,
    }
  );

  useEffect(() => {
    return () => {
      queryClient.refetchQueries(["existingValues"]);
    };
  }, [itemId, queryClient]);

  const validationSchema = getValidationSchema(fieldsMetadata);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {!isLoading && (
          <FormBase
            metadata={fieldsMetadata}
            submitLabel="Update item"
            handleSubmit={(values: any) => update(itemId, values)}
            initialValues={existingValues}
            validationSchema={validationSchema}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default EditInventoryForm;
