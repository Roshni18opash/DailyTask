import { useState } from "react";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Rohit", email: "rohit@gmail.com" },
    { id: 2, name: "Amit", email: "amit@gmail.com" },
    { id: 3, name: "Priya", email: "priya@gmail.com" },
    { id: 4, name: "Rahul", email: "rahul@gmail.com" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border={1} cellPadding={10} style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
