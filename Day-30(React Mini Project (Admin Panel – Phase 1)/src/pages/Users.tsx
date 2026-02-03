import "./user.css";

const users = [
  {
    id: 1,
    name: "Roshni Prajapati",
    email: "rj45@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Neev Lad",
    email: "neev@gmail.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "michel dave",
    email: "md@gmail.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Pooja Patel",
    email: "pooja@gmail.com",
    role: "Manager",
    status: "Active",
  },
];

export default function Users() {
  return (
    <div className="users-page">
      <div className="users-header">
        <h2>Users</h2>
        <button>Add User</button>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
