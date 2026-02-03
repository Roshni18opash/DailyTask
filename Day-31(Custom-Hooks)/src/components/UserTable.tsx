import { useFetch } from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UsersTable = () => {
  const { data, fetchData } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <div>
      <button onClick={fetchData} style={{ marginBottom: "15px" }}>
        Show Users
      </button>

      {data && (
        <table
          border={1}
          cellPadding={10}
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
