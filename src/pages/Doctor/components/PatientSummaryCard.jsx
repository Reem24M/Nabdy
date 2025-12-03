import React from "react";
import { User } from "lucide-react";

const PatientSummaryCard = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 !rounded-lg flex items-center justify-center"
                 style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)' }}>
              <User className="w-7 h-7" style={{ color: '#169CF6' }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{patient.name}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 !rounded-full text-xs font-medium"
                      style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)', color: '#169CF6' }}>
                  ID: {patient.nationalId}
                </span>
                <span className="px-2.5 py-1 !rounded-full text-xs font-medium"
                      style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#10B981' }}>
                  {patient.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <p className="text-white/60 text-xs mb-1">Age / Gender</p>
              <p className="text-white text-sm">{patient.age} • {patient.gender}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Blood Type</p>
              <p className="text-white text-sm">{patient.bloodType}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Last Visit</p>
              <p className="text-white text-sm">{new Date(patient.lastVisit).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Next Appointment</p>
              <p className="text-white text-sm">{new Date(patient.nextAppointment).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 lg:border-l lg:border-white/10 lg:pl-5">
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Emergency Contact</h4>
              <div className="space-y-1">
                <p className="text-white text-sm">{patient.emergencyContact.name}</p>
                <p className="text-white/60 text-xs">{patient.emergencyContact.relation}</p>
                <p className="text-white/80 text-sm">{patient.emergencyContact.phone}</p>
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