import { UserCircle, MapPin } from "lucide-react";

export default function DoctorHeader({ doctor }) {
  return (
    <div className="bg-[#0A1A3A] p-6 rounded-3xl  shadow-lg flex flex-col md:flex-row items-center gap-6">
      
      {/* Doctor Image */}
      <div className="w-20 h-20 rounded-full bg-[#169CF6]/20 flex items-center justify-center">
        <UserCircle className="w-15 h-15 text-white" />
      </div>

      {/* Doctor Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-white">{doctor.title}</h1>
        <p className="text-white text-sm mt-1">{doctor.specialization}</p>

        <div className="flex items-center gap-2 text-white/80 mt-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{doctor.hospital}</span>
        </div>
      </div>

     
    </div>
  );
}
