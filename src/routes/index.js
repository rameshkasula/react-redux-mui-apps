// import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layout";
import Home from "src/pages/Home";
import SignIn from "src/pages/auth/SignIn";
import SignUp from "src/pages/auth/SignUp";
import Posts from "src/pages/Posts";
import CreatePost from "src/components/posts/CreatePost";
import { RequireAuth } from "src/helpers/RequireAuth";
import ViewPost from "src/components/posts/ViewPost";
import Profile from "src/pages/Profile";

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
        <RequireAuth>
          <MainLayout />
        </RequireAuth>
      ),
      children: [
        { element: <Navigate to="/app" replace /> },
        { path: "app", element: <Home /> },
        { path: "profile", element: <Profile /> },

        {
          path: "posts",
          children: [
            { element: <Navigate to="/posts" replace /> },
            { path: "", element: <Posts /> },
            { path: "create", element: <CreatePost /> },
            { path: "view", element: <ViewPost /> },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/app" replace />,
    },
  ]);
}
