import React from "react";
import { History } from "lucide-react";
import StatusBadge from "../StatusBadge";

const MedicalHistoryContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-3 sm:p-5 rounded-lg bg-[#11294B]">
      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <History className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" aria-hidden />
        Medical Timeline
      </h3>

      <div className="space-y-2 sm:space-y-4">
        {patient.timeline.map((item) => (
          <div key={item.id} className="flex gap-2 sm:gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[rgba(22,156,246,0.18)]">
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 text-sky-400"
                  aria-hidden
                />
              </div>
              <div className="flex-1 w-0.5 my-1 bg-white/10" />
            </div>

            <div className="flex-1 pb-2 sm:pb-4 min-w-0">
              <div className="p-2 sm:p-3 rounded-lg bg-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1 sm:mb-2">
                  <h4 className="text-white font-medium text-sm sm:text-base break-words">
                    {item.title}
                  </h4>
                  <span className="text-white/60 text-xs sm:text-xs whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mb-2">
                  {item.description}
                </p>
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