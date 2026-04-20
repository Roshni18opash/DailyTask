import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/polls", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPolls(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
          paddingBottom: "15px",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link
            to="/my-polls"
            style={{ textDecoration: "none", color: "#555" }}
          >
            My Polls
          </Link>

          {user && (
            <Link
              to="/create-poll"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#007bff",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              Create Poll
            </Link>
          )}
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "1px solid #ccc",
              padding: "7px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>Latest Polls</h2>
      {loading ? (
        <p>Loading polls...</p>
      ) : (
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "15px" }}
        >
          {polls.length === 0 ? (
            <p>No polls yet.</p>
          ) : (
            polls.map((poll) => (
              <div
                key={poll._id}
                style={{
                  border: "1px solid #eaeaea",
                  padding: "20px",
                  borderRadius: "8px",
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                }}
              >
                <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
                  {poll.question}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#777" }}>
                    {" "}
                    {poll.options.reduce((s, o) => s + o.votes, 0)} votes
                  </span>
                  <button
                    onClick={() => navigate(`/poll/${poll._id}`)}
                    style={{
                      background: poll.isVoted ? "#28a745" : "#007bff",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {poll.isVoted ? "View Results " : "Vote Now"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
