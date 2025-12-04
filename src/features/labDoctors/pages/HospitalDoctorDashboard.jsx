import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientRecords } from "../data/patientRecords";

import DoctorHeader from "../components/DoctorHeader";
import PatientSearch from "../components/PatientSearch";

import { Users, Calendar, FileText, Clock } from "lucide-react";

// ================= ICON COMPONENT =================
const MyIcon = ({ name, size = 28, className = "text-[#169CF6]" }) => {
  const style = { width: size, height: size };

  switch (name) {
    case "users":
      return <Users style={style} className={className} />;
    case "calendar":
      return <Calendar style={style} className={className} />;
    case "report":
      return <FileText style={style} className={className} />;
    case "clock":
      return <Clock style={style} className={className} />;
    default:
      return null;
  }
};

// ================= STATS CARD =================
const StatsCardWithIcon = ({ title, value, icon }) => (
  <div className="
      flex items-center gap-4 p-5 !rounded-lg 
      bg-[#11294B] shadow-md w-full border border-white/10">
    <div className="w-14 h-14 !rounded-lg bg-[#169CF6]/10 flex items-center justify-center">
      <MyIcon name={icon} size={30} />
    </div>

    <div>
      <div className="text-sm text-white/70">{title}</div>
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
    <div className="min-h-screen bg-gradient-to-b from-[#0A1A3A] to-[#11294B] text-white antialiased">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* DOCTOR HEADER */}
        <DoctorHeader doctor={doctorData} />

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <StatsCardWithIcon title="Patients Today" value={doctorData.patientsToday} icon="users" />
          <StatsCardWithIcon title="Appointments" value={doctorData.appointmentsToday} icon="calendar" />
          <StatsCardWithIcon title="Pending Reports" value={5} icon="report" />
          <StatsCardWithIcon title="Avg. Consult" value={"2h"} icon="clock" />
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-8 space-y-6">

          {/* SEARCH BOX */}
          <div className="bg-[#11294B] border border-white/10 !rounded-lg p-6 shadow-md">
            <PatientSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handlePatientSearch}
              error={searchError}
              themeColor="#169CF6"
            />
          </div>

          {/* PATIENT TABLE */}
          <div className="bg-[#11294B] border border-white/10 !rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">All Patients</h3>
              <span className="text-sm text-white/70">
                Total: {patientRecords?.length || 0} patients
              </span>
            </div>

            <div className="overflow-x-auto !rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">Name</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">National ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">Age</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">Gender</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">Hospital No</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">Status</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-white/80">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {patientRecords?.map((p) => (
                    <tr
                      key={p.nationalId}
                      onClick={() => navigate(`/patient/${p.nationalId}`)}
                      className="cursor-pointer hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="py-3 px-4 text-white">{p.name}</td>
                      <td className="py-3 px-4 text-white/90">{p.nationalId}</td>
                      <td className="py-3 px-4 text-white/90">{p.age}</td>
                      <td className="py-3 px-4 text-white/90">{p.gender}</td>
                      <td className="py-3 px-4 text-white/90">{p.hospitalNumber}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-3 py-1 !rounded-lg text-xs font-medium ${
                          p.status === 'Stable' 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : p.status === 'Critical'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-[#169CF6]/20 text-[#169CF6]'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/patient/${p.nationalId}`);
                          }}
                          className="px-4 py-2 bg-[#169CF6] hover:bg-[#1285D6] text-white !rounded-lg text-sm transition-colors duration-200"
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

      </div>
    </div>
  );
}