import React, { useEffect, useState } from "react";
import SignUpComponent from "./SignUp/SignUp"
import { store } from "../../../../Store/bookStore"

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawerOpenEditUser, setDrawerOpenEditUser] = useState(false);
  const { editUserDrawer, setEditUserDrawer } = store(state => state);


  useEffect(() => {
    fetch("http://localhost:5000/getUsers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users List</h1>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>User Type</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Group</th>
            <th>Language Group</th>
            <th>Date of Birth</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.userType}</td>
              <td>{user.firstName}</td>
              <td>{user.middleName}</td>
              <td>{user.lastName}</td>
              <td>{user.groupKey}</td>
              <td>{user.idiomGroupKey}</td>
              <td>{user.dateOfBirth}</td>
              <td><button onClick={() => setEditUserDrawer(!editUserDrawer.status)}>Click here</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <SignUpComponent/>
    </div>
  );
};

export default UsersTable;
