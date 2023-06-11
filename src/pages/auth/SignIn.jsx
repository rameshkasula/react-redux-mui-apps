import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "src/contexts/authContext";
import axiosClient from "src/helpers/axiosClient";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "src/app/actions";

export default function SignIn() {
  const [loading, setLoading] = React.useState(!true);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  console.log("ttttttttttt", user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      email: data.get("email"),
      password: data.get("password"),
    };
    setLoading(true);
    axiosClient
      .post("/users/login", payload)
      .then((results) => {
        console.log("ddddddd", results);
        dispatch({
          type: ActionTypes.SET_USER_DATA,
          userData: { email: payload?.email },
        });
        enqueueSnackbar(results?.data?.message, { variant: "success" });
        navigate(`/auth/otp?email=${payload.email}`);
        // auth.login(results.data);
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err?.message, { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
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
            disabled={loading}
          >
            Sign In
          </Button>
          <Grid container>
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
    </Container>
  );
}
