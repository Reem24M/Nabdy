import React from "react";

const PatientSummary = ({ patient }) => {
  return (
    <div className="bg-[#11294B] rounded-lg sm:rounded-xl shadow-lg mb-4 sm:mb-6 p-3 sm:p-6">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 lg:pr-6 mb-6 lg:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-start mb-4 sm:mb-6 gap-3 sm:gap-4">
            <div className="flex items-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-user-circle text-2xl sm:text-3xl text-blue-400"></i>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                {patient.name}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                <span className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2 py-0.5 sm:px-2.5 rounded truncate">
                  National ID: {patient.nationalId}
                </span>
                <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2 py-0.5 sm:px-2.5 rounded truncate">
                  Hospital No: {patient.hospitalNumber}
                </span>
                <span className="bg-emerald-900/50 text-emerald-300 text-xs font-medium px-2 py-0.5 sm:px-2.5 rounded">
                  {patient.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-[#1D3454] p-2 sm:p-3 rounded-lg border border-gray-700">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                Age / Gender
              </div>
              <div className="font-medium text-white text-sm sm:text-base">
                {patient.age} • {patient.gender}
              </div>
            </div>
            <div className="bg-[#1D3454] p-2 sm:p-3 rounded-lg border border-gray-700">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                Blood Type
              </div>
              <div className="font-medium text-white text-sm sm:text-base">
                {patient.bloodType}
              </div>
            </div>
            <div className="bg-[#1D3454] p-2 sm:p-3 rounded-lg border border-gray-700">
              <div className="text-xs sm:text-sm text-gray-400 mb-1 truncate">
                Contact
              </div>
              <div className="font-medium text-white text-xs sm:text-base truncate">
                {patient.contactNumber}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div className="bg-[#1D3454] p-2 sm:p-3 rounded-lg border border-gray-700">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                Last Visit
              </div>
              <div className="font-medium text-white text-sm">
                {new Date(patient.lastVisit).toLocaleDateString()}
              </div>
            </div>
            <div className="bg-[#1D3454] p-2 sm:p-3 rounded-lg border border-gray-700">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                Next Appointment
              </div>
              <div className="font-medium text-white text-sm">
                {new Date(patient.nextAppointment).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 lg:pl-6 lg:border-l lg:border-gray-700 mt-6 lg:mt-0 pt-4 sm:pt-6 lg:pt-0 lg:border-t-0 border-t border-gray-700">
          <div className="mb-4 sm:mb-6">
            <div className="font-semibold text-gray-300 mb-2 text-sm">
              Chronic Conditions
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {patient.chronicConditions.map((condition, index) => (
                <span
                  key={index}
                  className="bg-indigo-900/30 text-indigo-300 text-xs font-medium px-2 sm:px-3 py-1 rounded-full border border-indigo-700/30"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold text-gray-300 mb-2 text-sm">
              Emergency Contact
            </div>
            <div className="bg-blue-900/20 p-2 sm:p-4 rounded-lg border border-blue-700/30">
              <div className="font-medium text-white text-sm">
                {patient.emergencyContact.name}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mb-2">
                {patient.emergencyContact.relationship}
              </div>
              <div className="text-blue-300 text-sm">
                <i className="fas fa-phone mr-2 text-blue-400"></i>
                <span className="break-all">
                  {patient.emergencyContact.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSummary;