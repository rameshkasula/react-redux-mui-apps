import { Box, CircularProgress, Container } from "@mui/material";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProfileAccount from "src/components/profile/ProfileAccount";
import axiosClient from "src/helpers/axiosClient";

const Account = () => {
  const findUser = JSON.parse(window.localStorage.getItem("user"));

  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!false);
    axiosClient
      .get("/user/profile/" + findUser?._id)
      .then((results) => {
        console.log(results.data?.data);
        if (results.status === 200) {
          setProfileData(results.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setProfileData();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [findUser?._id]);
  return (
    <Fragment>
      <Container component={"main"} maxWidth={"md"}>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!!loading ? (
            <CircularProgress />
          ) : (
            profileData && <ProfileAccount data={profileData} />
          )}
        </Box>
      </Container>
    </Fragment>
  );
};

export default Account;
