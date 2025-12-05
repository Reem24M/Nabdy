import React from "react";
import { Calendar } from "lucide-react";
import StatusBadge from "./StatusBadge";

const AppointmentsContent = ({ patient }) => {
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
        <Calendar
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: "#169CF6" }}
        />
        All Appointments
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {patient.appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-2 sm:p-3 rounded-lg"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
              <h4 className="text-white font-medium text-sm sm:text-base truncate">
                {appointment.doctor}
              </h4>
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                <span className="text-white/60 text-xs sm:text-sm whitespace-nowrap">
                  {appointment.date}
                </span>
                <span
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 !rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(22, 156, 246, 0.2)",
                    color: "#169CF6",
                  }}
                >
                  {appointment.time}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-3">
              <span className="text-white/80 text-xs sm:text-sm truncate">
                {appointment.type}
              </span>
              <span className="text-white/60 text-xs sm:text-sm hidden sm:inline-block truncate">
                {appointment.location}
              </span>
              <div className="ml-auto flex-shrink-0">
                <StatusBadge status={appointment.status} />
              </div>
            </div>

            {/* Mobile: Show location on new line */}
            <div className="sm:hidden mt-1">
              <span className="text-white/60 text-xs block truncate">
                {appointment.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsContent;