import React, { useState } from "react";
import OverviewContent from "./OverviewContent";
import MedicalHistoryContent from "./MedicalHistoryContent";
import LabResultsContent from "./LabResultsContent";
import PrescriptionsContent from "./PrescriptionsContent";
import AppointmentsContent from "./AppointmentsContent";
import NotesContent from "./NotesContent";

const PatientTabs = ({ patient }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: "Overview", content: <OverviewContent patient={patient} /> },
        { label: "Medical History", content: <MedicalHistoryContent patient={patient} /> },
        { label: "Lab Results", content: <LabResultsContent patient={patient} /> },
        { label: "Prescriptions", content: <PrescriptionsContent patient={patient} /> },
        { label: "Appointments", content: <AppointmentsContent patient={patient} /> },
        { label: "Notes", content: <NotesContent patient={patient} /> }
    ];

    return (
        <div className=" !rounded-lg" style={{ backgroundColor: '#11294B' }}>
            <div className="flex flex-wrap gap-2 mb-4 border-b ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={` !rounded-lg font-medium text-sm transition-all duration-300 ${activeTab === index ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        style={{ backgroundColor: activeTab === index ? '#169CF6' : 'transparent' }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{tabs[activeTab].content}</div>
        </div>
    );
};

export default PatientTabs;
