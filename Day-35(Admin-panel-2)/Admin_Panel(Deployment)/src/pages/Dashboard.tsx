import SalesChart from "../charts/SalesChart";
import BarChart from "../charts/BarChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h4>Total Users</h4>
          <p>120</p>
        </div>

        <div className="card">
          <h4>Total Sales</h4>
          <p>₹45,000</p>
        </div>

        <div className="card">
          <h4>Orders</h4>
          <p>68</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="chart-box">
          <h4>Total Revenue</h4>
          <SalesChart />
        </div>

        <div className="chart-box">
          <h4>Statistics</h4>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
