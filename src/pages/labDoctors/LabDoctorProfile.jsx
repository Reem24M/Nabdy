import React from "react";
import { Icon } from "lucide-react";
import { patientRecords } from "../../data/labDoctorData/patientRecords";
import { Users, Calendar,UserCircle } from "lucide-react";
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
        <div className="min-h-screen bg-[#0A1A3A] text-white antialiased">
            <div className="max-w-[1200px] mx-auto px-6 py-8">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-[#169CF6]/20 flex items-center justify-center">
                        <UserCircle className="w-15 h-15 text-[#169CF6]" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#169CF6]">{doctorData.name}</h1>
                        <p className="text-[#169CF6]/70 mt-1">{doctorData.specialization} - {doctorData.hospital}</p>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/30">
                                Patients Today: <span className="font-semibold text-[#169CF6]">{doctorData.patientsToday}</span>
                            </div>
                            <div className="px-4 py-2 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/30">
                                Appointments: <span className="font-semibold text-[#169CF6]">{doctorData.appointmentsToday}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Recent Patients */}
                        <div className="bg-[#0A1A3A] rounded-3xl p-6 shadow-md border border-[#169CF6]/20">
                            <h3 className="text-lg font-semibold text-[#169CF6] mb-4">Recent Patients</h3>
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
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#169CF6]/20">
                                        {patientRecords.slice(0, 5).map((p) => (
                                            <tr key={p.nationalId} className="cursor-pointer hover:bg-[#169CF6]/10">
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
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Contact Card */}
                        <div className="rounded-3xl p-6 bg-[#0A1A3A] border border-[#169CF6]/40 shadow-md">
                            <h4 className="text-lg font-semibold text-[#169CF6] mb-4">Contact Info</h4>
                            <p>Email: <span className="text-[#169CF6]">{doctorData.email}</span></p>
                            <p>Phone: <span className="text-[#169CF6]">{doctorData.phone}</span></p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/20 text-[#169CF6] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#169CF6]/10 flex items-center justify-center">
                                    <Users className="w-7 h-7 text-[#169CF6]" />
                                </div>
                                <div>
                                    <div className="text-sm">Total Patients</div>
                                    <div className="text-xl font-semibold">{patientRecords.length}</div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#0A1A3A] border border-[#169CF6]/20 text-[#169CF6] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#169CF6]/10 flex items-center justify-center">
                                    <Calendar className="w-7 h-7 text-[#169CF6]" />
                                </div>
                                <div>
                                    <div className="text-sm">Appointments Today</div>
                                    <div className="text-xl font-semibold">{doctorData.appointmentsToday}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
