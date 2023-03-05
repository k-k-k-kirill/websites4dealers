import { FieldMetadata } from "../Forms/types";

export const getTableHeadLabels = (rows: any[], metadata: FieldMetadata[]) => {
  return rows && rows[0]
    ? metadata
        .filter((item) => {
          return Object.keys(rows[0]).includes(item.key);
        })
        .map((item) => item.label)
    : [];
};

export const arraysAreEqual = (arr1: any[], arr2: any[]) => {
  arr1.every((value) => arr2.includes(value)) &&
    arr2.every((value) => arr1.includes(value));
};
