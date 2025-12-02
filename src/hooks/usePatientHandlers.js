import { useState } from "react";
import { patientRecords } from "../data/labDoctorData/patientRecords";

export default function usePatientHandlers() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchError, setSearchError] = useState("");
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [recentPatients, setRecentPatients] = useState([]);

    // Search patient
    const handlePatientSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.replace(/\s/g, "");

        if (!query) {
            setSearchError("Please enter a national ID.");
            setSelectedPatient(null);
            return;
        }

        const patient = patientRecords.find((p) => p.nationalId === query);

        if (patient) {
            selectPatient(patient);
            setSearchError("");
        } else {
            setSelectedPatient(null);
            setSearchError("No patient found with this national ID.");
        }
    };

    // Unified patient selection
    const selectPatient = (patient) => {
        setSelectedPatient(patient);
        setSearchQuery(patient.nationalId);

        setRecentPatients((prev) => {
            const filtered = prev.filter((p) => p.nationalId !== patient.nationalId);
            return [patient, ...filtered].slice(0, 5);
        });
    };

    return {
        searchQuery,
        setSearchQuery,
        searchError,
        selectedPatient,
        recentPatients,
        handlePatientSearch,
        selectPatient
    };
}
