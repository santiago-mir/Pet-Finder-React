import React from "react";
import Button from "@mui/material/Button";

export function MainButton({ children, type, handleClick }) {
  return (
    <Button
      type={type}
      onClick={handleClick}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, type, handleClick }) {
  return (
    <Button
      type={type}
      onClick={handleClick}
      variant="contained"
      color="success"
    >
      {children}
    </Button>
  );
}
