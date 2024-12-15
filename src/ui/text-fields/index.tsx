import React from "react";
import TextField from "@mui/material/TextField";

export function MyTextField({ label, type, name, placeholder = "" }) {
  return (
    <TextField
      variant="outlined"
      type={type}
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
