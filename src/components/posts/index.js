import { Container, Grid } from "@mui/material";
import React, { Fragment } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <Fragment>
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2} direction="coloumn">
              {Array.from(Array(2)).map((_, index) => (
                <Grid item xs={12} key={index}>
                  <PostCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <CreatePost />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Posts;
