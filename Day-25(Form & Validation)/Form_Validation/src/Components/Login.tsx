import { useState } from "react";
import { useAuth } from "../ContextAuth/useAuth";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill in all fields");

    login({
      id: Date.now(),
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 40px",
    backgroundColor: "#5077aa",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "300px",
    gap: "15px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#fafafa",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "30%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#42a042",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 auto",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
