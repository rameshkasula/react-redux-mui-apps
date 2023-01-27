import { Box, CircularProgress, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "src/app/actions";
import axiosClient from "src/helpers/axiosClient";
import PostItem from "../posts/PostItem";
import MyPostCard from "./MyPostCard";

const MyPosts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/posts/getall")
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: ActionTypes.SET_POSTS,
            posts: res.data.data,
          });
        }
      })
      .catch((error) => {
        // console.log("gggg", error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(!true);
      });
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container rowSpacing={1} columnSpacing={1}>
            {posts?.length > 0 &&
              posts.map((item) => (
                <Grid item xs={12} lg={4} md={6}>
                  <MyPostCard data={item} key={item?._id} />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
      <Box></Box>
    </Fragment>
  );
};

export default MyPosts;
