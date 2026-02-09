import { useState } from "react";
import "./user.css";

type User = {
  id: number;
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Roshni", email: "rj45@gmail.com" },
    { id: 2, name: "Neev", email: "rn07@gmail.com" },
    { id: 3, name: "Aditi", email: "ab4@gmail.com" },
    { id: 4, name: "Mausmi", email: "rm4@gmail.com" },
    { id: 5, name: "Diyanshi", email: "rds218@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (!name || !email) return;
    const iD = users.length > 0 ? Math.max(...users.map((u) => u.id)) : 0;
    const newUser: User = {
      id: iD + 1,
      name,
      email,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h1>User List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          placeholder="Enter Name..."
          onChange={(e) => setName(e.target.value)}
          id=""
        />

        <input
          type="email"
          value={email}
          placeholder="Enter EmailId..."
          onChange={(e) => setEmail(e.target.value)}
          id=""
        />

        <button onClick={addUser}>Add User</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
