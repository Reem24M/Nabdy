import React from "react";
import { Activity, Calendar, AlertCircle } from "lucide-react";
import StatusBadge from "./StatusBadge";

const OverviewContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Health Overview */}
      <div
        className="p-3 sm:p-5 !rounded-lg"
        style={{
          backgroundColor: "#11294B",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white flex items-center gap-2">
            <Activity
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "#169CF6" }}
            />
            Health Overview
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
          {patient.overviewMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-2 sm:p-2.5 !rounded-lg border border-white/5"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-start gap-1.5 sm:gap-2">
                <div
                  className="p-1 sm:p-1.5 rounded-lg flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(22, 156, 246, 0.2)" }}
                >
                  <div
                    className="w-3 sm:w-4 h-3 sm:h-4"
                    style={{ color: "#169CF6" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs sm:text-sm">
                    {metric.label}
                  </p>
                  <div className="flex items-center justify-between gap-1.5 flex-wrap mt-1">
                    <p className="text-white font-bold text-xs sm:text-sm">
                      {metric.value}
                    </p>
                    <StatusBadge status={metric.status} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-2.5">
        <div
          className="p-3 sm:p-5 !rounded-lg"
          style={{
            backgroundColor: "#11294B",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
            <Calendar
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "#169CF6" }}
            />
            Upcoming Appointments
          </h3>

          <div className="space-y-1.5 sm:space-y-2">
            {patient.appointments.slice(0, 2).map((appointment) => (
              <div
                key={appointment.id}
                className="p-2 sm:p-2.5 !rounded-lg border border-white/5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-start justify-between gap-1.5 mb-1">
                  <span className="text-white font-medium text-xs sm:text-sm break-words flex-1">
                    {appointment.doctor}
                  </span>
                  <span className="text-white/60 text-xs whitespace-nowrap flex-shrink-0">
                    {appointment.time}
                  </span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mb-1 break-words">
                  {appointment.type}
                </p>
                <p className="text-white/60 text-xs break-words">
                  {appointment.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chronic Conditions */}
        <div
          className="p-3 sm:p-5 !rounded-lg"
          style={{
            backgroundColor: "#11294B",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
            <AlertCircle
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "#169CF6" }}
            />
            Chronic Conditions
          </h3>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {patient.conditions.map((condition, index) => (
              <span
                key={index}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 !rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(22, 156, 246, 0.2)",
                  color: "#169CF6",
                }}
              >
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