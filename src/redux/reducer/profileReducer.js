// profileReducer.js

// Action Types
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";
const SET_AGE = "SET_AGE";
const SET_CLIMATE = "SET_CLIMATE";

// Initial State
const initialState = {
  userProfile: {
    username: "john_doe",
    name: "John Doe",
    gender: "Male",
    age: 30,
    climate: "Tropical Climate",
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

// Action Creators
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setAge = (age) => ({
  type: SET_AGE,
  payload: age,
});

export const setClimate = (climate) => ({
  type: SET_CLIMATE,
  payload: climate,
});

export default profileReducer;
