import { UserCircle, MapPin } from "lucide-react";

export default function DoctorHeader({ doctor }) {
  return (
    <div className="bg-[#0A1A3A] p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
      {/* Doctor Image */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#169CF6]/20 flex items-center justify-center flex-shrink-0">
        <UserCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
      </div>

      {/* Doctor Info */}
      <div className="flex-1 min-w-0 text-center md:text-left">
        <h1 className="text-base sm:text-lg lg:text-2xl font-semibold text-white break-words">
          {doctor.title}
        </h1>
        <p className="text-white text-xs sm:text-sm mt-0.5 sm:mt-1 break-words">
          {doctor.specialization}
        </p>

        <div className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 text-white/80 mt-1 sm:mt-2">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm break-words">
            {doctor.hospital}
          </span>
        </div>
      </div>
    </div>
  );
}