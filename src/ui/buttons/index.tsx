import React from "react";
import Button from "@mui/material/Button";

export function MainButton({ children }) {
  return (
    <Button variant="contained" color="primary">
      {children}
    </Button>
  );
}
