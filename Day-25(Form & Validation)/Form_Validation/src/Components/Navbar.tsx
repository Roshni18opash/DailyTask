import { useAuth } from "../ContextAuth/useAuth";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column", // stack vertically
        alignItems: "center",    // center horizontally
        gap: "15px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
      }}
    >
      {isAuthenticated ? (
        <>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              margin: 0,
              
            }}
          >
            Welcome, {user?.name}
          </p>
          <button
            onClick={logout}
            style={{
              width: "120px",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#42a042",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#369636")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#42a042")}
          >
            Logout
          </button>
        </>
      ) : (
        <p style={{ color: "#666" }}></p>
      )}
    </nav>
  );
};

export default Navbar;
