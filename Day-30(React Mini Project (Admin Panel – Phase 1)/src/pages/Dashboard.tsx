import "./Dashboard.css";
import StartCard from "../components/StartCard";
import SalesChart from "../charts/SalesChart";
import BarChart from "../charts/BarChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Stats Section */}
      <div className="stats">
        <StartCard title="Total Users" value={120} />
        <StartCard title="Sales" value="$2400" />
        <StartCard title="Orders" value={85} />
        <StartCard title="Visitors" value={530} />
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-box">
          <h4>Sales Overview</h4>
          <SalesChart />
        </div>

        <div className="chart-box">
          <h4>User Growth</h4>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
