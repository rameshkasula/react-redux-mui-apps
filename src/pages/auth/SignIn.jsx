import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import AxiosClient from "src/utils/AxiosClient";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import ActionTypes from "src/app/actions";
import { storeInLocal } from "src/utils/Storage";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let payload = {
      email: data.get("email"),
      password: data.get("password"),
    };

    AxiosClient.post("/user/loginuser", payload)
      .then((res) => {
        if (res.status === 200) {
          storeInLocal("userData", res.data.data);
          dispatch({
            type: ActionTypes.SET_USER_DATA,
            userData: res.data.data,
          });

          enqueueSnackbar("Login Successful", {
            variant: "success",
          });
          navigate("/app");
        }
      })
      .catch((error) => {
        console.error(error);
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography
                component={Link}
                to="/auth/signup"
                variant="body"
                gutterBottom
                noWrap
                color={"inherit"}
                sx={{ textDecoration: "none" }}
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={Link}
                to="/auth/signup"
                variant="body"
                gutterBottom
                noWrap
                color={"inherit"}
                sx={{ textDecoration: "none" }}
              >
                {"Don't have an account? Sign Up"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
