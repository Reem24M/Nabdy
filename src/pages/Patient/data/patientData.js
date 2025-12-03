 import { 
  User, Phone, Mail, Calendar, MapPin, HeartPulse, 
  Activity, Clock, Shield, FileText, Pill, AlertCircle 
} from "lucide-react";
 
 // Static patient info with more details
   const patient = {
    name: "Ahmed Mostafa",
    age: 32,
    gender: "Male",
    bloodType: "A+",
    phone: "+20 114 987 6543",
    email: "ahmed.mostafa@example.com",
    address: "Alexandria – Egypt",
    status: "Stable",
    patientId: "PAT-2024-7845",
    insurance: "National Health Insurance",
    lastVisit: "Oct 12, 2024",
    nextAppointment: "Nov 15, 2024, 10:30 AM",
    primaryPhysician: "Dr. Mohamed Hassan",
    emergencyContact: {
      name: "Sarah Mostafa",
      relationship: "Wife",
      phone: "+20 100 234 5678"
    },

    vitalStats: [
      { label: "Blood Pressure", value: "120/80", status: "normal", icon: Activity },
      { label: "Heart Rate", value: "72 bpm", status: "normal", icon: HeartPulse },
      { label: "Blood Sugar", value: "110 mg/dL", status: "elevated", icon: Pill },
      { label: "Weight", value: "78 kg", status: "normal", icon: Shield },
    ],

    medicalHistory: [
      { condition: "Diabetes Type 2", since: "2018", severity: "Moderate", treatment: "Metformin 500mg" },
      { condition: "High Blood Pressure", since: "2020", severity: "Mild", treatment: "Lisinopril 10mg" },
      { condition: "Asthma", since: "2015", severity: "Mild", treatment: "Albuterol inhaler" },
    ],

    recentVisits: [
      { date: "Oct 12, 2024", reason: "Routine Checkup", doctor: "Dr. Mohamed Hassan", status: "Completed" },
      { date: "Sep 28, 2024", reason: "Blood Sugar Test", doctor: "Dr. Sarah Ali", status: "Completed" },
      { date: "Aug 15, 2024", reason: "Blood Pressure Follow-up", doctor: "Dr. Mohamed Hassan", status: "Completed" },
    ],

    currentMedications: [
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily", status: "Active" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", status: "Active" },
      { name: "Aspirin", dosage: "81mg", frequency: "Once daily", status: "Active" },
    ],

    bio: "Ahmed Mostafa is a regular patient receiving continuous checkups to monitor blood sugar and blood pressure levels. His condition is stable with ongoing medication. He maintains a healthy lifestyle with regular exercise and balanced diet."
  };
  export { patient };