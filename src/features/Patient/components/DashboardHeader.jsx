import React from "react";

const DashboardHeader = ({ patient }) => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white break-words">
            Welcome back, {patient.name}!
          </h2>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;