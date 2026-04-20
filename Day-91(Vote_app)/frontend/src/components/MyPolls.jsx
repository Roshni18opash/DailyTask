import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPolls = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const fetchMyPolls = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/polls/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPolls(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMyPolls();
  }, []);

  const handleToggle = async (id) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/polls/${id}/toggle`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      fetchMyPolls();
    } else {
      alert("Failed to toggle poll status");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}
      >
        ← Back to Home
      </button>
      <h2 style={{ marginBottom: "20px" }}>My Created Polls</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {polls.length === 0 ? (
            <p>You haven't created any polls yet.</p>
          ) : (
            polls.map((poll) => (
              <div
                key={poll._id}
                style={{
                  border: "1px solid #eaeaea",
                  padding: "20px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 5px 0" }}>{poll.question}</h4>
                  <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                    Total votes: {poll.options.reduce((s, o) => s + o.votes, 0)}{" "}
                    | Status:{" "}
                    <span
                      style={{
                        color: poll.isClosed ? "#dc3545" : "#28a745",
                        fontWeight: "bold",
                      }}
                    >
                      {poll.isClosed ? "Closed" : "Open"}
                    </span>
                  </p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => navigate(`/poll/${poll._id}`)}
                    style={{ padding: "8px 12px", cursor: "pointer" }}
                  >
                    View
                  </button>
                  {user?.role === "admin" && (
                    <button
                      onClick={() => handleToggle(poll._id)}
                      style={{
                        padding: "8px 12px",
                        cursor: "pointer",
                        background: poll.isClosed ? "#28a745" : "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    >
                      {poll.isClosed ? "Open Poll" : "Close Poll"}
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyPolls;
