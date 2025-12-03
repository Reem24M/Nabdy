// components/DoctorProfile.jsx
import { User, Phone, Mail, Calendar, MapPin } from "lucide-react";

export default function DoctorProfile() {
  // Static doctor info
  const doctor = {
    name: "Dr. Mohamed Hassan",
    specialty: "Orthopedic Surgeon",
    gender: "Male",
    age: 45,
    experience: 18,
    phone: "+20 106 123 4567",
    email: "mohamed.hassan@hospital.com",
    location: "Cairo Medical Center",
    status: "Active",
    schedule: [
      { day: "Monday", time: "9:00 AM - 2:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 4:00 PM" },
      { day: "Friday", time: "8:00 AM - 1:00 PM" },
    ],
    bio: "Dr. Mohamed Hassan is a highly skilled orthopedic surgeon with 18 years of experience in treating bone and joint conditions. He is committed to providing the highest quality patient care.",
  };

  return (
    <div className="min-h-screen bg-[#0A1A3A] text-white p-6">
      {/* Header */}
      <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-[#169CF6] flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{doctor.name}</h2>
          <p className="text-slate-300 mt-1">
            Specialty: <span className="text-[#169CF6]">{doctor.specialty}</span>
          </p>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl mt-8">
        <h3 className="text-xl font-semibold text-[#169CF6] mb-4">Doctor Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <p className="text-slate-400 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Phone
            </p>
            <p className="font-semibold text-lg">{doctor.phone}</p>
          </div>
          <div>
            <p className="text-slate-400 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </p>
            <p className="font-semibold text-lg">{doctor.email}</p>
          </div>
          <div>
            <p className="text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Location
            </p>
            <p className="font-semibold text-lg">{doctor.location}</p>
          </div>
          <div>
            <p className="text-slate-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Years of Experience
            </p>
            <p className="font-semibold text-lg">{doctor.experience} years</p>
          </div>
          <div>
            <p className="text-slate-400">Gender / Age</p>
            <p className="font-semibold text-lg">{doctor.gender} • {doctor.age}</p>
          </div>
          <div>
            <p className="text-slate-400">Status</p>
            <span className="px-3 py-1 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-sm">
              {doctor.status}
            </span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl mt-8">
        <h3 className="text-xl font-semibold text-[#169CF6] mb-4">Availability Schedule</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {doctor.schedule.map((day, i) => (
            <div key={i} className="bg-[#112348] p-4 rounded-xl text-center">
              <p className="font-semibold">{day.day}</p>
              <p className="text-slate-300">{day.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl mt-8">
        <h3 className="text-xl font-semibold text-[#169CF6] mb-2">About Doctor</h3>
        <p className="text-slate-300">{doctor.bio}</p>
      </div>
    </div>
  );
}
