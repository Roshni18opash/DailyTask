const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>120</p>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <p>95</p>
        </div>
        <div className="card">
          <h3>Admins</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
