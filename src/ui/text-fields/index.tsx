import React from "react";
import TextField from "@mui/material/TextField";

export function MyTextField({ label, type, name }) {
  return (
    <TextField
      variant="outlined"
      type={type}
      label={label}
      name={name}
    ></TextField>
  );
}
