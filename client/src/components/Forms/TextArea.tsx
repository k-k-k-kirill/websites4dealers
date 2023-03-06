import { TextField } from "@mui/material";
import { Box } from "@mui/system";

interface TextAreaProps {
  label: string;
  id: string;
  value: string;
  handleChange: any;
  handleBlur: any;
  showError: boolean;
  helperText: string;
  required: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  value,
  handleChange,
  handleBlur,
  showError,
  helperText,
  required,
  rows,
}) => {
  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <TextField
        value={value}
        sx={{ width: "100%" }}
        id={id}
        label={label}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        error={showError}
        helperText={helperText}
        multiline
        rows={rows || 4}
      />
    </Box>
  );
};

export default TextArea;
