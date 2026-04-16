import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    email: "",
    password: "",
    loading: false,
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ loading: true });

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: state.email, password: state.password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch {
      alert("Network error");
    } finally {
      dispatch({ loading: false });
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Login</h2>
      <form onSubmit={handleLogin}>
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
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          {state.loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
