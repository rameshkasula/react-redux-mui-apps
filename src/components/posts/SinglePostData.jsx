import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

const SinglePostData = ({ postData }) => {
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
    </Fragment>
  );
};

export default SinglePostData;
