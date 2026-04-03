"use client";
import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Roshni",
      text: "Amazing experience! Loved the UI.",
      rating: 5,
    },
    {
      id: 2,
      name: "Prisha",
      text: "Very clean and modern design.",
      rating: 4,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      ...form,
    };

    setReviews([newReview, ...reviews]);
    setForm({ name: "", text: "", rating: 5 });
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-purple-700 text-center">
        ⭐ User Reviews
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-3"
      >
        <h2 className="text-lg font-semibold text-purple-700">
          Add Your Review
        </h2>

        <input
          placeholder="Your Name"
          className="border p-2 w-full rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <textarea
          placeholder="Write your review..."
          className="border p-2 w-full rounded"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          required
        />

        <select
          className="border p-2 w-full rounded"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        >
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>

        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">
          Submit Review
        </button>
      </form>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-5 rounded-xl shadow flex gap-4 items-start"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold">
              {r.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-purple-700">{r.name}</h3>

              <p className="text-yellow-500">{renderStars(r.rating)}</p>

              <p className="text-gray-600 mt-1">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
