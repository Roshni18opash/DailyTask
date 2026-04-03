
import React, { useState } from "react";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please fill in all fields");
      return;
    }
    login({ id: Date.now(), name, email });
    navigate("/welcome");
  };
  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={titleStyle}>LogIn</h1>
         <p style={subtitleStyle}>Welcome to the Page</p> 

        {error && <p style={errorStyle}>{error}</p>}

        <input
          style={inputStyle}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={inputStyle}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
//styles

const containerStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 backgroundImage: 
    "url('https://storage.pixteller.com/designs/designs-images/2019-03-27/05/simple-background-backgrounds-passion-simple-1-5c9b95d2b9dfb.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};
const formStyle: React.CSSProperties = {
  width: 360,
  padding: 40,
  backgroundColor: "#ffffff",
  borderRadius: 16,
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  gap: 15,
    background: "rgba(255, 255, 255, 0.15)", 
  backdropFilter: "blur(10px)",             
  WebkitBackdropFilter: "blur(10px)",       
  border: "1px solid rgba(255, 255, 255, 0.3)",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  textAlign: "center",
  fontSize: 28,
  color: "#333",
};
const subtitleStyle: React.CSSProperties = {
  margin: 0,
  textAlign: "center",
  color: "#555",
  fontSize: 14,
};
const inputStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #ccc",
  fontSize: 14,
};
const buttonStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 8,
  border: "none",
  backgroundColor: "#3a56d4",
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
  cursor: "pointer",
  transition: "0.3s",
  width:"30%",
    alignSelf: "center",
};
const errorStyle: React.CSSProperties = {
  color: "red",
  fontSize: 13,
  textAlign: "center",
};
