import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  if (isAuth) {
    return <Navigate to="/app" replace />;
  }
  return children;
};
