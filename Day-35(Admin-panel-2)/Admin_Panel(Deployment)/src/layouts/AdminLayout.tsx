import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type Props = {
  onLogout: () => void;
};

const AdminLayout = ({ onLogout }: Props) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <Header onLogout={onLogout} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
