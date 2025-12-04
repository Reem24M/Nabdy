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

    // Local state to add lab results without backend

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [labResults, setLabResults] = useState(patient.labResults || []);

    const addLabResult = (newResult) => {
        setLabResults((prev) => [...prev, newResult]);
    };


    return (
        <div className="min-h-screen bg-[#0A1A3A] text-white p-6">
            {/* BACK BUTTON */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-[#169CF6] mb-6 hover:underline"
            >
                <ChevronLeft className="w-5 h-5" /> Back
            </button>

            <div className="w-full mx-auto space-y-10">

                {/* PATIENT HEADER */}
                <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-[#169CF6] flex items-center justify-center">
                        <User className="w-12 h-12 text-white" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">{patient.name}</h2>
                        <p className="text-slate-300 mt-1">
                            National ID: <span className="text-[#169CF6]">{patient.nationalId}</span>
                        </p>
                        <p className="text-slate-300">
                            Hospital Number: <span className="text-[#169CF6]">{patient.hospitalNumber}</span>
                        </p>
                    </div>
                </div>

                {/* PATIENT INFO */}
                <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl font-semibold text-[#169CF6] mb-4">Patient Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        <div>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Droplets className="w-4 h-4" /> Blood Type
                            </p>
                            <p className="font-semibold text-lg">{patient.bloodType}</p>
                        </div>

                        <div>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Phone className="w-4 h-4" /> Contact
                            </p>
                            <p className="font-semibold text-lg">{patient.contactNumber}</p>
                        </div>

                        <div>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Last Visit
                            </p>
                            <p className="font-semibold text-lg">
                                {new Date(patient.lastVisit).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-400">Next Appointment</p>
                            <p className="font-semibold text-lg">
                                {new Date(patient.nextAppointment).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-400">Age / Gender</p>
                            <p className="font-semibold text-lg">{patient.age} • {patient.gender}</p>
                        </div>

                        <div>
                            <p className="text-slate-400">Status</p>
                            <span className="px-3 py-1 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-sm">
                                {patient.status}
                            </span>
                        </div>
                    </div>
                </div>

                {/* CHRONIC CONDITIONS */}
                <div className="bg-[#0F234A] p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl font-semibold text-[#169CF6] mb-3">Chronic Conditions</h3>

                    <div className="flex flex-wrap gap-3">
                        {patient.conditions.length > 0 ? (
                            patient.conditions.map((cond, i) => (
                                <span key={i} className="px-4 py-2 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-sm">
                                    {cond}
                                </span>
                            ))
                        ) : (
                            <span className="text-slate-500 text-sm">None</span>
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
