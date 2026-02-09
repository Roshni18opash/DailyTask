import { Table } from "react-bootstrap";

const Tables = () => {
  const data = [
    { id: 1, name: "Roshni", role: "Developer", country: "India" },
    { id: 2, name: "jems", role: "Designer", country: "USA" },
    { id: 3, name: "Sara", role: "Manager", country: "UK" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">User Table</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
