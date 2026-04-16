import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const RegisterCandidate = () => {
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    name: "",
    email: "",
    password: "",
    loading: false,
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ loading: true });

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          password: state.password,
        }),
      });

      if (res.ok) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        alert("Failed to register");
      }
    } catch {
      alert("Error");
    } finally {
      dispatch({ loading: false });
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          placeholder="FullName"
          onChange={(e) => dispatch({ name: e.target.value })}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => dispatch({ email: e.target.value })}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => dispatch({ password: e.target.value })}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />
        <button
          type="submit"
          disabled={state.loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterCandidate;
