import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "src/app/actions";
import ChatBox from "src/components/chat/ChatBox";
import UsersBox from "src/components/chat/UsersBox";
import axiosClient from "src/helpers/axiosClient";

const Chatpage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/user/getall")
      .then(async (results) => {
        console.log(results.data);
        await dispatch({
          type: ActionTypes.SET_USERS,
          users: results.data?.data,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Fragment>
      <Container component={"main"} maxWidth={"md"}>
        <Box borderColor={"error"} sx={{ marginY: 2 }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <UsersBox />
              </Grid>
              <Grid item xs={12} md={8}>
                <ChatBox />
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </Fragment>
  );
};

export default Chatpage;
