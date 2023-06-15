import axios from "axios";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../actions/actions";

export const regis = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(registerStart());
      const response = await axios.post(
        "https://backend-production-2c47.up.railway.app/auth/register",
        {
          name,
          email,
          password,
        }
      );

      // Handle success response
      dispatch(registerSuccess());
    } catch (error) {
      // Handle error response
      dispatch(registerFailure(error.message));
    }
  };
};
