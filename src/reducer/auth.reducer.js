export const initialState = {
  isAuth: localStorage.getItem("isAuth") === "true",
  user:
    localStorage.getItem("user") && localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
};

export const AUTH_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return { isAuth: true, user: action.payload.user };

    case AUTH_ACTIONS.LOGOUT:
      return { isAuth: false, user: null };

    default:
      return state;
  }
}
