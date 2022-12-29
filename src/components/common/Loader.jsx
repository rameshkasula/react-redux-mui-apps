import { Box, CircularProgress } from "@mui/material";
import React, { Fragment } from "react";

const Loader = () => {
  return (
    <Fragment>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <CircularProgress />
      </Box>
    </Fragment>
  );
};

export default Loader;
