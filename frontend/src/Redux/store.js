import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as authReducer } from "./UsserAuth/reducer";
import { reducer as bookReducer } from "./Books/reducer";

const rootReducer = combineReducers({ authReducer, bookReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
