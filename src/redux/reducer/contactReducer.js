// import { setName, setEmail, setMessage } from "../redux/actions/actions"
import { combineReducers } from "redux";

const initialState = {
  name: '',
  email: '',
  message: ''
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.payload
      };
    case 'setEmail':
      return {
        ...state,
        email: action.payload
      };
    case 'setMessage':
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default contactReducer;
