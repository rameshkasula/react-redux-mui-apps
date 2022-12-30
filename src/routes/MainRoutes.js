import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "src/components/common/Loadable";
import MainLayout from "src/components/layout";
import { RequireAuth } from "src/utils/RequireAuth";

// const Sampletable = Loadable(
//   lazy(() => import("src/components/common/SampleTable"))
// );
const Posts = Loadable(lazy(() => import("src/components/posts")));

const MainRoutes = {
  path: "/",
  element: (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  ),

  children: [
    { path: "", element: <Navigate to="/app" replace={true} /> },
    {
      path: "app",
      element: <Posts />,
    },
  ],
};

export default MainRoutes;
