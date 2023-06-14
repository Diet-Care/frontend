// reducerProfile.js

import { SET_USER_PROFILE, SET_PHONE_NUMBER, SET_EMAIL } from "../actions/actionsProfile";

const initialState = {
  userProfile: {
    name: "",
    // profilePicture: "",
    profilePicture: '',
  },
  phoneNumber: "",
  email: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
