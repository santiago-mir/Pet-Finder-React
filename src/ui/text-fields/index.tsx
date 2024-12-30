import React from "react";
import TextField from "@mui/material/TextField";

export function MyTextField({
  label,
  type,
  name,
  placeholder = "",
  multi = false,
}) {
  return (
    <TextField
      variant="outlined"
      type={type}
      multiline={multi}
      rows={4}
      label={label}
      name={name}
      defaultValue={placeholder}
      InputProps={{
        style: {
          minHeight: "50px", // Altura personalizada del input
        },
      }}
    />
  );
}
