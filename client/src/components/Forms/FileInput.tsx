import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import CloudUpload from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext } from "formik";

interface FileInputProps {
  label: string;
  id: string;
}

const FileInput: React.FC<FileInputProps> = ({ label, id }) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined | null>(
    null
  );

  const { setFieldValue } = useFormikContext();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setFieldValue(id, e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteClick = () => {
    setSelectedFile(null);
    setFieldValue(id, null);
  };

  return (
    <Box sx={{ marginBottom: "1rem", textAlign: "right" }}>
      {selectedFile ? (
        <div>
          <span>{selectedFile.name}</span>
          <Button
            style={{ marginLeft: "1rem" }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </div>
      ) : (
        <>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleFileInput}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <label htmlFor="contained-button-file">
            <Button
              onClick={handleUploadClick}
              startIcon={<CloudUpload />}
              variant="contained"
            >
              {label}
            </Button>
          </label>
        </>
      )}
    </Box>
  );
};

export default FileInput;
