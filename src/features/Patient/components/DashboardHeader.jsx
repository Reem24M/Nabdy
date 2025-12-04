import React from 'react';

const DashboardHeader = ({ patient }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Welcome back, {patient.name}!
          </h2>
          <p className="text-gray-400 mt-1">
            Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;