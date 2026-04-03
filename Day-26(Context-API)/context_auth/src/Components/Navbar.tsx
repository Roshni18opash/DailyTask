//manages navigation bar and displays user info based on authentication state
import { useAuth } from "../Context/useAuth";
const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#ffffff",
        padding: "15px 20px",
        borderRadius: "10px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
      }}
    >
      <p style={{ marginBottom: "10px", fontWeight: 600,width:"100%" }}>
        Welcome, {user?.name}
      </p>

      <button
        onClick={logout}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#d40e26",
          color: "#ffffff",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
