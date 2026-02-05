import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Admin Panel</h3>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
