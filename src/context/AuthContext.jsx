import { createContext, useReducer } from "react";
import {
  AUTH_ACTIONS,
  authReducer,
  initialState,
} from "../reducer/auth.reducer";

// import { initialState } from "../../reducer/auth.reducer";

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

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        user: state.user,
        loginAuth,
        logoutAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
