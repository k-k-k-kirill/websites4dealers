import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import fieldsMetadata from "../metadata/webblog";
import FormBase from "../FormBase/FormBase";
import useWebblog from "../../../hooks/useWebblog";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { requestWithTokenRefresh } from "../../../api/utils/requestWithTokenRefresh";
import webblogStorage from "../../../api/Webblog";
import { getInitialValues, getValidationSchema } from "../utils";

interface WebblogFormProps {
  itemId: string;
}

const makeFileFromBlob = (data: any) => {
  const blob = new Blob([data.buffer], { type: "application/octet-stream" });
  const file = new File([blob], "webblog_photo.bin", {
    type: "application/octet-stream",
  });

  return file;
};

const EditWebblogForm: React.FC<WebblogFormProps> = ({ itemId }) => {
  const queryClient = useQueryClient();
  const { update } = useWebblog();

  const { data: existingValues, isLoading } = useQuery(
    ["existingValues"],
    () => requestWithTokenRefresh(() => webblogStorage.getItemById(itemId)),
    {
      initialData: getInitialValues(fieldsMetadata),
      enabled: false,
      refetchOnMount: true,
      select: (data) => {
        return {
          ...data,
          Photo: makeFileFromBlob(data.Photo),
        };
      },
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

export default EditWebblogForm;
