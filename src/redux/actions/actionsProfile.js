// profileActions.js

export const setUserProfile = (userProfile) => {
  return {
    type: "SET_USER_PROFILE",
    payload: userProfile,
  };
};

export const setPhoneNumber = (phoneNumber) => {
  return {
    type: "SET_PHONE_NUMBER",
    payload: phoneNumber,
  };
};

export const setEmail = (email) => {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
};
