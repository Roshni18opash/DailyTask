import { useState } from "react";
import type { User } from "../types";
import { initialUsers } from "../data/users";

const Users = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const addUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: "New User",
      email: "newuser@gmail.com",
      role: "user",
    };
    setUsers((prev) => [...prev, newUser]);
  };

  const resetUsers = () => {
    setUsers(initialUsers);
  };

  return (
    <>
      <h1 className="page-title">Users</h1>

      {/* ACTION BAR */}
      <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
        <button className="btn" onClick={addUser}>
          Add User
        </button>
        <button className="btn" onClick={resetUsers}>
          Reset
        </button>
      </div>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
