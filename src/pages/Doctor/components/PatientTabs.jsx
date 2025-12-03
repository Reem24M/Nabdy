import React, { useState } from "react";
import OverviewContent from "../../Patient/components/sections/OverviewContent";
import MedicalHistoryContent from "../../Patient/components/sections/MedicalHistoryContent";
import LabResultsContent from "../../Patient/components/sections/LabResultsContent";
import PrescriptionsContent from "../../Patient/components/sections/PrescriptionsContent";
import AppointmentsContent from "../../Patient/components/sections/AppointmentsContent";
import NotesContent from "../../Patient/components/sections/NotesContent";

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
        <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex flex-wrap gap-2 mb-4 border-b border-white/10 pb-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 !rounded-lg font-medium text-sm transition-all duration-300 ${activeTab === index ? 'text-white' : 'text-white/60 hover:text-white'}`}
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
