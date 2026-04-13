import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  Target,
  Users,
  LogOut,
  ClipboardList,
} from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav
      className="glass"
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        right: "1rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "var(--primary-color)",
          }}
        >
          Roshni Prajapti_
        </h2>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link
            to="/projects"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <Target size={18} /> Projects
          </Link>
          <Link
            to="/tasks"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <ClipboardList size={18} /> Tasks
          </Link>
          {user.role === "ADMIN" && (
            <Link
              to="/teams"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              <Users size={18} /> Teams
            </Link>
          )}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
            {user.name}
          </div>
          <div className={`badge badge-${user.role.toLowerCase()}`}>
            {user.role}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="btn btn-ghost"
          style={{ padding: "8px" }}
        >
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
