export const patientRecords = [
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
    emergencyContact: {
      name: "Mohamed Ali",
      relation: "Brother",
      relationship: "Brother",
      phone: "+20 100 555 9876"
    },
    conditions: ["Diabetes Type 2", "Hypertension"],
    chronicConditions: ["Diabetes Type 2", "Hypertension"],

    overviewMetrics: [
      {
        id: "bp",
        label: "Blood Pressure",
        value: "120/80 mmHg",
        statusLabel: "Normal",
        statusVariant: "success",
        icon: "fas fa-heartbeat"
      },
      {
        id: "glucose",
        label: "Blood Sugar",
        value: "145 mg/dL",
        statusLabel: "Elevated",
        statusVariant: "warning",
        icon: "fas fa-thermometer-half"
      }
    ],

    timeline: [
      {
        id: 1,
        date: "2024-01-15",
        title: "Regular Checkup",
        description: "Annual physical examination with Dr. Sarah Ahmed",
        status: "completed",
        icon: "fas fa-user-md"
      },
      {
        id: 2,
        date: "2024-01-10",
        title: "Blood Test Review",
        description: "Discussed HbA1c results and lifestyle updates",
        status: "completed",
        icon: "fas fa-vial"
      }
    ],

    labResults: [
      {
        id: 1,
        testName: "Diabetes Panel",
        date: "2024-01-10",
        status: "attention",
        results: [
          { name: "Fasting Glucose", value: 145, normal: 100 }, 
          { name: "HbA1c", value: 7.2, normal: 7.0 }             
        ]
      }
    ],

    prescriptions: [
      {
        id: 1,
        medication: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        endDate: "2024-06-01",
        status: "active"
      },
      {
        id: 2,
        medication: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        endDate: "2024-08-15",
        status: "active"
      }
    ],

    appointments: [
      {
        id: 1,
        date: "2024-02-20",
        time: "10:00 AM",
        doctor: "Dr. Sarah Ahmed",
        type: "Follow-up",
        status: "scheduled",
        location: "Cairo Medical Center"
      },
      {
        id: 2,
        date: "2024-03-15",
        time: "02:30 PM",
        doctor: "Dr. Mohamed Hassan",
        type: "Cardiology Consultation",
        status: "scheduled",
        location: "Heart Institute"
      }
    ],

    notes: [
      {
        id: "n-1",
        date: "2024-01-15",
        author: "Dr. Sarah Ahmed",
        content: "Elevated HbA1c. Reinforced dietary guidance and scheduled follow-up."
      }
    ]
  }
];
