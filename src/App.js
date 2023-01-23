import React from "react";
import { Fragment } from "react";
import { AuthProvider } from "./contexts/authContext";
import Router from "./routes";

const App = () => {
  return (<Fragment>
      <AuthProvider >
        <Router />
      </AuthProvider>
  </Fragment>)
};

export default App;
