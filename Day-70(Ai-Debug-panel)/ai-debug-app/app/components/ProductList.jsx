"use client";

import { useState } from "react";
import { deleteProduct, updateProduct } from "../actions";

export default function ProductList({ products, setProducts }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleUpdate = async (id) => {
    await updateProduct(id, editName, Number(editPrice));
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, name: editName, price: Number(editPrice) } : p,
      ),
    );
    setEditId(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
      {products.map((p) => (
        <div
          key={p._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 border"
        >
          {editId === p._id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
              />
              <input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                className="border p-2 w-full mb-3 rounded"
              />

              <button
                onClick={() => handleUpdate(p._id)}
                className="bg-green-500 text-white px-4 py-1 rounded w-full"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {p.name}
              </h2>

              <p className="text-2xl font-bold text-green-600 mb-4">
                ₹ {p.price}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditId(p._id);
                    setEditName(p.name);
                    setEditPrice(p.price);
                  }}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
