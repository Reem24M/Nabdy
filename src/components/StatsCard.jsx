import React from "react";

// Simple icons to avoid external dependencies
const icons = {
  users: (
    <svg
      className="w-6 h-6 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path
        d="M16 14c2.21 0 4 1.79 4 4v2H4v-2c0-2.21 1.79-4 4-4m8-10a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  calendar: (
    <svg
      className="w-6 h-6 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
    </svg>
  ),
  report: (
    <svg
      className="w-6 h-6 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M9 12h6M9 16h4M5 3h10l4 4v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
    </svg>
  ),
  clock: (
    <svg
      className="w-6 h-6 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function StatsCard({ title, value, icon }) {
  return (
    <div className="
      bg-gradient-to-br from-[#07182a] to-[#0a2c44]
      rounded-3xl p-5
      border border-white/10
      shadow-[0_0_20px_rgba(0,123,255,0.15)]
      flex items-center justify-between
    ">
      <div>
        <p className="text-sm text-slate-300">{title}</p>
        <h2 className="text-2xl font-bold text-white mt-1">{value}</h2>
      </div>

      <div
        className="
          w-12 h-12 rounded-2xl
          bg-[#0d3757] 
          border border-white/10
          flex items-center justify-center
          shadow-inner
        "
      >
        {icons[icon]}
      </div>
    </div>
  );
}
