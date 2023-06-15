// Define the initial state
const initialState = {
  isLoggedIn: false,
};

// Define the reducer
const cekLogin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default cekLogin;
