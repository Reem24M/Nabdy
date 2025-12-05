import React from "react";

const StatsCard = ({ icon: Icon, value, label, color = "#169CF6" }) => {
  // تأكد أن Icon هو component
  if (!Icon || typeof Icon === "string") {
    console.error("Icon must be a React component");
    return null;
  }

  return (
    <div className="p-3 sm:p-4 rounded-lg transition-all duration-300 hover:scale-105 bg-[#11294B]">
      <div className="flex items-center gap-1.5 min-w-0">
        <div className="flex-1 min-w-0">
          <p className="text-white/60 text-xs truncate">{label}</p>
          <p className="text-base sm:text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {value}
          </p>
        </div>
        <div
          className="p-2 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;