import React from "react";
import { Clock, Calendar, AlertCircle, User } from "lucide-react";

const RecentPatientsContent = ({
  recentPatients,
  selectedPatient,
  onPatientSelect,
}) => {
  return (
    <div className="p-5 rounded-lg bg-[#11294B]">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-sky-400" aria-hidden />
        Recent Patients
      </h3>

      {recentPatients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {recentPatients.map((patient) => (
            <div
              key={patient.nationalId}
              className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                selectedPatient?.nationalId === patient.nationalId
                  ? "ring-2 ring-sky-400"
                  : ""
              } bg-white/5`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(22,156,246,0.18)]">
                  <User className="w-5 h-5 text-sky-400" aria-hidden />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm break-words">
                    {patient.name}
                  </h4>
                  <p className="text-white/60 text-xs">
                    ID: ••••{patient.nationalId.slice(-4)}
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 mb-3">
                <p className="text-white/60 text-xs flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-sky-400" aria-hidden />
                  Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                </p>
                <p className="text-white/60 text-xs flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3 text-sky-400" aria-hidden />
                  {patient.conditions.slice(0, 1).join(", ")}
                  {patient.conditions.length > 1 && "..."}
                </p>
              </div>

              <button
                onClick={() => onPatientSelect(patient)}
                className="w-full py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 bg-[rgba(22,156,246,0.18)] text-sky-400"
              >
                View Patient
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Clock className="w-12 h-12 mx-auto mb-3 text-gray-400" aria-hidden />
          <h5 className="text-white font-medium mb-2">No Recent Patients</h5>
          <p className="text-white/60 text-sm">
            Patients you search for will appear here for quick access.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentPatientsContent;