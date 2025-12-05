import React from "react";
import { User } from "lucide-react";

const PatientSummaryCard = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-5 rounded-lg bg-[#11294B]">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-2/3 min-w-0">
          <div className="flex items-start gap-3 mb-4 min-w-0">
            <div
              className="w-14 h-14 !rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(22, 156, 246, 0.2)" }}
            >
              <User className="w-7 h-7" style={{ color: "#169CF6" }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 break-words">
                {patient.name}
              </h3>
              <div className="flex flex-wrap items-center gap-1">
                <span
                  className="px-2 py-0.5 !rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(22, 156, 246, 0.2)",
                    color: "#169CF6",
                  }}
                >
                  ID: {patient.nationalId.slice(-4)}
                </span>
                <span
                  className="px-2 py-0.5 !rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                    color: "#10B981",
                  }}
                >
                  {patient.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            <div className="min-w-0">
              <p className="text-white/60 text-xs mb-1 truncate">
                Age / Gender
              </p>
              <p className="text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {patient.age} • {patient.gender}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-white/60 text-xs mb-1 truncate">Blood Type</p>
              <p className="text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {patient.bloodType}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-white/60 text-xs mb-1 truncate">Last Visit</p>
              <p className="text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {new Date(patient.lastVisit).toLocaleDateString()}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-white/60 text-xs mb-1 truncate">Next Appt</p>
              <p className="text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {new Date(patient.nextAppointment).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 lg:pl-5">
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2 text-sm">
                Emergency Contact
              </h4>
              <div className="space-y-1">
                <p className="text-white text-sm">
                  {patient.emergencyContact.name}
                </p>
                <p className="text-white/60 text-xs">
                  {patient.emergencyContact.relation}
                </p>
                <p className="text-white/80 text-sm">
                  {patient.emergencyContact.phone}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Contact</h4>
              <p className="text-white/80 text-sm">{patient.contactNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSummaryCard;