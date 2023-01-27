import { Box, CircularProgress, Container } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "src/helpers/axiosClient";
import SinglePostData from "./SinglePostData";

const ViewPost = () => {
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const postId = urlParams.get("id");

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axiosClient
      .delete(`/posts/delete?_id=${postData?._id}`)
      .then((results) => {
        if (results?.status === 200) {
          enqueueSnackbar("Post Deleted", { variant: "success" });
          navigate("/app");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          !loading &&
          postData?._id && (
            <SinglePostData postData={postData} handleDelete={handleDelete} />
          )
        )}
        {/* <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} /> */}
      </Box>
    </Container>
  );
};

export default ViewPost;
