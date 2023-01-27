import React, { Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/app");
    }
  }, [navigate]);
  return (
    <Fragment>
      <Header />
      <Fragment>
        <Outlet />
      </Fragment>
    </Fragment>
  );
}
