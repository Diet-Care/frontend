// actionsProfile.js

// Action Types
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";

// Action Creators
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const setPhoneNumber = (phoneNumber) => ({
  type: SET_PHONE_NUMBER,
  payload: phoneNumber,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});
