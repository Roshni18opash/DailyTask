import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import RegisterCandidate from "./components/RegisterCandidate";
import CastVote from "./components/CastVote";
import LoginPage from "./components/LoginPage";
import CreatePoll from "./components/CreatePoll";
import MyPolls from "./components/MyPolls";
import Navbar from "./components/Navbar";

function App() {
  const isAuthenticated =
    localStorage.getItem("token") && localStorage.getItem("token") !== "null";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterCandidate />} />
        <Route
          path="/create-poll"
          element={isAuthenticated ? <CreatePoll /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-polls"
          element={isAuthenticated ? <MyPolls /> : <Navigate to="/login" />}
        />
        <Route path="/poll/:id" element={<CastVote />} />
      </Routes>
    </>
  );
}

export default App;
