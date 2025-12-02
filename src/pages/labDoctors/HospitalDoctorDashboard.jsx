import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientRecords } from "../../data/labDoctorData/patientRecords";

import DoctorHeader from "../../components/DoctorHeader";
import PatientSearch from "../../components/PatientSearch";

import RecentPatientCard from "../../components/RecentPatientCard";
import PatientTabs from "../../components/PatientTabs";
import LabResultsContent from "../../components/LabResultsContent";
import OverviewContent from "../../components/OverviewContent";
import NotesContent from "../../components/NotesContent";

// IMPORT ICONS ❗❗
import { Users, Calendar, FileText, Circle } from "lucide-react";


// ================= ICON COMPONENT =================
const MyIcon = ({ name, size = 28, className = "text-[#169CF6]" }) => {
  const classes = `w-[${size}px] h-[${size}px] ${className}`;

  switch (name) {
    case "users":
      return <Users className={classes} />;
    case "calendar":
      return <Calendar className={classes} />;
    case "report":
      return <FileText className={classes} />;
    default:
      return <Circle className={classes} />;
  }
};


// ================= STATS CARD =================
const StatsCardWithIcon = ({ title, value, icon }) => (
  <div className="
      flex items-center gap-4 p-4 rounded-2xl 
      bg-[#0A1A3A] shadow-md border border-[#169CF6]/20">
    <div className="w-14 h-14 rounded-xl bg-[#169CF6]/10 flex items-center justify-center">
      <MyIcon name={icon} size={30} />
    </div>

    <div>
      <div className="text-sm text-[#169CF6]/70">{title}</div>
      <div className="text-xl font-semibold text-white">{value}</div>
    </div>
  </div>
);



// ================= MAIN DASHBOARD =================
export default function HospitalDoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const navigate = useNavigate();

  const doctorData = {
    title: "Dr. Anas Sharbash",
    specialization: "Lab Technician",
    hospital: "Banha Medical Center",
    patientsToday: 6,
    appointmentsToday: 11,
  };

  const handlePatientSearch = (e) => {
    e?.preventDefault();
    const q = searchQuery.replace(/\s/g, "");

    if (!q) {
      setSearchError("Please enter a national ID.");
      return;
    }

    const patient = patientRecords.find((p) => p.nationalId === q);

    if (patient) {
      navigate(`/patient/${patient.nationalId}`);
      setSearchError("");
    } else {
      setSearchError("No patient found with this national ID.");
    }
  };


  return (
    <div className="min-h-screen bg-[#0A1A3A] text-white antialiased">
      <div className="max-w-[1200px] mx-auto px-6 py-8">

        {/* DOCTOR HEADER */}
        <DoctorHeader doctor={doctorData} />

        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <StatsCardWithIcon title="Patients Today" value={doctorData.patientsToday} icon="users" />
          <StatsCardWithIcon title="Appointments" value={doctorData.appointmentsToday} icon="calendar" />
          <StatsCardWithIcon title="Pending Reports" value={5} icon="report" />
          <StatsCardWithIcon title="Avg. Consult" value={"2h"} icon="report" />
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">

            {/* SEARCH BOX */}
            <div className="bg-[#0A1A3A] rounded-3xl p-6 shadow-md border border-[#169CF6]/30">
              <PatientSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handlePatientSearch}
                error={searchError}
                themeColor="#169CF6"
              />
            </div>

            {/* PATIENT TABLE */}
            <div className="bg-[#0A1A3A] rounded-3xl p-4 shadow-md border border-[#169CF6]/20">
              <h3 className="text-lg font-semibold text-[#169CF6] mb-4">All Patients</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-[#169CF6]/80">
                    <tr>
                      <th className="py-2 px-3">Name</th>
                      <th>National ID</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Hospital No</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#169CF6]/20">
                    {patientRecords?.map((p) => (
                      <tr
                        key={p.nationalId}
                        onClick={() => navigate(`/patient/${p.nationalId}`)}
                        className="cursor-pointer hover:bg-[#112348]"
                      >
                        <td className="py-3 px-3">{p.name}</td>
                        <td>{p.nationalId}</td>
                        <td>{p.age}</td>
                        <td>{p.gender}</td>
                        <td>{p.hospitalNumber}</td>
                        <td>
                          <span className="inline-block px-2 py-1 rounded-full bg-[#169CF6]/20 text-[#169CF6] text-xs">
                            {p.status}
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => navigate(`/patient/${p.nationalId}`)}
                            className="text-[#169CF6] hover:underline text-sm"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* PROMO CARD */}
            <div className="relative rounded-3xl p-8 bg-[#0A1A3A] shadow-md border border-[#169CF6]/40">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-[#169CF6] flex items-center justify-center text-white font-semibold shadow">
                ✓
              </div>

              <div className="flex flex-col items-center justify-center h-full py-8">
                <i className="fas fa-heartbeat text-7xl mb-4 text-[#169CF6]"></i>

                <h3 className="text-2xl font-semibold text-[#169CF6]">Your Health, Connected</h3>
                <p className="text-[#169CF6]/70 mt-2 text-center">
                  Secure digital records accessible anytime, anywhere
                </p>

                <button className="mt-6 px-6 py-2 rounded-full bg-[#169CF6] text-black font-semibold shadow-md">
                  Get Started
                </button>
              </div>
            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/20 text-[#169CF6]">
                <h4 className="text-sm">Emergency Contact</h4>
              </div>

              <div className="p-4 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/20 text-[#169CF6]">
                <h4 className="text-sm">Chronic Conditions</h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
