import {
  Avatar,
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";
import axiosClient from "src/helpers/axiosClient";
import { useState } from "react";
import ActionTypes from "src/app/actions";
import { useDispatch } from "react-redux";

const SinglePostAction = ({ postData }) => {
  const findUser = JSON.parse(window.localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const responseCB = (results) => {
    setLoading(true);
    axiosClient
      .get(`/posts/get/post?postId=${postData?._id}`)
      .then(async (results) => {
        if (results?.status === 200) {
          // setPostData(results.data?.data);
          await dispatch({
            type: ActionTypes.SET_POST_DATA,
            postData: results.data.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleLikePost = async () => {
    setLoading(true);
    await axiosClient
      .put(
        `/posts/${
          !postData?.likes?.map((item) => item?._id).includes(findUser?._id)
            ? "likepost"
            : "unlikepost"
        }?_id=${postData?._id}`
      )
      .then((results) => {
        responseCB(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleComment = async () => {
    setLoading(true);
    await axiosClient
      .put(`/posts/addcomment`, { text: value, postId: postData?._id })
      .then((results) => {
        responseCB(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  console.log("kkkkk", postData);
  return (
    <Fragment>
      <Stack direction={"row"} spacing={2}>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <ThumbUpIcon color="inherit" onClick={() => handleLikePost()} />
          <Typography>{Number(postData?.likes?.length)}</Typography>
        </Stack>

        {/* <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <VisibilityIcon />

          <Typography>{"12"}</Typography>
        </Stack> */}
      </Stack>
      <Box sx={{ marginY: 2 }}>
        <TextField
          variant="outlined"
          label={"comment"}
          placeholder={"add comment atleast 5 words"}
          fullWidth
          multiline
          minRows={3}
          value={value}
          onChange={(e) => handleChange(e)}
          margin={"dense"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start" onClick={() => handleComment()}>
                <SendIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ marginY: 2 }}>
        {postData?.comments.length > 0 &&
          postData?.comments.map((item) => (
            <Stack direction={"row"} spacing={1} margin={1}>
              <div>
                <Avatar
                  color="success"
                  variant="solid"
                  src={item?.postedBy?.profile_image}
                  alt={item?.postedBy?.userName}
                >
                  {item?.postedBy?.userName[0] ?? "M"}
                </Avatar>
                {item?.postedBy?.userName}
              </div>

              <Typography
                gutterBottom
                variant="body2"
                component={"div"}
                textAlign={"center"}
                alignItems={"center"}
              >
                {item?.text}
              </Typography>
            </Stack>
          ))}
      </Box>
    </Fragment>
  );
};

export default SinglePostAction;
