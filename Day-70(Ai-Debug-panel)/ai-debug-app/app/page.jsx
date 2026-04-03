"use client";

import { useState, useEffect } from "react";
import { getProducts } from "./actions";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import DebugPanel from "./components/DebugPanel";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);
  let filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.price.toString().includes(search),
  );
  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= Number(minPrice),
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= Number(maxPrice),
    );
  }
  if (sortOrder === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const safePage = currentPage > totalPages ? 1 : currentPage;

  const indexOfLast = safePage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI Debug Product Manager</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 mb-3 w-full rounded"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
      <div className="flex gap-3 mb-4">
        <input
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 w-full rounded"
        />

        <input
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 w-full rounded"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>
      <ProductForm
        setLogs={setLogs}
        setProducts={setProducts}
        setCurrentPage={setCurrentPage}
      />
      <ProductList products={currentProducts} setProducts={setProducts} />

      <div className="flex justify-center gap-3 mt-4 text-black">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Prev
        </button>

        <span className="text-white">
          Page {safePage} / {totalPages || 1}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
      <DebugPanel logs={logs} />
    </div>
  );
}
