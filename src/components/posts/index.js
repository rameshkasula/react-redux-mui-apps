import { Box, Container, Stack } from "@mui/material";
import React, { Fragment } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <Fragment>
      <Container component="main" maxWidth="lg">
        <Stack
          direction={"row"}
          spacing={1}
          margin={2}
          justifyContent={"space-between"}
        >
          <Box sx={{ margin: 2 }}>
            {Array.from(Array(9)).map((_, index) => (
              <Box key={index}>
                <PostCard />
              </Box>
            ))}
          </Box>

          <CreatePost />
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Posts;
