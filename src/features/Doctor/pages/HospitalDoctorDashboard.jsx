import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import Tabs from "../../Patient/components/Tabs";

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

  const handleTabChange = (index) => setActiveTab(index);

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

  const handleAddNote = useCallback(
    (event) => {
      event.preventDefault();
      const trimmedNote = noteInput.trim();
      if (!trimmedNote) return;

      const newNote = {
        id: `note-${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
        author: doctorData.name,
        content: trimmedNote,
      };

      setDoctorNotes((prev) => [newNote, ...prev]);
      setNoteInput("");
    },
    [noteInput]
  );

  const handleRecentPatientSelect = (patient) => {
    const fullPatient =
      patientRecords.find((p) => p.nationalId === patient.nationalId) ||
      patient;

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

  const patientTabs = useMemo(() => {
    if (!selectedPatient) return [];

    return [
      {
        label: "Overview",
        content: <OverviewContent patient={selectedPatient} />,
      },
      {
        label: "Medical History",
        content: <MedicalHistoryContent patient={selectedPatient} />,
      },
      {
        label: "Lab Results",
        content: <LabResultsContent patient={selectedPatient} />,
      },
      {
        label: "Prescriptions",
        content: <PrescriptionsContent patient={selectedPatient} />,
      },
      {
        label: "Appointments",
        content: <AppointmentsContent patient={selectedPatient} />,
      },
      {
        label: "Notes",
        content: (
          <NotesContent
            notes={doctorNotes}
            noteInput={noteInput}
            setNoteInput={setNoteInput}
            onAddNote={handleAddNote}
          />
        ),
      },
    ];
  }, [selectedPatient, doctorNotes, noteInput, handleAddNote]);

  const mainTabs = [
    {
      label: "Search Patient",
      content: (
        <SearchPatientContent
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
      ),
    },
    {
      label: "Recent Patients",
      content: (
        <RecentPatientsContent
          recentPatients={recentPatients}
          selectedPatient={selectedPatient}
          onPatientSelect={handleRecentPatientSelect}
        />
      ),
      badge: recentPatients.length > 0 ? recentPatients.length : null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1A3A] text-white px-2 sm:px-4 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-col gap-0.5 mb-2 sm:mb-3">
            <h1 className="text-sm sm:text-base lg:text-lg font-bold text-white break-words">
              Welcome, {doctorData.name}
            </h1>
            <p className="text-white/60 text-xs break-words">
              {doctorData.specialization}
            </p>
            <p className="text-white/60 text-xs break-words">
              {doctorData.hospital}
            </p>
          </div>

          {/* Stats Grid - Responsive on small screens */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 mb-4 sm:mb-6">
            <StatsCard
              icon={Users}
              value={doctorData.patientsToday}
              label="Patients"
              color="#169CF6"
            />
            <StatsCard
              icon={Calendar}
              value={doctorData.appointmentsToday}
              label="Appointments"
              color="#10B981"
            />
            <StatsCard
              icon={FileText}
              value={doctorData.pendingReports}
              label="Pending"
              color="#F59E0B"
            />
            <StatsCard
              icon={Clock}
              value={doctorData.avgConsultation}
              label="Avg Consult"
              color="#8B5CF6"
            />
          </div>
        </div>

        {/* Main Tabs Section */}
        <div className="mt-4 sm:mt-6">
          <Tabs
            tabs={mainTabs}
            defaultActiveTab={mainTabIndex}
            onTabChange={(index) => setMainTabIndex(index)}
            variant="pills"
          />
        </div>

        {/* Patient Tabs Section - Show only when patient is selected and Search tab is active */}
        {mainTabIndex === 0 && selectedPatient && patientTabs.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <Tabs
              tabs={patientTabs}
              defaultActiveTab={activeTab}
              onTabChange={handleTabChange}
              variant="pills"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalDoctorDashboard;