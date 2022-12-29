import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "src/components/common/Loadable";
import MainLayout from "src/components/layout";

const Sampletable = Loadable(
  lazy(() => import("src/components/common/SampleTable"))
);
const AuthSignUp = Loadable(lazy(() => import("src/pages/auth/SignUp")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,

  children: [
    { element: <Navigate to="/users" replace={true} /> },
    {
      path: "",
      element: <Sampletable />,
    },
    {
      path: "users",
      element: <Sampletable />,
    },

    {
      path: "/signup",
      element: <AuthSignUp />,
    },
  ],
};

export default MainRoutes;
