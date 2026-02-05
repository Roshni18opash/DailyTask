import Sidebar from "./Sidebar";
import "./index.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
