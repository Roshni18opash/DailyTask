import React, { useReducer, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CastVote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    poll: null,
    selected: null,
    voted: false,
    loading: false,
  });

  const fetchPoll = async () => {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const res = await fetch(`http://localhost:5000/api/polls/${id}`, {
      headers,
    });
    if (res.ok) {
      const data = await res.json();
      dispatch({
        poll: data,
        voted: data.userVote !== null,
        selected: data.userVote !== null ? data.userVote : null,
      });
    }
  };

  useEffect(() => {
    fetchPoll();

    // Auto-refresh every 5 seconds
    const interval = setInterval(() => {
      fetchPoll();
    }, 5000);

    return () => clearInterval(interval);
  }, [id]);

  const handleVote = async () => {
    if (state.loading) return;
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    if (state.selected === null) return alert("Please select an option");

    dispatch({ loading: true });
    try {
      const res = await fetch(`http://localhost:5000/api/polls/${id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ optionIndex: state.selected }),
      });

      if (res.ok) {
        dispatch({ voted: true, loading: false });
        fetchPoll();
      } else {
        const data = await res.json();
        alert(data.msg || "Vote failed");
        dispatch({ loading: false });
      }
    } catch {
      alert("Network error");
      dispatch({ loading: false });
    }
  };

  if (!state.poll)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  const totalVotes = state.poll.options.reduce(
    (sum, opt) => sum + opt.votes,
    0,
  ); //sum of all votes

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "8px",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          background: "none",
          border: "none",
          color: "#007bff",
          cursor: "pointer",
          marginBottom: "20px",
          padding: 0,
        }}
      >
        ← Back
      </button>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        {state.poll.question}{" "}
        {state.poll.isClosed && (
          <span
            style={{
              fontSize: "14px",
              color: "#fff",
              background: "#dc3545",
              padding: "4px 8px",
              borderRadius: "4px",
              verticalAlign: "middle",
              marginLeft: "10px",
            }}
          >
            Closed
          </span>
        )}
      </h2>
      <p style={{ color: "#777", fontSize: "14px", marginBottom: "30px" }}>
        Total votes: {totalVotes}
      </p>

      {!state.voted && !state.poll.isClosed ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {(() => {
            try {
              const user = JSON.parse(localStorage.getItem("user"));
              if (user?.role === "admin") {
                return (
                  <div
                    style={{
                      padding: "15px",
                      background: "#f8d7da",
                      color: "#721c24",
                      borderRadius: "6px",
                    }}
                  >
                    Admins are not allowed to vote.
                  </div>
                );
              }
            } catch (e) {}
            return null;
          })()}
          {(!localStorage.getItem("user") ||
            JSON.parse(localStorage.getItem("user")).role !== "admin") && (
            <>
              {state.poll.options.map((opt, i) => (
                <label
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 15px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    cursor: "pointer",
                    background: state.selected === i ? "#f0f7ff" : "white",
                    borderColor: state.selected === i ? "#007bff" : "#ddd",
                  }}
                >
                  <input
                    type="radio"
                    name="poll"
                    checked={state.selected === i}
                    onChange={() => dispatch({ selected: i })}
                    style={{ marginRight: "10px" }}
                  />
                  {opt.text}
                </label>
              ))}
              <button
                onClick={handleVote}
                disabled={state.loading || state.selected === null}
                style={{
                  marginTop: "20px",
                  padding: "12px",
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  opacity: state.loading || state.selected === null ? 0.6 : 1,
                }}
              >
                {state.loading ? "Recording..." : "Cast My Vote"}
              </button>
            </>
          )}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {state.poll.options.map((opt, i) => {
            const percent =
              totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
            return (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                    fontSize: "15px",
                  }}
                >
                  <span>
                    {opt.text}{" "}
                    {state.selected === i && (
                      <small style={{ color: "#28a745" }}>
                        (You voted this)
                      </small>
                    )}
                  </span>
                  <span>
                    {opt.votes} votes ({percent}%)
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "#f0f0f0",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${percent}%`,
                      height: "100%",
                      background: "#007bff",
                      transition: "width 0.5s ease",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CastVote;
