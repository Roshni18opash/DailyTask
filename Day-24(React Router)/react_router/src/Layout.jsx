import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

const Layout = () => {
  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-logo">Dashboard</h2>
          <nav className="sidebar-nav">
            <a href="/" className="sidebar-link">
              Home
            </a>
            <a href="/about" className="sidebar-link">
              About
            </a>
            <a href="/contact" className="sidebar-link">
              Contact
            </a>
          </nav>
        </aside>

        {/* THIS IS IMPORTANT */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
