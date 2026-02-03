import { useCallback, useMemo, useState } from "react";
import { employees } from "./data/empl";
import EmployeeTable from "./components/EmpTable";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [search, setSearch] = useState(""); //store cur search value
  const [department, setDepartment] = useState("All"); //initialy All dep. show

  const handleSearch = useCallback((value: string) => setSearch(value), []);
  const handleDepartment = useCallback(
    (value: string) => setDepartment(value),
    [],
  );

  const listedEmp = useMemo(() => {
    // console.log("Filtering employees");
    return employees.filter((emp) => {
      const matchName = emp.name.toLowerCase().includes(search.toLowerCase());
      const matchDept =
        department === "All" ? true : emp.department === department;
      return matchName && matchDept;
    });
  }, [search, department]);

  return (
    <div className="container">
      <h1>Employee Details</h1>

      <div className="controls">
        <Search value={search} onChange={handleSearch} />

        <select
          value={department}
          onChange={(e) => handleDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <EmployeeTable data={listedEmp} />
    </div>
  );
}

export default App;
