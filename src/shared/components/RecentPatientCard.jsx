import React from "react";

export default function RecentPatientCard({ patient, onView, isActive }) {
  return (
    <div className={`p-4 rounded-2xl ${isActive ? "ring-2 ring-sky-500 bg-[#083445]" : "bg-[#06131a]"} shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{patient.name}</h4>
          <div className="text-xs text-slate-400">{patient.conditions.slice(0,2).join(", ")}{patient.conditions.length>2?"...":""}</div>
        </div>
        <div className="text-xs text-slate-400">{new Date(patient.lastVisit).toLocaleDateString()}</div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400">{patient.nationalId.slice(-6).padStart(patient.nationalId.length, "•")}</div>
        <button onClick={onView} className="text-sky-400 text-sm">View</button>
      </div>
    </div>
  );
}
