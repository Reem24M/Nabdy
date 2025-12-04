import { patientRecords } from "../data/patientRecords";
import { Users, Calendar, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LabDoctorProfile() {
  const navigate = useNavigate();

  const doctorData = {
    name: "Dr. Anas Sharbash",
    specialization: "Lab Technician",
    hospital: "Banha Medical Center",
    patientsToday: 6,
    appointmentsToday: 11,
    email: "anas.sharbash@example.com",
    phone: "+20 101 234 5678",
  };

  return (
    <div className="min-h-screen bg-[#0A1A3A] text-white antialiased">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">

        {/* ================= PROFILE HEADER ================= */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-[#169CF6]/20 flex items-center justify-center">
            <UserCircle className="w-16 h-16 text-[#169CF6]" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-[#169CF6]">
              {doctorData.name}
            </h1>

            <p className="text-[#169CF6]/70 mt-1">
              {doctorData.specialization} · {doctorData.hospital}
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="px-4 py-2 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/30 text-sm">
                Patients Today:{" "}
                <span className="font-semibold text-[#169CF6]">
                  {doctorData.patientsToday}
                </span>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/30 text-sm">
                Appointments:{" "}
                <span className="font-semibold text-[#169CF6]">
                  {doctorData.appointmentsToday}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* Recent Patients */}
            <div className="bg-[#0A1A3A] rounded-3xl p-6 shadow-md border border-[#169CF6]/20">
              <h3 className="text-lg font-semibold text-[#169CF6] mb-4">
                Recent Patients
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-[#169CF6]/80 hidden md:table-header-group">
                    <tr>
                      <th className="py-2 px-3">Name</th>
                      <th>National ID</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Hospital No</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  {/* Responsive tbody */}
                  <tbody className="divide-y divide-[#169CF6]/20">
                    {patientRecords.slice(0, 5).map((p) => (
                      <tr
                        key={p.nationalId}
                        className="hover:bg-[#169CF6]/10 cursor-pointer"
                        onClick={() => navigate(`/patient/${p.nationalId}`)}
                      >
                        {/* NAME */}
                        <td className="py-3 px-3">
                          <span className="block md:hidden text-xs text-slate-400">
                            Name
                          </span>
                          {p.name}
                        </td>

                        {/* NATIONAL ID */}
                        <td className="py-3">
                          <span className="block md:hidden text-xs text-slate-400">
                            National ID
                          </span>
                          {p.nationalId}
                        </td>

                        {/* AGE */}
                        <td className="py-3">
                          <span className="block md:hidden text-xs text-slate-400">
                            Age
                          </span>
                          {p.age}
                        </td>

                        {/* GENDER */}
                        <td className="py-3">
                          <span className="block md:hidden text-xs text-slate-400">
                            Gender
                          </span>
                          {p.gender}
                        </td>

                        {/* HOSPITAL NUMBER */}
                        <td className="py-3">
                          <span className="block md:hidden text-xs text-slate-400">
                            Hospital No
                          </span>
                          {p.hospitalNumber}
                        </td>

                        {/* STATUS */}
                        <td className="py-3 flex flex-col md:flex-row md:items-center gap-2">

                          <div>
                            <span className="block md:hidden sm:hidden text-xs text-slate-400">
                              Status
                            </span>
                            <span className="inline-block px-2 py-1 !rounded-lg bg-[#169CF6]/20 text-[#169CF6] text-xs">
                              {p.status}
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/patient/${p.nationalId}`);
                            }}
                            className="px-3 py-1 bg-[#169CF6] text-white !rounded-lg text-xs hover:bg-[#1285D6] transition-colors"
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

          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-6">

            {/* Contact Info */}
            <div className="rounded-3xl p-6 bg-[#0A1A3A] border border-[#169CF6]/40 shadow-md">
              <h4 className="text-lg font-semibold text-[#169CF6] mb-3">
                Contact Info
              </h4>
              <p className="text-sm">
                Email:{" "}
                <span className="text-[#169CF6]">{doctorData.email}</span>
              </p>
              <p className="text-sm mt-1">
                Phone:{" "}
                <span className="text-[#169CF6]">{doctorData.phone}</span>
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

              <div className="p-4 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/20 text-[#169CF6] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#169CF6]/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#169CF6]" />
                </div>
                <div>
                  <div className="text-sm">Total Patients</div>
                  <div className="text-xl font-semibold">
                    {patientRecords.length}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/20 text-[#169CF6] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#169CF6]/10 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-[#169CF6]" />
                </div>
                <div>
                  <div className="text-sm">Appointments Today</div>
                  <div className="text-xl font-semibold">
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
