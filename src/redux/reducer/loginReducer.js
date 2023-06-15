import { combineReducers } from "redux";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionRegister/actionLogin";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default authReducer;
