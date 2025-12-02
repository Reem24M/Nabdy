import { useParams, useNavigate } from "react-router-dom";
import { patientRecords } from "../../data/labDoctorData/patientRecords";
import { User, Phone, Calendar, Droplets, AlertCircle, ChevronLeft } from "lucide-react";

export default function PatientCard() {
    const { id } = useParams();
    const navigate = useNavigate();
    const patient = patientRecords.find((p) => p.nationalId === id);

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
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl shadow-xl p-6 w-full max-w-md text-white">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-400 mb-4"
                >
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>

                {/* Patient Info */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{patient.name}</h2>
                        <p className="text-sm text-slate-400">
                            ID: {patient.nationalId} | H-No: {patient.hospitalNumber}
                        </p>
                    </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-slate-400 text-sm flex items-center gap-1">
                            <Droplets className="w-4 h-4" /> Blood
                        </p>
                        <p className="font-semibold">{patient.bloodType}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm flex items-center gap-1">
                            <Phone className="w-4 h-4" /> Contact
                        </p>
                        <p className="font-semibold">{patient.contactNumber}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> Last Visit
                        </p>
                        <p className="font-semibold">{new Date(patient.lastVisit).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm">Age/Gender</p>
                        <p className="font-semibold">{patient.age} • {patient.gender}</p>
                    </div>
                </div>

                {/* Chronic Conditions */}
                <div>
                    <h3 className="text-sm text-slate-400 mb-2">Chronic Conditions:</h3>
                    <div className="flex flex-wrap gap-2">
                        {patient.conditions.length > 0
                            ? patient.conditions.map((cond, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-blue-700 rounded-full text-sm"
                                >
                                    {cond}
                                </span>
                            ))
                            : <span className="text-slate-500 text-sm">None</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
