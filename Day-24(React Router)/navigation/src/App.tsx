import { Routes, Route, Link } from "react-router-dom";
import Dash
import Profile from "./Components/Profile";
import About from "./Components/About";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/profile/1">Profile</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
