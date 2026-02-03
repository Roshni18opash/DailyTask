import { NavLink } from "react-router-dom";
import "../components/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/charts">Charts</NavLink>
        </li>
        <li>
          <NavLink to="/reports">Tables</NavLink>
        </li>
      </ul>
    </div>
  );
}
