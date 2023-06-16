import {
  SET_USER_PROFILE,
  SET_EMAIL,
  SET_PASSWORD,
  SET_ADDRESS,
  SET_CLIMATE,
  SET_AGE,
} from "../actions/actionsProfile";
import axios from "axios";

// Initial State
const initialState = {
  userProfile: {
    name: null,
    gender: null,
    age: null,
    address: null,
    climate: null,
    password: null,
  },
  email: null,
};

// Action types
const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
const FETCH_USER_PROFILE_FAILURE = "FETCH_USER_PROFILE_FAILURE";

// Action creators
const fetchUserProfileSuccess = (profile) => {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    payload: profile,
  };
};

const fetchUserProfileFailure = (error) => {
  return {
    type: FETCH_USER_PROFILE_FAILURE,
    payload: error,
  };
};

// Thunk function to fetch user profile data
export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://backend-production-2c47.up.railway.app/users");
      const userProfile = response.data.data[0]; // Assuming the user profile data is available in the first object of the response data array
      dispatch(fetchUserProfileSuccess(userProfile));
    } catch (error) {
      dispatch(fetchUserProfileFailure(error.message));
    }
  };
};

// Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      };
    case FETCH_USER_PROFILE_FAILURE:
      console.log("Failed to fetch user profile:", action.payload);
      return state;
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          address: action.payload,
        },
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
