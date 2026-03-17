"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipe = async () => {
    if (!search.trim()) {
      alert("Please enter Recipe name");
      return;
    }
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals || []);
    setLoading(false);
  };
  const randomRecipe = async () => {
    setLoading(true);
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
    );
    n;

    const data = await res.json();
    setRecipes(data.meals || []);
    setLoading(false);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto p-5">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search recipe..."
            className="flex-1 p-2 border rounded-lg text-black bg-white placeholder-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getRecipe();
              }
            }}
          />

          <button
            onClick={getRecipe}
            className="bg-blue-500 text-white px-4 rounded-lg"
          >
            Search
          </button>

          <button
            onClick={randomRecipe}
            className="bg-green-500 text-white px-4 rounded-lg"
          >
            Random
          </button>
        </div>
        {loading && (
          <p className="text-center text-lg font-semibold">Loading...</p>
        )}
        {!loading && recipes.length === 0 && (
          <p className="text-center text-gray-500">
            No recipes found. Try something else!
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((item) => (
            <RecipeCard key={item.idMeal} recipe={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
