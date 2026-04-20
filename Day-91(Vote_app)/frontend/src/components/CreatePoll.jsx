import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
  const [form, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    question: "",
    options: ["", ""],
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/polls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Poll Created!");
        navigate("/");
      } else {
        const data = await res.json();
        alert("Failed: " + data.msg);
      }
    } catch {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "8px",
        fontFamily: "sans-serif",
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
      <h2 style={{ marginBottom: "20px" }}>Create New Poll</h2>
      <form onSubmit={handleCreate}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
          >
            Question
          </label>
          <input
            placeholder="What would you like to ask?"
            required
            onChange={(e) => dispatch({ question: e.target.value })}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
          >
            Options
          </label>
          {form.options.map((opt, i) => (
            <input
              key={i}
              placeholder={`Option ${i + 1}`}
              value={opt}
              onChange={(e) => {
                const newOpts = [...form.options];
                newOpts[i] = e.target.value;
                dispatch({ options: newOpts });
              }}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            />
          ))}
          <button
            type="button"
            onClick={() => dispatch({ options: [...form.options, ""] })}
            style={{
              background: "none",
              border: "1px dashed #007bff",
              color: "#007bff",
              padding: "8px 15px",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            + Add
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          {loading ? "Creating..." : "Create Poll"}
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
