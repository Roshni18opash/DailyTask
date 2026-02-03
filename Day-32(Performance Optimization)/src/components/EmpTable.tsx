import type { Employee } from "../data/empl";
import EmployeeRow from "./Emp";

const EmployeeTable = ({ data }: { data: Employee[] }) => {
  return (
    <table className="emloyee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp) => (
          <EmployeeRow key={emp.id} emp={emp} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
