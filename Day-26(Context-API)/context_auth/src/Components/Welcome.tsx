import { useAuth } from "../Context/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
    const navigate = useNavigate();
  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Welcome, {user?.name}</h1>
        <p style={subtitleStyle}>{user?.email}</p>
        <button style={buttonStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;


const pageStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: 
    "url('https://www.imageshine.in/uploads/gallery/abstract-background-wallpaper-zoom.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const boxStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.15)",  
  backdropFilter: "blur(10px)",             
  WebkitBackdropFilter: "blur(10px)",       
  border: "1px solid rgba(255, 255, 255, 0.3)", 
  padding: 40,
  borderRadius: 14,
  textAlign: "center",
  width: 360,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  gap: 15,
};


const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 28,
  color: "#000000",
};

const subtitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  color: "#000000",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 20px",
  borderRadius: 8,
  border: "none",
  backgroundColor: "#667eea",
  color: "#fff",
  fontSize: 16,
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s",
  width:"30%",
    alignSelf: "center",
};

