import React from "react";

const StatsCard = ({ icon: Icon, value, label, color = "#169CF6" }) => {
  // تأكد أن Icon هو component
  if (!Icon || typeof Icon === 'string') {
    console.error('Icon must be a React component');
    return null;
  }
  
  return (
    <div className="p-4 !rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className="p-2 !rounded-lg" style={{ backgroundColor: `${color}20` }}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;