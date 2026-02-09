import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/tables">Tables</NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
