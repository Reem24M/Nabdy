import React from "react";
import { Activity, Calendar, AlertCircle } from "lucide-react";
import StatusBadge from "./StatusBadge";

const OverviewContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="space-y-4">
      <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5" style={{ color: '#169CF6' }} />
            Health Overview
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {patient.overviewMetrics.map((metric) => (
            <div key={metric.id} className="p-3 !rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)' }}>
                  <div className="w-4 h-4" style={{ color: '#169CF6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-white/80 text-sm">{metric.label}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold">{metric.value}</p>
                    <StatusBadge status={metric.status} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" style={{ color: '#169CF6' }} />
            Upcoming Appointments
          </h3>

          {patient.appointments.slice(0, 2).map((appointment) => (
            <div key={appointment.id} className="p-3 !rounded-lg mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{appointment.doctor}</span>
                <span className="text-white/60 text-sm">{appointment.time}</span>
              </div>
              <p className="text-white/80 text-sm mb-1">{appointment.type}</p>
              <p className="text-white/60 text-xs">{appointment.location}</p>
            </div>
          ))}
        </div>

        <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" style={{ color: '#169CF6' }} />
            Chronic Conditions
          </h3>

          <div className="flex flex-wrap gap-2">
            {patient.conditions.map((condition, index) => (
              <span key={index} className="px-3 py-1.5 !rounded-full text-xs font-medium"
                style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)', color: '#169CF6' }}>
                {condition}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;