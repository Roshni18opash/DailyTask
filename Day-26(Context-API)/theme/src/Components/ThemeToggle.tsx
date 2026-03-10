import { useTheme } from "../Context/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        color: theme === "light" ? "#000" : "#fff",
        textAlign: "center",
        width: "300px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{theme.toUpperCase()} MODE</h2>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          marginTop: "15px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
