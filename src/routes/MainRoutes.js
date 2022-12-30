import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "src/components/common/Loadable";
import MainLayout from "src/components/layout";

// const Sampletable = Loadable(
//   lazy(() => import("src/components/common/SampleTable"))
// );
const AuthSignUp = Loadable(lazy(() => import("src/pages/auth/SignUp")));
const Posts = Loadable(lazy(() => import("src/components/posts")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,

  children: [
    { path: "", element: <Navigate to="/app" replace={true} /> },
    // {
    //   path: "",
    //   element: <Sampletable />,
    // },
    {
      path: "app",
      element: <Posts />,
    },

    {
      path: "/signup",
      element: <AuthSignUp />,
    },
  ],
};

export default MainRoutes;
