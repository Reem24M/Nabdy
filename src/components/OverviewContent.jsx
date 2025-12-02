import React from "react";

export default function OverviewContent({ patient }) {
  const upcoming = (patient.appointments || []).slice(0,2);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 p-4 rounded-2xl bg-[#031617]/40">
        <h4 className="font-semibold mb-3">Health Overview</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {patient.overviewMetrics.map(m=>(
            <div key={m.id} className="p-3 rounded-xl bg-[#02181b]">
              <div className="text-sm text-slate-400">{m.label}</div>
              <div className="mt-1 font-semibold">{m.value}</div>
              <div className="text-xs text-slate-400 mt-1">{m.statusLabel}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-[#031617]/40">
        <h4 className="font-semibold mb-3">Upcoming</h4>
        {upcoming.length>0 ? upcoming.map(a=>(
          <div key={a.id} className="mb-3">
            <div className="font-medium">{new Date(a.date).toLocaleDateString()} • {a.time}</div>
            <div className="text-sm text-slate-400">{a.doctor} — {a.type}</div>
          </div>
        )) : <div className="text-slate-400">No upcoming appointments</div>}
      </div>
    </div>
  );
}
