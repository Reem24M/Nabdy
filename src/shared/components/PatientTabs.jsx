import React from "react";

export default function PatientTabs({ tabs = [], activeTab = 0, setActiveTab = () => {} }) {
  return (
    <div className="bg-[#061923]/50 rounded-3xl p-4">
      <div className="flex gap-2 border-b border-slate-700 pb-3">
        {tabs.map((t, i) => (
          <button
            key={t.key || t.label}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-full text-sm ${activeTab === i ? "bg-gradient-to-r from-sky-400 to-sky-600 text-black" : "text-slate-300"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab] ? tabs[activeTab].content : <div className="text-slate-400">Select a tab</div>}
      </div>
    </div>
  );
}
