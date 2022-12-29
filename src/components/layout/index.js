import { Box } from "@mui/material";
import React, { Fragment } from "react";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <Box>{children}</Box>
    </Fragment>
  );
}
