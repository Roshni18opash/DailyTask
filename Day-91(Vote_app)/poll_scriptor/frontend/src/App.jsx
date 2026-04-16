import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RegisterCandidate from "./components/RegisterCandidate"; 
import CastVote from "./components/CastVote"; 
import LoginPage from "./components/LoginPage";
import CreatePoll from "./components/CreatePoll";
import MyPolls from "./components/MyPolls";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterCandidate />} />
      <Route path="/create-poll" element={<CreatePoll />} />
      <Route path="/my-polls" element={<MyPolls />} />
      <Route path="/poll/:id" element={<CastVote />} />
    </Routes>
  );
}

export default App;
