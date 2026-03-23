"use client";
import { useState } from "react";

export default function UserForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <input
        placeholder="Title"
        className="border p-2 mr-2"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Description"
        className="border p-2 mr-2"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="bg-purple-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
