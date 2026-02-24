import { createContext, useReducer, useState } from "react";
import { AUTH_ACTIONS, authReducer } from "../reducer/auth.reducer";
import { initialState } from "../reducer/auth.reducer";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginAuth = (user) => {
    dispatch({ type: AUTH_ACTIONS.LOGIN, payload: { user } });
    localStorage.setItem("isAuth", true);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutAuth = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    
  };

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("login");

  const handleClose = () => setShow(false);
  const handleShow = (type = "login") => {
    setMode(type);
    setShow(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        user: state.user,
        loginAuth,
        logoutAuth,
        handleClose,
        handleShow,
        show,
        mode,
        setMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
