export const getPatientTabs = (selectedPatient) => {
  if (!selectedPatient) return [];

  return [
    {
      label: "Lab Results",
      icon: "fas fa-vial",
      key: "labResults",
      data: selectedPatient.labResults
    },
    {
      label: "Timeline",
      icon: "fas fa-clock",
      key: "timeline",
      data: selectedPatient.timeline
    },
    {
      label: "Prescriptions",
      icon: "fas fa-prescription-bottle",
      key: "prescriptions",
      data: selectedPatient.prescriptions
    },
    {
      label: "Appointments",
      icon: "fas fa-calendar-check",
      key: "appointments",
      data: selectedPatient.appointments
    },
    {
      label: "Notes",
      icon: "fas fa-notes-medical",
      key: "notes",
      data: selectedPatient.notes
    }
  ];
};
