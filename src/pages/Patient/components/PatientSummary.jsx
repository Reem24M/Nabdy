import React from 'react';

const PatientSummary = ({ patient }) => {
  return (
    <div className="bg-[#11294B] rounded-xl shadow-lg mb-6 p-6">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 lg:pr-6 mb-6 lg:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-center mb-6">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 ">
                <i className="fas fa-user-circle text-3xl text-blue-400"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{patient.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded ">
                    National ID: {patient.nationalId}
                  </span>
                  <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded ">
                    Hospital No: {patient.hospitalNumber}
                  </span>
                  <span className="bg-emerald-900/50 text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded ">
                    {patient.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#1D3454] p-3 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400 mb-1">Age / Gender</div>
              <div className="font-medium text-white">{patient.age} • {patient.gender}</div>
            </div>
            <div className="bg-[#1D3454] p-3 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400 mb-1">Blood Type</div>
              <div className="font-medium text-white">{patient.bloodType}</div>
            </div>
            <div className="bg-[#1D3454] p-3 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400 mb-1">Contact</div>
              <div className="font-medium text-white">{patient.contactNumber}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1D3454] p-3 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400 mb-1">Last Visit</div>
              <div className="font-medium text-white">
                {new Date(patient.lastVisit).toLocaleDateString()}
              </div>
            </div>
            <div className="bg-[#1D3454] p-3 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400 mb-1">Next Appointment</div>
              <div className="font-medium text-white">
                {new Date(patient.nextAppointment).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 lg:pl-6 lg:border-l lg:border-gray-700">
          <div className="mb-6">
            <div className="font-semibold text-gray-300 mb-2">Chronic Conditions</div>
            <div className="flex flex-wrap gap-2">
              {patient.chronicConditions.map((condition, index) => (
                <span 
                  key={index} 
                  className="bg-indigo-900/30 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full border border-indigo-700/30"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold text-gray-300 mb-2">Emergency Contact</div>
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
              <div className="font-medium text-white">{patient.emergencyContact.name}</div>
              <div className="text-sm text-gray-400 mb-2">{patient.emergencyContact.relationship}</div>
              <div className="text-blue-300">
                <i className="fas fa-phone mr-2 text-blue-400"></i>
                {patient.emergencyContact.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSummary;