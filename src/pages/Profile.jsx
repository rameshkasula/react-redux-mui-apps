import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProfileCard from "src/components/profile/ProfileCard";
import axiosClient from "src/helpers/axiosClient";

const Profile = () => {
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
            profileData && <ProfileCard data={profileData} />
          )}
        </Box>
      </Container>
    </Fragment>
  );
};

export default Profile;
