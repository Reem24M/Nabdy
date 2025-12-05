import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import LabResultsSection from "../components/LabResultsSection";
import AddLabResultModal from "../components/AddLabResultModal";

import { patientRecords } from "../data/patientRecords";
import {
  User,
  Phone,
  Calendar,
  Droplets,
  AlertCircle,
  ChevronLeft,
} from "lucide-react";

export default function PatientCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find patient
  const patient = patientRecords.find((p) => p.nationalId === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [labResults, setLabResults] = useState(patient?.labResults || []);

  // Add lab result
  const addLabResult = (newResult) => {
    setLabResults((prev) => [...prev, newResult]);
  };

  // Patient not found case
  if (!patient) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <p className="text-xl text-slate-400">Patient not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1A3A] text-white p-2 sm:p-4 lg:p-6">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#169CF6] mb-4 sm:mb-6 hover:underline text-xs sm:text-sm"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
      </button>

      <div className="w-full mx-auto space-y-6 sm:space-y-10">
        {/* PATIENT HEADER */}
        <div className="bg-[#0F234A] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#169CF6] flex items-center justify-center flex-shrink-0">
            <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>

          <div className="text-center sm:text-left min-w-0">
            <h2 className="text-xl sm:text-3xl font-bold truncate">
              {patient.name}
            </h2>
            <p className="text-slate-300 mt-1 text-xs sm:text-sm">
              National ID:{" "}
              <span className="text-[#169CF6] truncate">
                {patient.nationalId}
              </span>
            </p>
            <p className="text-slate-300 text-xs sm:text-sm truncate">
              Hospital Number:{" "}
              <span className="text-[#169CF6]">{patient.hospitalNumber}</span>
            </p>
          </div>
        </div>

        {/* PATIENT INFO */}
        <div className="bg-[#0F234A] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
          <h3 className="text-base sm:text-xl font-semibold text-[#169CF6] mb-3 sm:mb-4">
            Patient Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
                <Droplets className="w-4 h-4 flex-shrink-0" /> Blood Type
              </p>
              <p className="font-semibold text-sm sm:text-lg mt-1">
                {patient.bloodType}
              </p>
            </div>

            <div>
              <p className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" /> Contact
              </p>
              <p className="font-semibold text-sm sm:text-lg mt-1 truncate">
                {patient.contactNumber}
              </p>
            </div>

            <div>
              <p className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
                <Calendar className="w-4 h-4 flex-shrink-0" /> Last Visit
              </p>
              <p className="font-semibold text-sm sm:text-lg mt-1">
                {new Date(patient.lastVisit).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-xs sm:text-sm">
                Next Appointment
              </p>
              <p className="font-semibold text-sm sm:text-lg mt-1">
                {new Date(patient.nextAppointment).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-xs sm:text-sm">Age / Gender</p>
              <p className="font-semibold text-sm sm:text-lg mt-1">
                {patient.age} • {patient.gender}
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-xs sm:text-sm">Status</p>
              <span className="inline-block px-3 py-1 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-xs sm:text-sm mt-1">
                {patient.status}
              </span>
            </div>
          </div>
        </div>

        {/* CHRONIC CONDITIONS */}
        <div className="bg-[#0F234A] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
          <h3 className="text-base sm:text-xl font-semibold text-[#169CF6] mb-2 sm:mb-3">
            Chronic Conditions
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {patient.conditions.length > 0 ? (
              patient.conditions.map((cond, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-xs sm:text-sm"
                >
                  {cond}
                </span>
              ))
            ) : (
              <span className="text-slate-500 text-xs sm:text-sm">None</span>
            )}
          </div>
        </div>

        <LabResultsSection
          labResults={labResults}
          onOpenModal={() => setIsModalOpen(true)}
        />

        <AddLabResultModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={addLabResult}
        />
      </div>
    </div>
  );
}