import React from "react";
import { Icon } from "lucide-react";
import { patientRecords } from "../data/patientRecords";
import { Users, Calendar, UserCircle } from "lucide-react";
export default function LabDoctorProfile() {
  const doctorData = {
    name: "Dr. Anas Sharbash",
    specialization: "Lab Technician",
    hospital: "Banha Medical Center",
    patientsToday: 6,
    appointmentsToday: 11,
    // profileImage: "https://i.pravatar.cc/150?img=12",
    email: "anas.sharbash@example.com",
    phone: "+20 101 234 5678",
  };

  return (
    <div className="min-h-screen bg-[#0A1A3A] text-white antialiased p-2 sm:p-4 lg:p-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#169CF6]/20 flex items-center justify-center flex-shrink-0">
            <UserCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#169CF6]" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#169CF6]">
              {doctorData.name}
            </h1>
            <p className="text-[#169CF6]/70 mt-1 text-xs sm:text-sm">
              {doctorData.specialization} - {doctorData.hospital}
            </p>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
              <div className="px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#0F234A] border border-[#169CF6]/30 text-xs">
                <span className="text-white/60 inline sm:inline">
                  Patients:{" "}
                </span>
                <span className="font-semibold text-[#169CF6]">
                  {doctorData.patientsToday}
                </span>
              </div>
              <div className="px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#0F234A] border border-[#169CF6]/30 text-xs">
                <span className="text-white/60 inline sm:inline">Appts: </span>
                <span className="font-semibold text-[#169CF6]">
                  {doctorData.appointmentsToday}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Recent Patients */}
            <div className="bg-[#0F234A] rounded-xl sm:rounded-3xl p-3 sm:p-6 shadow-md border border-[#169CF6]/20">
              <h3 className="text-sm sm:text-lg font-semibold text-[#169CF6] mb-3 sm:mb-4">
                Recent Patients
              </h3>

              {/* Desktop Table */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="min-w-full text-left text-xs sm:text-sm">
                  <thead className="text-[#169CF6]/80">
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(22, 156, 246, 0.2)",
                      }}
                    >
                      <th className="py-2 px-2 sm:px-3 font-medium">Name</th>
                      <th className="py-2 px-2 sm:px-3 font-medium">
                        National ID
                      </th>
                      <th className="py-2 px-2 sm:px-3 font-medium">Age</th>
                      <th className="py-2 px-2 sm:px-3 font-medium">Gender</th>
                      <th className="py-2 px-2 sm:px-3 font-medium">
                        Hospital No
                      </th>
                      <th className="py-2 px-2 sm:px-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#169CF6]/20">
                    {patientRecords.slice(0, 5).map((p) => (
                      <tr
                        key={p.nationalId}
                        className="cursor-pointer hover:bg-[#169CF6]/10 transition-colors"
                      >
                        <td className="py-2 px-2 sm:px-3">{p.name}</td>
                        <td className="py-2 px-2 sm:px-3 truncate">
                          {p.nationalId}
                        </td>
                        <td className="py-2 px-2 sm:px-3">{p.age}</td>
                        <td className="py-2 px-2 sm:px-3">{p.gender}</td>
                        <td className="py-2 px-2 sm:px-3">
                          {p.hospitalNumber}
                        </td>
                        <td className="py-2 px-2 sm:px-3">
                          <span className="inline-block px-2 py-0.5 rounded-full bg-[#169CF6]/20 text-[#169CF6] text-xs">
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-2">
                {patientRecords.slice(0, 5).map((p) => (
                  <div
                    key={p.nationalId}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-[#169CF6]/10 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xs font-semibold text-white truncate">
                        {p.name}
                      </h4>
                      <span className="inline-block px-1.5 py-0.5 rounded text-xs bg-[#169CF6]/20 text-[#169CF6] flex-shrink-0 ml-2">
                        {p.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
                      <div>
                        ID:{" "}
                        <span className="text-white font-medium text-xs">
                          {p.nationalId.slice(0, 8)}...
                        </span>
                      </div>
                      <div>
                        Age:{" "}
                        <span className="text-white font-medium">{p.age}</span>
                      </div>
                      <div>
                        Gender:{" "}
                        <span className="text-white font-medium">
                          {p.gender}
                        </span>
                      </div>
                      <div>
                        Hosp:{" "}
                        <span className="text-white font-medium">
                          {p.hospitalNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3 sm:space-y-6">
            {/* Contact Card */}
            <div className="rounded-xl sm:rounded-3xl p-4 sm:p-6 bg-[#0F234A] border border-[#169CF6]/40 shadow-md">
              <h4 className="text-sm sm:text-lg font-semibold text-[#169CF6] mb-2 sm:mb-4">
                Contact Info
              </h4>
              <p className="text-xs sm:text-sm text-white/80 truncate">
                Email:{" "}
                <span className="text-[#169CF6] block truncate text-xs">
                  {doctorData.email}
                </span>
              </p>
              <p className="text-xs sm:text-sm text-white/80 truncate mt-1">
                Phone:{" "}
                <span className="text-[#169CF6]">{doctorData.phone}</span>
              </p>
            </div>

            {/* Stats Cards */}
            <div className="space-y-2 sm:space-y-4">
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-2xl bg-[#0F234A] border border-[#169CF6]/20 text-[#169CF6] flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#169CF6]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-7 sm:h-7 text-[#169CF6]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-white/60">
                    Total Patients
                  </div>
                  <div className="text-lg sm:text-xl font-semibold">
                    {patientRecords.length}
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-lg sm:rounded-2xl bg-[#0F234A] border border-[#169CF6]/20 text-[#169CF6] flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#169CF6]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-7 sm:h-7 text-[#169CF6]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-white/60">
                    Appointments Today
                  </div>
                  <div className="text-lg sm:text-xl font-semibold">
                    {doctorData.appointmentsToday}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}