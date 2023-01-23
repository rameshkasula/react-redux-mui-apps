import { Box, Container } from "@mui/material";
import React, { Fragment } from "react";
import PostItem from "src/components/posts/PostItem";

const Home = () => {
  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PostItem />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
