import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_SIGNUP_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  adminIsAuth: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_REQUEST:
    case USER_SIGNUP_FAILURE:
    case ADMIN_SIGNUP_REQUEST:
      return { ...state, isAuth: false };
    case USER_SIGNUP_SUCCESS:
      return { ...state, isAuth: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isAuth: true, token: payload };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, adminIsAuth: true };
    case USER_LOGOUT:
      return { ...state, isAuth: false, adminIsAuth: false };
    default:
      return state;
  }
};
