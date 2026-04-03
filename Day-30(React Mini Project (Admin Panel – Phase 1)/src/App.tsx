import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./pages/Charts";
import Users from "./pages/Users";
import Tables from "./pages/Tables";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
