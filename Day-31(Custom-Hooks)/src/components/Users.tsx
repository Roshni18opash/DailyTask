import { useFetch } from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = () => {
  const { data, fetchData } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <div>
      <button onClick={fetchData}>Users list</button>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
