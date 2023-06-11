import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OTPInput from "react-otp-input";
import { useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import { useAuth } from "src/contexts/authContext";
import { useDispatch } from "react-redux";
import ActionTypes from "src/app/actions";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const OTPpage = () => {
  const [otp, setOtp] = useState("");
  const auth = useAuth();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("otp", otp, "tttttt", typeof otp);
    const term = window.location.href.split("?");
    console.log("term", term, term[1].replace("email=", ""));
    const payload = {
      email: term[1].replace("email=", ""),
      otp: Number(otp),
    };
    axiosClient
      .post("/users/verifyotp", payload)
      .then((results) => {
        if (results?.status === 200) {
          auth.login(results.data?.data);
          dispatch({
            type: ActionTypes.SET_USER_DATA,
            userData: results.data?.data,
          });
          enqueueSnackbar(results?.data?.message, { variant: "success" });
          navigate(`/app`);
        }
      })
      .catch((err) => {
        console.log("errrr", err);
        enqueueSnackbar(err?.message, { variant: "error" });
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Verify OTP
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{ width: "75px", height: "75px" }}
            inputType="number"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Validate OTP
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OTPpage;
