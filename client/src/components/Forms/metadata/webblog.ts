import { FieldMetadata } from "../types";
import { FieldType } from "../types";
import * as Yup from "yup";

const fieldsMetadata: FieldMetadata[] = [
  {
    label: "First name",
    key: "First_Name",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Last name",
    key: "Last_Name",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Type",
    key: "Type",
    type: FieldType.Text,
    required: true,
  },
  {
    label: "Write up",
    key: "Write_Up",
    type: FieldType.TextArea,
    required: true,
  },
  {
    label: "Photo",
    key: "Photo",
    type: FieldType.File,
    required: true,
  },
];

export default fieldsMetadata;
