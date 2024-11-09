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
    ></TextField>
  );
}
