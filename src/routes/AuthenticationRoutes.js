import { lazy } from "react";
import Loadable from "src/components/common/Loadable";

const AuthSignIn = Loadable(lazy(() => import("src/pages/auth/SignIn")));
const AuthSignUp = Loadable(lazy(() => import("src/pages/auth/SignUp")));
//const AuthGuard = Loadable(lazy(() => import("src/utils/AuthGuard")));

const AuthenticationRoutes = {
  path: "auth",
  children: [
    {
      path: "signin",
      element: (
        //  <AuthGuard>
        <AuthSignIn />
        //   </AuthGuard>
      ),
    },
    {
      path: "signup",
      element: (
        //  <AuthGuard>
        <AuthSignUp />
        //   </AuthGuard>
      ),
    },
  ],
};

export default AuthenticationRoutes;
