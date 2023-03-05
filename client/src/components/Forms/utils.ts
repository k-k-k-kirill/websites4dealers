import { FieldMetadata } from "./types";
import { InitialValues, ValidationSchema } from "./types";
import * as Yup from "yup";

export const getInitialValues = (
  metadata: FieldMetadata[]
): { [key: string]: string } => {
  const values: InitialValues = {};
  metadata.forEach((item: FieldMetadata) => (values[item.key] = ""));
  return values;
};

export const getValidationSchema = (metadata: FieldMetadata[]) => {
  const schema: ValidationSchema = {};

  metadata.forEach((item: FieldMetadata) => {
    const message = `${item.label} is required.`;
    const validator = item.required
      ? Yup.string().required(message)
      : Yup.string();

    schema[item.key] = item.validator ? item.validator : validator;
  });

  return Yup.object().shape(schema);
};
