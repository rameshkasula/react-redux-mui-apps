import { lazy } from "react";
import Loadable from "src/components/common/Loadable";

const AuthSignIn = Loadable(lazy(() => import("src/pages/auth/SignIn")));
const AuthSignUp = Loadable(lazy(() => import("src/pages/auth/SignUp")));

const AuthenticationRoutes = {
  path: "auth",
  children: [
    {
      path: "login",
      element: <AuthSignIn />,
    },
    {
      path: "signup",
      element: <AuthSignUp />,
    },
  ],
};

export default AuthenticationRoutes;
