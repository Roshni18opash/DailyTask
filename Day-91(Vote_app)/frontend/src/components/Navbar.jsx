import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginBottom: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer" }} onClick={() => navigate("/")}>
        🗳️ VoteApp
      </div>
      
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>Home</Link>
        <Link to="/my-polls" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>My Polls</Link>
        <Link to="/create-poll" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>Create Poll</Link>
      </div>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {user && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>{user.name}</div>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>{user.role}</div>
          </div>
        )}
        <button
          onClick={handleLogout}
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.3)")}
          onMouseOut={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.2)")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
