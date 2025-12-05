import React from "react";
import { Calendar } from "lucide-react";
import StatusBadge from "../StatusBadge"; // مسار زي الكود الأول

const AppointmentsContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-3 sm:p-5 rounded-lg sm:rounded-xl bg-[#11294B]">
      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" aria-hidden />
        All Appointments
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {patient.appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-2 sm:p-3 rounded-lg bg-white/5"
          >
            {/* Header: Doctor + Date + Time */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
              <h4 className="text-white font-medium text-sm sm:text-base break-words">
                {appointment.doctor}
              </h4>
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                <span className="text-white/60 text-xs sm:text-sm whitespace-nowrap">
                  {appointment.date}
                </span>
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-[rgba(22,156,246,0.18)] text-sky-400">
                  {appointment.time}
                </span>
              </div>
            </div>

            {/* Details: Type + Location + Status */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-3">
              <span className="text-white/80 text-xs sm:text-sm break-words">
                {appointment.type}
              </span>
              <span className="text-white/60 text-xs sm:text-sm break-words">
                {appointment.location}
              </span>
              <div className="ml-auto flex-shrink-0">
                <StatusBadge status={appointment.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsContent;