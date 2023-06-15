// actionsProfile.js

// Action types
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_AGE = "SET_AGE";
export const SET_CLIMATE = "SET_CLIMATE";
export const SET_ADDRESS = "SET_ADDRESS";

// Action creators
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    payload: profile,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setPassword = (newPassword) => {
  return {
    type: SET_PASSWORD,
    payload: newPassword,
  };
};

export const setAge = (age) => {
  return {
    type: SET_AGE,
    payload: age,
  };
};

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: age,
  };
};

export const setClimate = (climate) => {
  return {
    type: SET_CLIMATE,
    payload: climate,
  };
};
