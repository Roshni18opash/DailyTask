import StartCard from "../components/StartCard";
import SalesChart from "../charts/SalesChart";
import BarChart from "../charts/BarChart";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <StartCard title="Revenue" value="₹45,000" />
        <StartCard title="Sales" value="1,250" />
        <StartCard title="Users" value="320" />
        <StartCard title="Orders" value="89" />
      </div>

      <div className="charts">
        <SalesChart />
        <BarChart />
      </div>
    </div>
  );
}
