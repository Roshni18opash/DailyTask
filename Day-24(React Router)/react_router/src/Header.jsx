import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">My DashBoard</h2>
        <div className="nav-links">
          <NavLink to="/" end className="link">
            Home
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Header;
