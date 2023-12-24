import axios from "axios";
import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "./actionType";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/book`);
    // console.log(res.data.book);
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data.book });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE });
  }
};

export const addBook = (bookData) => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/book/add`, bookData);
    // console.log(res.data.book);
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data.book });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE });
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    let res = await axios.delete(`http://localhost:8080/book/delete/${bookId}`);
    // console.log(res.data.book);
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data.book });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE });
  }
};
