const Dashboard = () => {
  return (
    <>
      <h1 className="page-title">Dashboard</h1>

      <div className="card-container">
        <div className="card">
          <h3>Users</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>₹25,000</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
