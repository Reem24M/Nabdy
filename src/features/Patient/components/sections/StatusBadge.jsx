import React from "react";

const StatusBadge = ({ status }) => {
  const config = {
    normal: { color: '#10B981', text: 'Stable' },
    critical: { color: '#EF4444', text: 'Critical' },
    recovering: { color: '#F59E0B', text: 'Recovering' }
  }[status] || { color: '#6B7280', text: 'Unknown' };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 !rounded-full text-xs font-medium"
          style={{ backgroundColor: `${config.color}20`, color: config.color }}>
      <div className="w-1.5 h-1.5 !rounded-full" style={{ backgroundColor: config.color }} />
      {config.text}
    </span>
  );
};

export default StatusBadge;