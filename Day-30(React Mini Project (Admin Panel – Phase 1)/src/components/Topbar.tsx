import "../styles/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <h3>Dashboard</h3>

      <div className="topbar-icons">
        <span>🔔</span>
        <span>👤 Admin</span>
      </div>
    </div>
  );
};

export default Topbar;
