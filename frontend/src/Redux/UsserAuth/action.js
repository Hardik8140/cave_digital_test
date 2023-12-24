import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_SIGNUP_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "./actionType";
import axios from "axios";

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/users/login`, userData);
    // console.log(res.data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_SIGNUP_FAILURE });
  }
};

export const loginAdmin = (userData) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNUP_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/admin/login`, userData);
    // console.log(res.data);
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_SIGNUP_FAILURE });
  }
};

export const signUpUser = (userData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/users/signup`, userData);
    console.log(res.data);
    dispatch({ type: USER_SIGNUP_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAILURE });
  }
};

export const signUpAdmin = (userData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/admin/signup`, userData);
    console.log(res.data);
    dispatch({ type: USER_SIGNUP_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAILURE });
  }
};

export const logoutUserAsync = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
  } catch (error) {
    console.log(error);
    // Handle any errors if needed
  }
};
