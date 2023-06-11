import { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionTypes from "src/app/actions";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const findUser = JSON.parse(window.localStorage.getItem("user"));
    if (findUser?.token) {
      setUser(findUser?.token);
    }
  }, []);

  const login = async (data) => {
    setUser(data?.token);
    window.localStorage.setItem("user", JSON.stringify(data));
    navigate("/app");
  };

  const register = async (data) => {
    setUser(true);
    await window.localStorage.setItem("user", JSON.stringify(data));
    navigate("/app");
  };

  const logout = async () => {
    await window.localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
