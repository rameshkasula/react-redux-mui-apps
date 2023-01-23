import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const findUser = JSON.parse(window.localStorage.getItem("user"));
  const [user, setUser] = useState(findUser);

  const login = async (data) => {
    setUser(true);
    await window.localStorage.setItem("user", JSON.stringify(data));
    navigate("/app");
  };
  const logout = async () => {
    await window.localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};