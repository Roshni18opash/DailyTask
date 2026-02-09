import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2019", users: 400 },
  { name: "2020", users: 700 },
  { name: "2021", users: 1000 },
];

export default function BarChart() {
  return (
    <div className="chart-box">
      <h4>Statistics</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ReBarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#22c55e" />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}
