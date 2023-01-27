import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SinglePostAction from "./SinglePostAction";

const SinglePostData = ({ postData, handleDelete }) => {
  const findUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <Fragment>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {findUser?._id === postData?.postedBy?._id && (
          <div>
            <Button component={Link} to={`/posts/create?id=${postData?._id}`}>
              Edit
            </Button>
            <Button onClick={() => handleDelete()}>Delete</Button>
          </div>
        )}
        <Typography gutterBottom variant="h3" component="div">
          {postData?.title}
        </Typography>
        <Box
          component={"img"}
          alt={postData?.title}
          src={postData?.file}
          width="80%"
          height={"70%"}
        ></Box>
        <Box sx={{ marginY: 2 }}>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postData.message }}
          />
        </Box>
      </Box>
      <SinglePostAction postData={postData} />
    </Fragment>
  );
};

export default SinglePostData;
