import React from "react";
import Typography from "@mui/material/Typography";

export function MainText({ children }) {
  return (
    <Typography
      variant="h1"
      fontSize={50}
      color={"#f49090"}
      fontWeight={"bold"}
    >
      {children}
    </Typography>
  );
}

export function SecondaryText({ children }) {
  return (
    <Typography
      variant="body1"
      fontSize={20}
      color={"black"}
      fontWeight={"400"}
    >
      {children}
    </Typography>
  );
}
