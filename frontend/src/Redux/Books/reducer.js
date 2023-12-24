import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "./actionType";

const intialState = {
  books: [],
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_REQUEST:
    case FETCH_BOOKS_FAILURE:
      return { ...state };
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: payload };
    default:
      return state;
  }
};
