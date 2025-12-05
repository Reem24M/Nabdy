import React, { useState } from "react";
import Tabs from "../components/Tabs";
import { PatientDashboardTabs } from "../components/patientTabs";

import DashboardHeader from "../components/DashboardHeader";
import PatientSummary from "../components/PatientSummary";
import OverviewContent from "../components/sections/OverviewContent";
import MedicalHistoryContent from "../components/sections/MedicalHistoryContent";
import LabResultsContent from "../components/sections/LabResultsContent";
import PrescriptionsContent from "../components/sections/PrescriptionsContent";
import AppointmentsContent from "../components/sections/AppointmentsContent";
import { patientRecords } from "../../../data/patientData";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const patient = patientRecords[0];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  // Configure tabs with content
  const tabsWithContent = PatientDashboardTabs.map((tab, index) => ({
    ...tab,
    content: (() => {
      switch (index) {
        case 0:
          return <OverviewContent patient={patient} />;
        case 1:
          return <MedicalHistoryContent patient={patient} />;
        case 2:
          return <LabResultsContent patient={patient} />;
        case 3:
          return <PrescriptionsContent patient={patient} />;
        case 4:
          return <AppointmentsContent patient={patient} />;
        default:
          return <OverviewContent patient={patient} />;
      }
    })(),
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <DashboardHeader patient={patient} />
        <PatientSummary patient={patient} />

        <div className="mt-4 sm:mt-6">
          <Tabs
            tabs={tabsWithContent}
            defaultActiveTab={activeTab}
            onTabChange={handleTabChange}
            variant="underline"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;