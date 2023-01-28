import {
  Box,
  Button,
  CircularProgress,
  Container,
  Pagination,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ActionTypes from "src/app/actions";
import PostItem from "src/components/posts/PostItem";
import axiosClient from "src/helpers/axiosClient";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, SetTotalPages] = useState();
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(page > 1 ? `/posts/getall?page=${page}` : "/posts/getall")
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: ActionTypes.SET_POSTS,
            posts: res.data.data?.data,
          });
          SetTotalPages(res.data?.data?.totlaPages);
        }
      })
      .catch((error) => {
        // console.log("gggg", error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(!true);
      });
  }, [dispatch, page]);

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
          {loading ? (
            <CircularProgress />
          ) : (
            <Fragment>
              <Button
                variant="contained"
                component={Link}
                to={"/posts/create"}
                sx={{ mb: 2 }}
              >
                {"Create Post"}
              </Button>
              {posts?.length > 0 &&
                posts.map((item) => <PostItem data={item} key={item?._id} />)}
              {totalPages && (
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handleChange}
                />
              )}
            </Fragment>
          )}
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
