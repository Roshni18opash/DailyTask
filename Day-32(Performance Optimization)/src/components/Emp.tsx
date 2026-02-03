import { memo } from "react";
import type { Employee } from "../data/empl";

const EmployeeRow = ({ emp }: { emp: Employee }) => {
  return (
    <tr>
      <td>{emp.name}</td>
      <td>{emp.department}</td>
      <td>₹{emp.salary}</td>
    </tr>
  );
};
export default memo(EmployeeRow);
