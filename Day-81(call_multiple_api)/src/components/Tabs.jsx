import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-8 border-b border-white/5 animate-fade-in [animation-delay:200ms]">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`
            px-8 py-2.5 rounded-full capitalize text-sm font-semibold transition-all duration-300 cursor-pointer
            ${
              activeTab === tab 
                ? "tab-active" 
                : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            }
            active:scale-95
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
