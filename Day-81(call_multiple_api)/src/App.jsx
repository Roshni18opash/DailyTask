import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";
import { setResults, setLoading, setError } from "./redux/features/searchSlice";

const App = () => {
  const dispatch = useDispatch();
  const { query, activeTab, loading, error, results } = useSelector((state) => state.search);

  useEffect(() => {
    const performSearch = async () => {
      if (!query) return;

      dispatch(setLoading());
      try {
        let data;
        if (activeTab === "photos") {
          data = await fetchPhotos(query);
          dispatch(setResults(data.results || []));
        } else if (activeTab === "videos") {
          data = await fetchVideos(query);
          dispatch(setResults(data.videos || []));
        } else {
          // Handle other tabs if any
          dispatch(setResults([]));
        }
      } catch (err) {
        dispatch(setError("Failed to fetch results. Please try again."));
      }
    };

    performSearch();
  }, [query, activeTab, dispatch]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header / Hero */}
      <div className="pt-20 pb-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          Media Explorer
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto px-4">
          Discover high-quality photos, videos, and media from around the web in one seamless interface.
        </p>
        <SearchBar />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Tabs />
        
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-10 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 mx-4">
            {error}
          </div>
        )}

        {!loading && !error && (
          <ResultGrid results={results} />
        )}
      </div>
    </div>
  );
};

export default App;
