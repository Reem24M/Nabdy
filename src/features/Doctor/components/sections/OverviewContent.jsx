import React from "react";
import { Activity, Calendar, AlertCircle } from "lucide-react";
import StatusBadge from "../StatusBadge";

const OverviewContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {/* --- Health Overview --- */}
      <div className="p-2 sm:p-3 lg:p-4 rounded-lg bg-[#11294B]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2 sm:mb-3">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white flex items-center gap-2">
            <Activity
              className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400"
              aria-hidden
            />
            Health Overview
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {patient.overviewMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/6 transition-colors"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[rgba(22,156,246,0.2)] flex items-center justify-center">
                  <div
                    className="w-3 sm:w-4 h-3 sm:h-4 text-sky-400"
                    aria-hidden
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs sm:text-sm break-words">
                    {metric.label}
                  </p>

                  <div className="flex items-center justify-between mt-1 gap-2">
                    <p className="text-white font-bold text-xs sm:text-sm break-words">
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

      {/* --- Main Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
        {/* --- Appointments --- */}
        <div className="p-2 sm:p-3 lg:p-4 rounded-lg bg-[#11294B]">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
            <Calendar
              className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400"
              aria-hidden
            />
            Upcoming Appointments
          </h3>

          <div className="space-y-2">
            {patient.appointments.slice(0, 2).map((appointment) => (
              <div
                key={appointment.id}
                className="p-2 sm:p-3 rounded-lg bg-white/5"
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-white font-medium text-xs sm:text-sm break-words">
                    {appointment.doctor}
                  </span>
                  <span className="text-white/60 text-xs sm:text-sm whitespace-nowrap">
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

        {/* --- Conditions --- */}
        <div className="p-2 sm:p-3 lg:p-4 rounded-lg bg-[#11294B]">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
            <AlertCircle
              className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400"
              aria-hidden
            />
            Chronic Conditions
          </h3>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {patient.conditions.length === 0 && (
              <p className="text-white/70 text-xs">
                No chronic conditions listed.
              </p>
            )}

            {patient.conditions.map((condition, index) => (
              <span
                key={index}
                className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-[rgba(22,156,246,0.18)] text-sky-400"
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