import { Navigate } from "react-router-dom";
import { useAuth } from "src/contexts/authContext";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth?.user) {
    return <Navigate to="/auth/signin" replace />;
  }
  return children;
};