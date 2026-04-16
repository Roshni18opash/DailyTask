import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPolls = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/polls/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPolls(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button onClick={() => navigate("/")}>Back</button>
      <h2>My Created Polls</h2>
      {loading ? <p>Loading...</p> : (
        <div>
          {polls.map((poll) => (
            <div key={poll._id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h4>{poll.question}</h4>
              <p>Total votes: {poll.options.reduce((s,o) => s + o.votes, 0)}</p>
              <button onClick={() => navigate(`/poll/${poll._id}`)}>View</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPolls;
