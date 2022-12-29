import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <Box>
        <Outlet />
        {children}
      </Box>
    </Fragment>
  );
}
