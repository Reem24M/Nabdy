import React from "react";
import PatientTabs from "../components/PatientTabs";

const PatientDetail = ({ selectedPatient }) => {
  if (!selectedPatient) return <p className="text-white">No patient selected.</p>;

  return (
    <div className="p-4 sm:p-6" style={{ backgroundColor: '#0A1A3A', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto">
        {/* Patient Summary */}
        <div className="p-5 !rounded-lg mb-4" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="text-xl font-bold text-white mb-2">{selectedPatient.name}</h2>
          <p className="text-white/60 text-sm">ID: {selectedPatient.nationalId}</p>
          <p className="text-white/60 text-sm">Status: {selectedPatient.status}</p>
        </div>

        {/* Patient Tabs */}
        <PatientTabs patient={selectedPatient} />
      </div>
    </div>
  );
};

export default PatientDetail;
