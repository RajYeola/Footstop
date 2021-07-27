import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginContext = createContext();

const user = {
  email: "user123@gmail.com",
  password: "User@123",
};

export default function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(localStorage.getItem("login"));

    isUserLoggedIn && setIsLoggedIn(true);
  }, []);

  const loginWithUserCredentials = (email, password) => {
    if (user.email === email && user.password === password) {
      setIsLoggedIn(true);
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
      navigate(state?.from ? state.from : "/");
    }
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loginWithUserCredentials }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
