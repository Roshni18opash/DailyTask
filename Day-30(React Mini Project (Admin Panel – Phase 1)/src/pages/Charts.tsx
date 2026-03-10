import SalesChart from "../charts/SalesChart";
import UsersBarChart from "../charts/BarChart";

export default function Charts() {
  return (
    <div style={{ padding: 20 }}>
      <SalesChart />
      <UsersBarChart />
    </div>
  );
}
