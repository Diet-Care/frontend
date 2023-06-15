// profileReducer.js
import { SET_USER_PROFILE, SET_EMAIL, SET_PASSWORD, SET_ADDRESS, SET_CLIMATE, SET_AGE } from "../actions/actionsProfile";
// Initial State
const initialState = {
  userProfile: {
    name: "John Doe",
    gender: "Male",
    age: 30,
    address: "bogor",
    climate: "Tropical Climate",
    password: "initialPassword"
  },
  email: "johndoe@example.com",
};

// Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          password: action.payload,
        },
      };
    case SET_AGE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          age: action.payload,
        },
      };
    case SET_CLIMATE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          climate: action.payload,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
