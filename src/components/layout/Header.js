import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { ColorModeContext } from "src/contexts/ColorContext";
import { Link } from "react-router-dom";
import { useAuth } from "src/contexts/authContext";
import AccountPopOver from "./AccountPopOver";

export default function Header() {
  const theme = useTheme();
  const auth = useAuth();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <SideBar /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {!auth?.user ? (
            <Button component={Link} to="/auth/signin" variant="contained">
              Login
            </Button>
          ) : (
            <AccountPopOver />
          )}
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
