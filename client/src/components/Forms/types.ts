export enum FieldType {
  Text = "text",
  TextArea = "textArea",
  File = "file",
}

export interface FieldMetadata {
  label: string;
  key: string;
  type: FieldType;
  required: boolean;
  validator?: any;
}

export interface InitialValues {
  [key: string]: string;
}

export interface ValidationSchema {
  [key: string]: any;
}
