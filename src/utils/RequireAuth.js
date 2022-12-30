import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to={"/auth/signin"} replace />;
  }

  return <>{children}</>;
};
