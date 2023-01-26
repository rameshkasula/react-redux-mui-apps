import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import SinglePostData from "./SinglePostData";

const ViewPost = () => {
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const postId = urlParams.get("id");

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/posts/get/post?postId=${postId}`)
      .then((results) => {
        if (results?.status === 200) {
          setPostData(results.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postId]);
  return (
    <Container component={"main"} maxWidth={"md"}>
      <Box>
        {!!loading ? (
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          !loading && postData?._id && <SinglePostData postData={postData} />
        )}
        {/* <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} /> */}
      </Box>
    </Container>
  );
};

export default ViewPost;
