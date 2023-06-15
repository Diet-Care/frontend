// store profile
// import { createStore } from "redux";
// import cekLogin from "./reducer/cekLogin";

// // Create the store
// const store = createStore(cekLogin);

// export default store;

// store profile

// coba ii
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import registerReducer from "./reducer/registerReducer";
import cekLogin from "./reducer/cekLogin";
import userReducer from "./reducer/userReducer";

// Action Types
const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";

// Action Creators
export const setLoginStatus = (isLoggedIn) => ({
  type: SET_LOGIN_STATUS,
  payload: isLoggedIn,
});

// Combine multiple reducers
const rootReducer = combineReducers({
  cekLogin,
  registerReducer,
  userReducer,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


// coba ii

