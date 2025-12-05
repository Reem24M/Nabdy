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
  <div
    className="
      flex items-center gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-3 lg:p-5 rounded-lg 
      bg-[#11294B] shadow-md w-full border border-white/10"
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-[#169CF6]/10 flex items-center justify-center flex-shrink-0">
      <MyIcon
        name={icon}
        size={window.innerWidth < 640 ? 16 : window.innerWidth < 1024 ? 20 : 30}
      />
    </div>

    <div className="min-w-0 flex-1">
      <div className="text-xs sm:text-sm text-white/70">{title}</div>
      <div className="text-lg sm:text-xl font-semibold text-white break-words">
        {value}
      </div>
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
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* DOCTOR HEADER */}
        <DoctorHeader doctor={doctorData} />

        {/* TOP STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-8">
          <StatsCardWithIcon
            title="Patients Today"
            value={doctorData.patientsToday}
            icon="users"
          />
          <StatsCardWithIcon
            title="Appointments"
            value={doctorData.appointmentsToday}
            icon="calendar"
          />
          <StatsCardWithIcon title="Pending Reports" value={5} icon="report" />
          <StatsCardWithIcon title="Avg. Consult" value={"2h"} icon="clock" />
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-4 sm:mt-6 lg:mt-8 space-y-4 sm:space-y-5 lg:space-y-6">
          {/* SEARCH BOX */}
          <div className="bg-[#11294B] border border-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 shadow-md">
            <PatientSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handlePatientSearch}
              error={searchError}
              themeColor="#169CF6"
            />
          </div>

          {/* PATIENT TABLE */}
          <div className="bg-[#11294B] border border-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                All Patients
              </h3>
              <span className="text-xs sm:text-sm text-white/70">
                Total: {patientRecords?.length || 0} patients
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-white/5">
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      Name
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      National ID
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      Age
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      Gender
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      Hospital No
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      Status
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-white/80">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {patientRecords?.map((p) => (
                    <tr
                      key={p.nationalId}
                      onClick={() => navigate(`/patient/${p.nationalId}`)}
                      className="cursor-pointer hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm break-words">
                        {p.name}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-white/90 text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {p.nationalId.slice(-6)}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-white/90 text-xs sm:text-sm">
                        {p.age}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-white/90 text-xs sm:text-sm">
                        {p.gender.charAt(0)}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-white/90 text-xs sm:text-sm whitespace-nowrap">
                        {p.hospitalNumber}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <span
                          className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-medium ${
                            p.status === "Stable"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : p.status === "Critical"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-[#169CF6]/20 text-[#169CF6]"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/patient/${p.nationalId}`);
                          }}
                          className="px-2 sm:px-4 py-1 sm:py-2 bg-[#169CF6] hover:bg-[#1285D6] text-white rounded-lg text-xs sm:text-sm transition-colors duration-200"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {patientRecords?.map((p) => (
                <div
                  key={p.nationalId}
                  onClick={() => navigate(`/patient/${p.nationalId}`)}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white break-words mb-1">
                        {p.name}
                      </h4>
                      <p className="text-xs text-white/60">
                        ID: {p.nationalId.slice(-6)}
                      </p>
                    </div>
                    <span
                      className={`inline-block px-2 py-0.5 rounded-lg text-xs font-medium flex-shrink-0 ml-2 ${
                        p.status === "Stable"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : p.status === "Critical"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-[#169CF6]/20 text-[#169CF6]"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div>
                      <p className="text-xs text-white/60">Age</p>
                      <p className="text-sm font-semibold text-white">
                        {p.age}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Gender</p>
                      <p className="text-sm font-semibold text-white">
                        {p.gender.charAt(0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Hospital</p>
                      <p className="text-sm font-semibold text-white">
                        {p.hospitalNumber}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/patient/${p.nationalId}`);
                    }}
                    className="w-full px-3 py-2 bg-[#169CF6] hover:bg-[#1285D6] text-white rounded-lg text-xs font-medium transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}