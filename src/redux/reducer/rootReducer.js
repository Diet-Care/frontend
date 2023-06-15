import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";
import authReducer from "./loginReducer";
import cekLogin from "./cekLogin";

const rootReducer = combineReducers({
  authReducer,
  loginReducer,
  userReducer,
  registerReducer,
  cekLogin,
});

export default rootReducer;
