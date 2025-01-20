"use client";

import { useState } from "react";
import { motion } from "motion/react";

const tabs = [
  { id: "world", label: "world" },
  { id: "n.y", label: "N.Y" },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "science" },
];

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="border border-zinc-300/20 p-4 bg-gray-900 shadow-xl rounded-full">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            className={`${activeTab === tab.id ? "" : "hover:opacity-50"} relative  rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="blue-pill"
                className="bg-blue-200   absolute inset-0 "
                style={{
                  borderRadius: 9999,
                }}
                transition={{
                  type: "spring",
                  duration: 0.6,
                }}
              />
            )}
            <span className="relative z-10 mix-blend-exclusion">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTabs;
