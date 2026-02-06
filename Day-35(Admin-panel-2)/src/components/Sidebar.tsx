import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
