import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    const token = localStorage.getItem("token"); // Get the token from local storage

    axios
      .get("https://backend-production-2c47.up.railway.app/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the authorization token in the request headers
        },
      })
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};


export const deleteUserRequest = () => {
  return {
    type: "DELETE_USER_REQUEST",
  };
};

export const deleteUserSuccess = () => {
  return {
    type: "DELETE_USER_SUCCESS",
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: "DELETE_USER_FAILURE",
    payload: error,
  };
};

export const deleteUser = (uuid) => {
  return (dispatch) => {
    dispatch(deleteUserRequest());
    axios
      .delete(`https://backend-production-2c47.up.railway.app/users/${uuid}`)
      .then((response) => {
        dispatch(deleteUserSuccess());
        // Jika Anda ingin memperbarui daftar pengguna setelah penghapusan, Anda dapat memanggil fetchUsers di sini
        // dispatch(fetchUsers());
      })
      .catch((error) => {
        dispatch(deleteUserFailure(error.message));
      });
  };
};
