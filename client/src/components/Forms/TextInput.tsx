import { TextField } from "@mui/material";
import { Box } from "@mui/system";

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  handleChange: any;
  handleBlur: any;
  showError: boolean;
  helperText: string;
  required: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  handleChange,
  handleBlur,
  showError,
  helperText,
  required,
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
      />
    </Box>
  );
};

export default TextInput;
