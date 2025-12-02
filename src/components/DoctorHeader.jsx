import { UserCircle, MapPin } from "lucide-react";

export default function DoctorHeader({ doctor }) {
  return (
    <div className="bg-[#0A1A3A] p-6 rounded-3xl border border-[#169CF6]/30 shadow-lg flex flex-col md:flex-row items-center gap-6">
      
      {/* Doctor Image */}
      <div className="w-20 h-20 rounded-full bg-[#169CF6]/20 flex items-center justify-center">
        <UserCircle className="w-15 h-15 text-[#169CF6]" />
      </div>

      {/* Doctor Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-white">{doctor.title}</h1>
        <p className="text-[#169CF6] text-sm mt-1">{doctor.specialization}</p>

        <div className="flex items-center gap-2 text-[#169CF6]/80 mt-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{doctor.hospital}</span>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="grid grid-cols-2 gap-4 w-full md:w-auto mt-4 md:mt-0">
        <div className="bg-[#0A1A3A] border border-[#169CF6]/20 rounded-xl p-3 text-center">
          <p className="text-[#169CF6]/70 text-sm">Patients Today</p>
          <p className="text-white font-semibold text-xl">{doctor.patientsToday}</p>
        </div>

        <div className="bg-[#0A1A3A] border border-[#169CF6]/20 rounded-xl p-3 text-center">
          <p className="text-[#169CF6]/70 text-sm">Appointments</p>
          <p className="text-white font-semibold text-xl">{doctor.appointmentsToday}</p>
        </div>
      </div> */}
    </div>
  );
}
