import React from "react";
import Button from "@mui/material/Button";

export function MainButton({ children, handleClick }) {
  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      {children}
    </Button>
  );
}
