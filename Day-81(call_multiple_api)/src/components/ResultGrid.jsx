import React from "react";
import ResultCard from "./ResultCard";
import { useSelector } from "react-redux";

const ResultGrid = ({ results }) => {
  const { query, activeTab } = useSelector((state) => state.search);

  if (!results || results.length === 0) {
    if (!query) return null;
    return (
      <div className="text-center py-24 animate-fade-in">
        <p className="text-gray-500 text-lg">No results found for "{query}"</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 animate-fade-in [animation-delay:400ms]">
      {results.map((item, idx) => (
        <ResultCard key={item.id || idx} item={item} type={activeTab} />
      ))}
    </div>
  );
};

export default ResultGrid;
