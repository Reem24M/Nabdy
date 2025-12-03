import { Activity, Stethoscope, Droplets, User, FlaskConical, Calendar, Phone, AlertCircle } from "lucide-react";

export const patientRecords = [
  // --- Patient 1 ---
  {
    id: 1,
    nationalId: "12345678901234",
    name: "Ahmed Mohamed Ali",
    age: 39,
    gender: "Male",
    bloodType: "O+",
    lastVisit: "2024-01-15",
    nextAppointment: "2024-02-20",
    hospitalNumber: "HMC-001",
    status: "Active",
    contactNumber: "+20 100 123 4567",
    emergencyContact: { name: "Mohamed Ali", relation: "Brother", phone: "+20 100 555 9876" },
    conditions: ["Diabetes Type 2", "Hypertension"],
    overviewMetrics: [
      { id: "bp", label: "Blood Pressure", value: "120/80 mmHg", statusLabel: "Normal", statusVariant: "success", icon: Stethoscope },
      { id: "glucose", label: "Blood Sugar", value: "145 mg/dL", statusLabel: "Elevated", statusVariant: "warning", icon: Activity }
    ],
    timeline: [
      { id: 1, date: "2024-01-15", title: "Regular Checkup", description: "Annual physical examination", status: "completed", icon: User },
      { id: 2, date: "2024-01-10", title: "Blood Test Review", description: "Discussed HbA1c results", status: "completed", icon: FlaskConical }
    ],
    labResults: [
      { id: 1, testName: "Diabetes Panel", date: "2024-01-10", status: "attention", results: [
        { name: "Fasting Glucose", value: "145 mg/dL", normal: "70-100" },
        { name: "HbA1c", value: "7.2%", normal: "<7.0" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Metformin", dosage: "500mg", frequency: "Twice daily", endDate: "2024-06-01", status: "active" },
      { id: 2, medication: "Lisinopril", dosage: "10mg", frequency: "Once daily", endDate: "2024-08-15", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-02-20", time: "10:00 AM", doctor: "Dr. Sarah Ahmed", type: "Follow-up", status: "scheduled", location: "Cairo Medical Center" },
      { id: 2, date: "2024-03-15", time: "02:30 PM", doctor: "Dr. Mohamed Hassan", type: "Cardiology Consultation", status: "scheduled", location: "Heart Institute" }
    ],
    notes: [
      { id: "n-1", date: "2024-01-15", author: "Dr. Sarah Ahmed", content: "Elevated HbA1c. Reinforced dietary guidance and scheduled follow-up." }
    ]
  },

  // --- Patient 2 ---
  {
    id: 2,
    nationalId: "98765432109876",
    name: "Fatma Hassan",
    age: 45,
    gender: "Female",
    bloodType: "A+",
    lastVisit: "2024-01-14",
    nextAppointment: "2024-02-18",
    hospitalNumber: "HMC-047",
    status: "Active",
    contactNumber: "+20 101 987 6543",
    emergencyContact: { name: "Hassan Ali", relation: "Husband", phone: "+20 101 321 7890" },
    conditions: ["Asthma"],
    overviewMetrics: [
      { id: "resp", label: "Peak Flow", value: "420 L/min", statusLabel: "Stable", statusVariant: "success", icon: Activity },
      { id: "oxygen", label: "Blood Oxygen", value: "97%", statusLabel: "Normal", statusVariant: "success", icon: Droplets }
    ],
    timeline: [
      { id: 1, date: "2024-01-14", title: "Asthma Review", description: "Assessed inhaler technique", status: "completed", icon: Stethoscope },
      { id: 2, date: "2023-12-28", title: "Allergy Panel", description: "Dust mites positive", status: "completed", icon: FlaskConical }
    ],
    labResults: [
      { id: 1, testName: "Allergy Panel", date: "2023-12-28", status: "attention", results: [
        { name: "Dust Mite IgE", value: "Class 3", normal: "Class 0-1" },
        { name: "Pollen IgE", value: "Class 2", normal: "Class 0-1" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Combination Inhaler", dosage: "2 puffs", frequency: "Twice daily", endDate: "2024-04-02", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-02-18", time: "09:30 AM", doctor: "Dr. omar Ahmed", type: "Follow-up", status: "scheduled", location: "Cairo Medical Center" },
      { id: 2, date: "2024-03-22", time: "01:00 PM", doctor: "Dr. Ayman Lotfy", type: "Allergy Specialist", status: "scheduled", location: "Allergy Clinic" }
    ],
    notes: [
      { id: "n-2", date: "2024-01-14", author: "Dr. Sarah Ahmed", content: "Symptoms controlled. Maintain inhaler regimen." }
    ]
  },

  // --- Patient 3 ---
  {
    id: 3,
    nationalId: "45678912345678",
    name: "Mohamed Salah",
    age: 32,
    gender: "Male",
    bloodType: "B+",
    lastVisit: "2024-01-10",
    nextAppointment: "2024-02-25",
    hospitalNumber: "HMC-102",
    status: "Active",
    contactNumber: "+20 102 456 7890",
    emergencyContact: { name: "Ali Salah", relation: "Father", phone: "+20 102 654 3210" },
    conditions: ["Hypertension"],
    overviewMetrics: [
      { id: "bp", label: "Blood Pressure", value: "130/85 mmHg", statusLabel: "Normal", statusVariant: "success", icon: Stethoscope },
    ],
    timeline: [
      { id: 1, date: "2024-01-10", title: "Blood Pressure Check", description: "Routine BP measurement", status: "completed", icon: Activity }
    ],
    labResults: [
      { id: 1, testName: "Basic Metabolic Panel", date: "2024-01-10", status: "normal", results: [
        { name: "Creatinine", value: "1.0 mg/dL", normal: "0.6-1.2" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Amlodipine", dosage: "5mg", frequency: "Once daily", endDate: "2024-07-01", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-02-25", time: "11:00 AM", doctor: "Dr. Khaled Samir", type: "Follow-up", status: "scheduled", location: "Cairo Medical Center" }
    ],
    notes: [
      { id: "n-3", date: "2024-01-10", author: "Dr. Khaled Samir", content: "BP slightly elevated. Advise lifestyle adjustments." }
    ]
  },

  // --- Patient 4 ---
  {
    id: 4,
    nationalId: "32165498701234",
    name: "Sara Youssef",
    age: 28,
    gender: "Female",
    bloodType: "AB+",
    lastVisit: "2024-01-18",
    nextAppointment: "2024-03-01",
    hospitalNumber: "HMC-205",
    status: "Active",
    contactNumber: "+20 103 321 4567",
    emergencyContact: { name: "Youssef Ahmed", relation: "Father", phone: "+20 103 654 1230" },
    conditions: ["Hypothyroidism"],
    overviewMetrics: [
      { id: "thyroid", label: "TSH", value: "4.0 mIU/L", statusLabel: "Normal", statusVariant: "success", icon: Activity }
    ],
    timeline: [
      { id: 1, date: "2024-01-18", title: "Thyroid Check", description: "TSH and T4 levels checked", status: "completed", icon: Stethoscope }
    ],
    labResults: [
      { id: 1, testName: "Thyroid Panel", date: "2024-01-18", status: "normal", results: [
        { name: "TSH", value: "4.0 mIU/L", normal: "0.4-4.5" },
        { name: "T4", value: "1.1 ng/dL", normal: "0.8-1.8" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Levothyroxine", dosage: "50mcg", frequency: "Once daily", endDate: "2024-08-01", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-03-01", time: "10:30 AM", doctor: "Dr. Mona Khalil", type: "Follow-up", status: "scheduled", location: "Cairo Medical Center" }
    ],
    notes: [
      { id: "n-4", date: "2024-01-18", author: "Dr. Mona Khalil", content: "TSH within normal range, continue current medication." }
    ]
  },

  // --- Patient 5 ---
  {
    id: 5,
    nationalId: "65498732101234",
    name: "Omar Farouk",
    age: 50,
    gender: "Male",
    bloodType: "O-",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-03-05",
    hospitalNumber: "HMC-309",
    status: "Active",
    contactNumber: "+20 104 987 3210",
    emergencyContact: { name: "Farouk Ahmed", relation: "Brother", phone: "+20 104 123 9876" },
    conditions: ["Cardiovascular Disease"],
    overviewMetrics: [
      { id: "bp", label: "Blood Pressure", value: "140/90 mmHg", statusLabel: "Elevated", statusVariant: "warning", icon: Stethoscope }
    ],
    timeline: [
      { id: 1, date: "2024-01-12", title: "Cardiology Check", description: "ECG and vitals assessed", status: "completed", icon: Activity }
    ],
    labResults: [
      { id: 1, testName: "Lipid Profile", date: "2024-01-12", status: "attention", results: [
        { name: "Cholesterol", value: "250 mg/dL", normal: "<200" },
        { name: "HDL", value: "40 mg/dL", normal: ">50" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Atorvastatin", dosage: "20mg", frequency: "Once daily", endDate: "2024-07-01", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-03-05", time: "09:00 AM", doctor: "Dr. Ahmed Lotfy", type: "Follow-up", status: "scheduled", location: "Heart Institute" }
    ],
    notes: [
      { id: "n-5", date: "2024-01-12", author: "Dr. Ahmed Lotfy", content: "Cholesterol high, advise dietary modifications." }
    ]
  },

  // --- Patient 6 ---
  {
    id: 6,
    nationalId: "78912345601234",
    name: "Laila Mostafa",
    age: 37,
    gender: "Female",
    bloodType: "A-",
    lastVisit: "2024-01-20",
    nextAppointment: "2024-03-10",
    hospitalNumber: "HMC-410",
    status: "Active",
    contactNumber: "+20 105 321 6540",
    emergencyContact: { name: "Mostafa Ali", relation: "Husband", phone: "+20 105 987 3210" },
    conditions: ["Anemia"],
    overviewMetrics: [
      { id: "hb", label: "Hemoglobin", value: "10 g/dL", statusLabel: "Low", statusVariant: "warning", icon: Droplets }
    ],
    timeline: [
      { id: 1, date: "2024-01-20", title: "Anemia Check", description: "CBC performed", status: "completed", icon: Stethoscope }
    ],
    labResults: [
      { id: 1, testName: "CBC", date: "2024-01-20", status: "attention", results: [
        { name: "Hemoglobin", value: "10 g/dL", normal: "12-16" },
        { name: "Hematocrit", value: "30%", normal: "36-46" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Iron Supplements", dosage: "100mg", frequency: "Once daily", endDate: "2024-05-01", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-03-10", time: "11:00 AM", doctor: "Dr. Salma Youssef", type: "Follow-up", status: "scheduled", location: "Cairo Medical Center" }
    ],
    notes: [
      { id: "n-6", date: "2024-01-20", author: "Dr. Salma Youssef", content: "Hemoglobin low. Continue supplements and diet advice." }
    ]
  },

  // --- Patient 7 ---
  {
    id: 7,
    nationalId: "32198765401234",
    name: "Hassan Adel",
    age: 41,
    gender: "Male",
    bloodType: "B-",
    lastVisit: "2024-01-22",
    nextAppointment: "2024-03-12",
    hospitalNumber: "HMC-512",
    status: "Active",
    contactNumber: "+20 106 654 3210",
    emergencyContact: { name: "Adel Mohamed", relation: "Brother", phone: "+20 106 987 6543" },
    conditions: ["Back Pain", "Arthritis"],
    overviewMetrics: [
      { id: "pain", label: "Pain Level", value: "6/10", statusLabel: "Moderate", statusVariant: "warning", icon: Activity }
    ],
    timeline: [
      { id: 1, date: "2024-01-22", title: "Orthopedic Check", description: "X-ray and mobility assessment", status: "completed", icon: Stethoscope }
    ],
    labResults: [
      { id: 1, testName: "X-ray", date: "2024-01-22", status: "normal", results: [
        { name: "Spine", value: "Mild Degeneration", normal: "Normal" }
      ]}
    ],
    prescriptions: [
      { id: 1, medication: "Pain Relief", dosage: "50mg", frequency: "Twice daily", endDate: "2024-05-01", status: "active" }
    ],
    appointments: [
      { id: 1, date: "2024-03-12", time: "10:30 AM", doctor: "Dr. Ahmed Farid", type: "Follow-up", status: "scheduled", location: "Cairo Medical Center" }
    ],
    notes: [
      { id: "n-7", date: "2024-01-22", author: "Dr. Ahmed Farid", content: "Moderate back pain. Recommend physiotherapy." }
    ]
  }
];
