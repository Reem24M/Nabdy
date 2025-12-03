import React from "react";
import { Calendar, AlertCircle, History, Pill, Activity, User } from "lucide-react";

// Status Badge
export const StatusBadge = ({ status }) => {
  const config = {
    stable: { color: "#10B981", text: "Stable" },
    critical: { color: "#EF4444", text: "Critical" },
    recovering: { color: "#F59E0B", text: "Recovering" },
  }[status] || { color: "#6B7280", text: "Unknown" };

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: `${config.color}20`, color: config.color }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.color }} />
      {config.text}
    </span>
  );
};

// Overview Card
export const OverviewCard = ({ patient }) => (
  <div
    className="p-5 rounded-lg"
    style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
  >
    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
      <Activity className="w-5 h-5" style={{ color: "#169CF6" }} />
      Health Overview
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {(patient?.overviewMetrics || []).map((metric) => (
        <div
          key={metric.id}
          className="p-3 rounded-lg"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white/80 text-sm">{metric.label}</p>
              <p className="text-white font-bold">{metric.value}</p>
            </div>
            <StatusBadge status={metric.status} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Medical History
export const MedicalHistory = ({ patient }) => (
  <div
    className="p-5 rounded-lg"
    style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
  >
    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
      <History className="w-5 h-5" style={{ color: "#169CF6" }} />
      Medical History
    </h3>

    <div className="space-y-3">
      {(patient?.timeline || []).map((item) => (
        <div
          key={item.id}
          className="p-3 rounded-lg"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex justify-between mb-1">
            <strong className="text-white">{item.title}</strong>
            <span className="text-white/60 text-xs">{item.date}</span>
          </div>
          <p className="text-white/80 text-sm">{item.description}</p>
          <StatusBadge status={item.status} />
        </div>
      ))}
    </div>
  </div>
);

// Prescriptions
export const Prescriptions = ({ patient }) => (
  <div
    className="p-5 rounded-lg"
    style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
  >
    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
      <Pill className="w-5 h-5" style={{ color: "#169CF6" }} />
      Prescriptions
    </h3>

    <div className="space-y-3">
      {(patient?.prescriptions || []).map((item) => (
        <div
          key={item.id}
          className="p-3 rounded-lg"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex justify-between mb-1">
            <span className="text-white">{item.medication}</span>
            <span className="text-white/60 text-sm">Until {item.endDate}</span>
          </div>
          <StatusBadge status={item.status} />
        </div>
      ))}
    </div>
  </div>
);

// Emergency Contact
export const EmergencyInfo = ({ patient }) => {
  const emergency = patient?.emergencyContact || {
    name: "Not Provided",
    relation: "N/A",
    phone: "N/A",
  };

  return (
    <div
      className="p-5 rounded-lg"
      style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <h4 className="text-white font-medium mb-2">Emergency Contact</h4>
      <p className="text-white">{emergency.name}</p>
      <p className="text-white/60 text-xs">{emergency.relation}</p>
      <p className="text-white/80 text-sm">{emergency.phone}</p>
    </div>
  );
};
