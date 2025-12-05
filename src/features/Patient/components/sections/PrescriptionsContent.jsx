import React from "react";
import { Pill } from "lucide-react";
import StatusBadge from "./StatusBadge";

const PrescriptionsContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div
      className="p-3 sm:p-5 rounded-lg sm:rounded-xl"
      style={{
        backgroundColor: "#11294B",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <Pill className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#169CF6" }} />
        Current Prescriptions
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {patient.prescriptions.map((prescription) => (
          <div
            key={prescription.id}
            className="p-2 sm:p-3 rounded-lg"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
              <h4 className="text-white font-medium text-sm sm:text-base truncate">
                {prescription.medication}
              </h4>
              <span className="text-white/60 text-xs sm:text-sm whitespace-nowrap">
                Until: {new Date(prescription.endDate).toLocaleDateString()}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-3">
              <span
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(22, 156, 246, 0.2)",
                  color: "#169CF6",
                }}
              >
                {prescription.dosage}
              </span>
              <span className="text-white/80 text-xs sm:text-sm">
                {prescription.frequency}
              </span>
              <div className="ml-auto flex-shrink-0">
                <StatusBadge status={prescription.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionsContent;