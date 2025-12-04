import React, { useEffect, useMemo, useState } from "react";
import { Search, Clock, Calendar, Users, FileText } from "lucide-react";
import { patientRecords } from "../data/patientRecords";
import StatsCard from "../components/StatsCard";
import StatusBadge from "../components/StatusBadge";
import PatientSummaryCard from "../components/PatientSummaryCard";
import SearchForm from "../components/SearchForm";
import OverviewContent from "../components/sections/OverviewContent";
import MedicalHistoryContent from "../components/sections/MedicalHistoryContent";
import LabResultsContent from "../components/sections/LabResultsContent";
import PrescriptionsContent from "../components/sections/PrescriptionsContent";
import AppointmentsContent from "../components/sections/AppointmentsContent";
import NotesContent from "../components/sections/NotesContent";
import RecentPatientsContent from "../components/sections/RecentPatientsContent";
import SearchPatientContent from "../components/sections/SearchPatientContent";
import { doctorData } from "../data/doctorData";

const HospitalDoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mainTabIndex, setMainTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [recentPatients, setRecentPatients] = useState([]);
  const [doctorNotes, setDoctorNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    if (selectedPatient) {
      setDoctorNotes(selectedPatient.notes || []);
    } else {
      setDoctorNotes([]);
    }
  }, [selectedPatient]);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handlePatientSearch = (event) => {
    event.preventDefault();
    const normalizedQuery = searchQuery.replace(/\s/g, "");

    if (!normalizedQuery) {
      setSearchError("Please enter a national ID to search.");
      setSelectedPatient(null);
      return;
    }

    const foundPatient = patientRecords.find(
      (patient) => patient.nationalId === normalizedQuery
    );

    if (foundPatient) {
      setSelectedPatient(foundPatient);
      setSearchError("");
      setActiveTab(0);
      setRecentPatients((prev) => {
        const filtered = prev.filter(
          (patient) => patient.nationalId !== foundPatient.nationalId
        );
        return [foundPatient, ...filtered].slice(0, 5);
      });
    } else {
      setSelectedPatient(null);
      setSearchError("No patient found with that national ID.");
    }
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    const trimmedNote = noteInput.trim();

    if (!trimmedNote) {
      return;
    }

    const newNote = {
      id: `note-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      author: doctorData.name,
      content: trimmedNote
    };

    setDoctorNotes((prev) => [newNote, ...prev]);
    setNoteInput("");
  };

  const handleRecentPatientSelect = (patient) => {
    const fullPatient = patientRecords.find(
      (p) => p.nationalId === patient.nationalId
    ) || patient;

    setRecentPatients((prev) => {
      const filtered = prev.filter(
        (p) => p.nationalId !== fullPatient.nationalId
      );
      return [fullPatient, ...filtered].slice(0, 5);
    });

    setSelectedPatient(fullPatient);
    setActiveTab(0);
    setSearchQuery(fullPatient.nationalId);
    setSearchError("");
    setMainTabIndex(0);
  };

  // Patient Tabs Configuration
  const patientTabs = useMemo(() => {
    if (!selectedPatient) return [];

    return [
      { label: "Overview", content: <OverviewContent patient={selectedPatient} /> },
      { label: "Medical History", content: <MedicalHistoryContent patient={selectedPatient} /> },
      { label: "Lab Results", content: <LabResultsContent patient={selectedPatient} /> },
      { label: "Prescriptions", content: <PrescriptionsContent patient={selectedPatient} /> },
      { label: "Appointments", content: <AppointmentsContent patient={selectedPatient} /> },
      {
        label: "Notes", content: <NotesContent
          notes={doctorNotes}
          noteInput={noteInput}
          setNoteInput={setNoteInput}
          onAddNote={handleAddNote}
        />
      }
    ];
  }, [selectedPatient, doctorNotes, noteInput]);

  // Main Tabs Configuration
  const mainTabs = [
    {
      label: "Search Patient",
      content: <SearchPatientContent
        selectedPatient={selectedPatient}
        searchQuery={searchQuery}
        searchError={searchError}
        patientTabs={patientTabs}
        activeTab={activeTab}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handlePatientSearch}
        onTabChange={handleTabChange}
        onPatientSelect={handleRecentPatientSelect}
      />
    },
    {
      label: "Recent Patients",
      content: <RecentPatientsContent
        recentPatients={recentPatients}
        selectedPatient={selectedPatient}
        onPatientSelect={handleRecentPatientSelect}
      />
    }
  ];

  return (
    <div className="p-4 " style={{ backgroundColor: '#0A1A3A', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Welcome, {doctorData.name}</h1>
              <p className="text-white/60 text-sm">
                {doctorData.specialization} • {doctorData.hospital}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <StatsCard icon={Users} value={doctorData.patientsToday} label="Patients Today" color="#169CF6" />
            <StatsCard icon={Calendar} value={doctorData.appointmentsToday} label="Appointments" color="#10B981" />
            <StatsCard icon={FileText} value={doctorData.pendingReports} label="Pending Reports" color="#F59E0B" />
            <StatsCard icon={Clock} value={doctorData.avgConsultation} label="Avg. Consultation" color="#8B5CF6" />
          </div>
        </div>

        {/* Main Content */}
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Main Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10">
            {mainTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setMainTabIndex(index)}
                className={`px-4 py-2.5 !rounded-lg font-medium text-sm transition-all duration-300 ${mainTabIndex === index
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
                  }`}
                style={{
                  backgroundColor: mainTabIndex === index ? '#169CF6' : 'transparent'
                }}
              >
                {tab.label}
                {tab.label === "Recent Patients" && recentPatients.length > 0 && (
                  <span className="ml-2 px-1.5 py-0.5 !rounded-full text-xs"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                    {recentPatients.length}
                  </span>
                )}

              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="">
            {mainTabs[mainTabIndex]?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDoctorDashboard;