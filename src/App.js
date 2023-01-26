import { SnackbarProvider } from "notistack";
import React from "react";
import { Fragment } from "react";
import { AuthProvider } from "./contexts/authContext";
import Router from "./routes";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
