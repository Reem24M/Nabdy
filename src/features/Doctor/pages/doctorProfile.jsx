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
    <div className="min-h-screen bg-[#0A1A3A] text-white p-2 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="bg-[#0F234A] p-3 sm:p-5 lg:p-8 rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
        <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full bg-[#169CF6] flex items-center justify-center flex-shrink-0">
          <User className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
            {doctor.name}
          </h2>
          <p className="text-slate-300 mt-1 text-xs sm:text-sm">
            Specialty:{" "}
            <span className="text-[#169CF6]">{doctor.specialty}</span>
          </p>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="bg-[#0F234A] p-3 sm:p-5 lg:p-8 rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-xl mt-4 sm:mt-6 lg:mt-8">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#169CF6] mb-3 sm:mb-4">
          Doctor Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <div>
            <p className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
              <Phone className="w-3 sm:w-4 h-3 sm:h-4" /> Phone
            </p>
            <p className="font-semibold text-xs sm:text-sm lg:text-base mt-1 truncate">
              {doctor.phone}
            </p>
          </div>
          <div>
            <p className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
              <Mail className="w-3 sm:w-4 h-3 sm:h-4" /> Email
            </p>
            <p className="font-semibold text-xs sm:text-sm lg:text-base mt-1 truncate">
              {doctor.email}
            </p>
          </div>
          <div>
            <p className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4" /> Location
            </p>
            <p className="font-semibold text-xs sm:text-sm lg:text-base mt-1 truncate">
              {doctor.location}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-2">
              <Calendar className="w-3 sm:w-4 h-3 sm:h-4" /> Experience
            </p>
            <p className="font-semibold text-xs sm:text-sm lg:text-base mt-1">
              {doctor.experience} yrs
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-xs sm:text-sm">Gender / Age</p>
            <p className="font-semibold text-xs sm:text-sm lg:text-base mt-1">
              {doctor.gender} • {doctor.age}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-xs sm:text-sm">Status</p>
            <span className="inline-block px-2 sm:px-3 py-1 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-xs mt-1">
              {doctor.status}
            </span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-[#0F234A] p-3 sm:p-5 lg:p-8 rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-xl mt-4 sm:mt-6 lg:mt-8">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#169CF6] mb-3 sm:mb-4">
          Availability Schedule
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
          {doctor.schedule.map((day, i) => (
            <div
              key={i}
              className="bg-[#112348] p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl text-center"
            >
              <p className="font-semibold text-xs sm:text-sm lg:text-base">
                {day.day}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {day.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="bg-[#0F234A] p-3 sm:p-5 lg:p-8 rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-xl mt-4 sm:mt-6 lg:mt-8">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#169CF6] mb-2 sm:mb-3">
          About Doctor
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
          {doctor.bio}
        </p>
      </div>
    </div>
  );
}