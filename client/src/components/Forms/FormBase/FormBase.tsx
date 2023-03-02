import React from "react";
import { Formik, Form } from "formik";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { FieldMetadata } from "../types";
import { getInitialValues, getValidationSchema } from "../utils";
import TextInput from "../TextInput";
import { FieldType } from "../types";

interface FormBaseProps {
  metadata: FieldMetadata[];
  submitLabel: string;
  handleSubmit: any;
}

const FormBase: React.FC<FormBaseProps> = ({
  metadata,
  submitLabel,
  handleSubmit,
}) => {
  const initialValues = getInitialValues(metadata);
  const validationSchema = getValidationSchema(metadata);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ ...initialValues }}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, values, handleChange, handleBlur }) => (
          <Form>
            {metadata.map((field: FieldMetadata) => {
              switch (field.type) {
                case FieldType.Text: {
                  return (
                    <TextInput
                      id={field.key}
                      label={field.label}
                      key={field.key}
                      value={values[field.key]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      showError={!!errors[field.key]}
                      helperText={errors[field.key] || ""}
                      required={field.required}
                    />
                  );
                }

                default: {
                  return (
                    <TextInput
                      id={field.key}
                      label={field.label}
                      key={field.key}
                      value={values[field.key]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      showError={!!errors[field.key]}
                      helperText={errors[field.key] || ""}
                      required={field.required}
                    />
                  );
                }
              }
            })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "2rem",
              }}
            >
              <Button type="submit" variant="contained">
                {submitLabel}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormBase;
