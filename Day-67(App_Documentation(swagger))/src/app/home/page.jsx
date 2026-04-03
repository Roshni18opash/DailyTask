"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch
  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/articles");
      if (!res.ok) throw new Error("Failed to fetch articles");
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // ADD
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to add article");
      setForm({ title: "", description: "" });
      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete article");
      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  //  UPDATE
  const handleUpdate = async (id) => {
    if (!form.title || !form.description) return;

    try {
      const res = await fetch(`/api/articles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update article");

      setForm({ title: "", description: "" });
      setEditingId(null);
      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Tech World 🌐
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your daily dose of tech news, tutorials, and insights.
        </p>

        <Link
          href="/home"
          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-6">
        <div className="max-w-xl mx-auto mb-10 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-purple-700 mb-3">
            {editingId ? "Edit Article" : "Add New Article"}
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              editingId ? handleUpdate(editingId) : handleSubmit(e);
            }}
            className="flex flex-col gap-3"
          >
            <input
              placeholder="Title"
              className="border p-2 rounded text-black"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              placeholder="Description"
              className="border p-2 rounded text-black"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
            <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              {editingId ? "Update Article" : "Add Article"}
            </button>
          </form>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.description}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setForm({
                      title: article.title,
                      description: article.description,
                    });
                    setEditingId(article._id);
                  }}
                  className="bg-purple-700 text-white px-3 py-1 rounded text-sm hover:bg-purple-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(article._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
