import React from "react";
import { Pill } from "lucide-react";
import StatusBadge from "../../../Doctor/components/StatusBadge";

const PrescriptionsContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-5 rounded-xl" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Pill className="w-5 h-5" style={{ color: '#169CF6' }} />
        Current Prescriptions
      </h3>

      <div className="space-y-3">
        {patient.prescriptions.map((prescription) => (
          <div key={prescription.id} className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h4 className="text-white font-medium">{prescription.medication}</h4>
              <span className="text-white/60 text-sm">Until: {new Date(prescription.endDate).toLocaleDateString()}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)', color: '#169CF6' }}>
                {prescription.dosage}
              </span>
              <span className="text-white/80 text-sm">{prescription.frequency}</span>
              <span className="ml-auto">
                <StatusBadge status={prescription.status} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionsContent;