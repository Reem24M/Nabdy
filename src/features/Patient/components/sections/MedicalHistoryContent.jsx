import React from "react";
import { History } from "lucide-react";
import StatusBadge from "./StatusBadge";

const MedicalHistoryContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <History className="w-5 h-5" style={{ color: '#169CF6' }} />
        Medical Timeline
      </h3>

      <div className="space-y-4">
        {patient.timeline.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 !rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)' }}>
                <div className="w-3 h-3" style={{ color: '#169CF6' }} />
              </div>
              <div className="flex-1 w-0.5 my-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
            </div>

            <div className="flex-1 pb-4">
              <div className="p-3 !rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <span className="text-white/60 text-xs">{item.date}</span>
                </div>
                <p className="text-white/80 text-sm mb-2">{item.description}</p>
                <StatusBadge status={item.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistoryContent;