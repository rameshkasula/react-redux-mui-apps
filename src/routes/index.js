import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layout";
import Home from "src/pages/Home";
import SignIn from "src/pages/auth/SignIn";
import SignUp from "src/pages/auth/SignUp";
import Posts from "src/pages/Posts";

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/",
      element: (
          <MainLayout />
      ),
      children: [
        { element: <Navigate to="/app" replace={true} /> },
        { path: "app", element: <Home /> },
        {
            path: "projects",
            children: [
              { element: <Navigate to="/posts" replace /> },
              { path: "", element: <Posts /> },
              //{ path: "create", element: <CreateProject /> },
              //  { path: ":tagId", element: <TagsCreate /> },
            ],
          },
      ],
    },
  ]);
}