import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

type Props = {
  children: React.ReactNode;
  onLogout: () => void;
};

const AdminLayout = ({ children, onLogout }: Props) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Header onLogout={onLogout} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
