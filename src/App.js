import { Container } from "@mui/system";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import OptionItem from "./components/OptionItem";
import Translation from "./components/Translation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { selectedOption } = useSelector((state) => state.user);

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Container component={"main"} maxWidth="md">
          <OptionItem />
          {Object.values(selectedOption).length !== 0 && <Translation />}
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
