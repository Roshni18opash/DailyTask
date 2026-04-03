import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(setQuery(text.trim()));
      setText("");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center gap-6 px-4">
      <form
        onSubmit={submitHandler}
        className="search-input-container flex items-center shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl px-2 py-2"
      >
        <div className="pl-4 pr-3 text-gray-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for amazing photos and videos..."
          className="flex-1 px-2 py-3 outline-none text-white placeholder-gray-500 text-lg"
        />

        <button 
          type="submit"
          className="btn-primary text-white font-bold px-10 py-3 rounded-xl transition-all duration-300 ml-2"
        >
          Search
        </button>
      </form>

      {/* Quick suggestions or stats */}
      <div className="flex gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest animate-fade-in [animation-delay:800ms]">
        <span>Trends :</span>
        <button onClick={() => dispatch(setQuery("nature"))} className="hover:text-blue-400 transition cursor-pointer">Nature</button>
        <button onClick={() => dispatch(setQuery("city"))} className="hover:text-blue-400 transition cursor-pointer">City</button>
        <button onClick={() => dispatch(setQuery("abstract"))} className="hover:text-blue-400 transition cursor-pointer">Abstract</button>
      </div>
    </div>
  );
};

export default SearchBar;
