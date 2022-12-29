import { Button } from "@mui/material";
import React from "react";

export default function MSubmit({ children, ...otherProps }) {
  const configButton = {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    ...otherProps,
  };
  return <Button {...configButton}>{children}</Button>;
}
