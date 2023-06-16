import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../../../redux/actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.userReducer);
  const [updatedUsers, setUpdatedUsers] = useState(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setUpdatedUsers(users);
  }, [users]);

  const handleDelete = (uuid) => {
    dispatch(deleteUser(uuid));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleUserDelete = (uuid) => {
    handleDelete(uuid);
    // Menghapus pengguna dari daftar setelah pengguna dihapus
    const filteredUsers = updatedUsers.filter((user) => user.uuid !== uuid);
    setUpdatedUsers(filteredUsers);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {updatedUsers.map((user) => (
          <li key={user.uuid}>
            {user.name} {user.role}
            <button onClick={() => handleUserDelete(user.uuid)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
