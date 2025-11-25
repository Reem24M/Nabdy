import React, { useEffect, useMemo, useState } from "react";
import NotificationSystem from "../../components/NotificationSystem";
import Tabs from "../../components/Tabs";
import "./HospitalDoctorDashboard.css";

// Patient Records (Sample Data)
const patientRecords = [
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
      phone: "+20 100 555 9876"
    },
    conditions: ["Diabetes Type 2", "Hypertension"],
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
          { name: "Fasting Glucose", value: "145 mg/dL", normal: "70-100" },
          { name: "HbA1c", value: "7.2%", normal: "<7.0" }
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
  },
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
    emergencyContact: {
      name: "Hassan Ali",
      relation: "Husband",
      phone: "+20 101 321 7890"
    },
    conditions: ["Asthma", "Allergies"],
    overviewMetrics: [
      {
        id: "resp",
        label: "Peak Flow",
        value: "420 L/min",
        statusLabel: "Stable",
        statusVariant: "success",
        icon: "fas fa-lungs"
      },
      {
        id: "oxygen",
        label: "Blood Oxygen",
        value: "97%",
        statusLabel: "Normal",
        statusVariant: "success",
        icon: "fas fa-wind"
      }
    ],
    timeline: [
      {
        id: 1,
        date: "2024-01-14",
        title: "Asthma Review",
        description: "Assessed inhaler technique and symptom logs",
        status: "completed",
        icon: "fas fa-stethoscope"
      },
      {
        id: 2,
        date: "2023-12-28",
        title: "Allergy Panel",
        description: "Serum IgE testing - dust mites positive",
        status: "completed",
        icon: "fas fa-vial"
      }
    ],
    labResults: [
      {
        id: 1,
        testName: "Allergy Panel",
        date: "2023-12-28",
        status: "attention",
        results: [
          { name: "Dust Mite IgE", value: "Class 3", normal: "Class 0-1" },
          { name: "Pollen IgE", value: "Class 2", normal: "Class 0-1" }
        ]
      }
    ],
    prescriptions: [
      {
        id: 1,
        medication: "Combination Inhaler",
        dosage: "2 puffs",
        frequency: "Twice daily",
        endDate: "2024-04-02",
        status: "active"
      }
    ],
    appointments: [
      {
        id: 1,
        date: "2024-02-18",
        time: "09:30 AM",
        doctor: "Dr. Sarah Ahmed",
        type: "Follow-up",
        status: "scheduled",
        location: "Cairo Medical Center"
      },
      {
        id: 2,
        date: "2024-03-22",
        time: "01:00 PM",
        doctor: "Dr. Ayman Lotfy",
        type: "Allergy Specialist",
        status: "scheduled",
        location: "Allergy & Immunology Clinic"
      }
    ],
    notes: [
      {
        id: "n-2",
        date: "2024-01-14",
        author: "Dr. Sarah Ahmed",
        content: "Symptoms controlled. Maintain inhaler regimen and monitor peak flow twice daily."
      }
    ]
  }
];

const HospitalDoctorDashboard = () => {
  // const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [recentPatients, setRecentPatients] = useState([]);
  const [doctorNotes, setDoctorNotes] = useState([]);
  const [noteInput, ] = useState("");

  const doctorData = {
    name: "Dr. anas sharbash",
    specialization: "Lab Technician",
    hospital: "banha Medical Center",
    experience: "3 years",
    patientsToday: 6,
    appointmentsToday: 11
  };

  // Update notes when patient is selected
  useEffect(() => {
    if (selectedPatient) {
      setDoctorNotes(selectedPatient.notes || []);
    } else {
      setDoctorNotes([]);
    }
  }, [selectedPatient]);

  // Notification handlers
  // const handleMarkNotificationAsRead = (id) => {
  //   setNotifications((prev) =>
  //     prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
  //   );
  // };

  // const handleDeleteNotification = (id) => {
  //   setNotifications((prev) => prev.filter((n) => n.id !== id));
  // };

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
    setActiveTab(0);
    setRecentPatients((prev) => {
      const filtered = prev.filter((p) => p.nationalId !== patient.nationalId);
      return [patient, ...filtered].slice(0, 5);
    });
  };

  // Add note
  // const handleAddNote = (e) => {
  //   e.preventDefault();
  //   const content = noteInput.trim();
  //   if (!content) return;

  //   const newNote = {
  //     id: `note-${Date.now()}`,
  //     date: new Date().toISOString().split("T")[0],
  //     author: doctorData.name,
  //     content
  //   };

  //   setDoctorNotes((prev) => [newNote, ...prev]);
  //   setNoteInput("");
  // };

  // Patient tabs
  const patientTabs = useMemo(() => {
    if (!selectedPatient) return [];

    return [
      {
        label: "Lab Results",
        icon: "fas fa-vial",
        content: <LabResultsContent patient={selectedPatient} />
      }
    ];
  }, [selectedPatient, doctorNotes, noteInput]);

  return (
    <div className="lab-dashboard">
      <div className="container-fluid">
        {/* Header */}
        <div className="dashboard-header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="welcome-section">
                <h2 className="mb-1">Welcome lab Technician, {doctorData.name}</h2>
                <p className="text-muted mb-0">
                  {doctorData.specialization} • {doctorData.hospital}
                </p>
              </div>
            </div>
            {/* <div className="col-md-6 text-md-end">
              <NotificationSystem
                notifications={notifications}
                onMarkAsRead={handleMarkNotificationAsRead}
                onDeleteNotification={handleDeleteNotification}
              />
            </div> */}
          </div>
        </div>

        {/* Stats */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-users text-primary"></i></div>
              <div className="stat-content"><h3>{doctorData.patientsToday}</h3><p>Patients Today</p></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-calendar-check text-success"></i></div>
              <div className="stat-content"><h3>{doctorData.appointmentsToday}</h3><p>Appointments</p></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-file-medical text-warning"></i></div>
              <div className="stat-content"><h3>5</h3><p>Pending Reports</p></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-clock text-info"></i></div>
              <div className="stat-content"><h3>2h</h3><p>Avg. Consultation</p></div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="patient-search card mb-4">
          <div className="card-body">
            <form className="row g-3 align-items-end" onSubmit={handlePatientSearch}>
              <div className="col-md-8">
                <label htmlFor="patientSearch" className="form-label">Search by National ID</label>
                <input
                  id="patientSearch"
                  type="text"
                  className="form-control"
                  placeholder="Enter national ID (e.g. 12345678901234)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="col-md-4 text-md-end">
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-search me-2"></i>Find Patient
                </button>
              </div>
              {searchError && (
                <div className="col-12">
                  <div className="alert alert-warning mb-0">{searchError}</div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Recent Patients */}
        {recentPatients.length > 0 && (
          <div className="recent-patients-card card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0"><i className="fas fa-clock me-2"></i>Recent Patients</h5>
              <span className="badge bg-light text-dark">{recentPatients.length}</span>
            </div>
            <div className="card-body">
              <div className="row">
                {recentPatients.map((patient) => (
                  <div key={patient.nationalId} className="col-md-6 col-xl-4 mb-3">
                    <div
                      className={`recent-patient-card ${
                        selectedPatient?.nationalId === patient.nationalId ? "active" : ""
                      }`}
                    >
                      <div className="recent-patient-header">
                        <h6 className="mb-1">{patient.name}</h6>
                        <span className="badge bg-secondary">
                          {patient.nationalId.slice(-14).padStart(patient.nationalId.length, "•")}
                        </span>
                      </div>
                      <p className="mb-1 text-muted">
                        <i className="fas fa-calendar-day me-2"></i>
                        Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                      </p>
                      <p className="mb-3 text-muted">
                        <i className="fas fa-hospital-user me-2"></i>
                        {patient.conditions.slice(0, 2).join(", ")}
                        {patient.conditions.length > 2 && "..."}
                      </p>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => selectPatient(patient)}
                      >
                        <i className="fas fa-user-check me-1"></i>View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Patients Table */}
        {!selectedPatient && (
          <div className="card mb-4">
            <div className="card-header"><h5>All Patients</h5></div>
            <div className="card-body table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>National ID</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Hospital No</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patientRecords.map((patient) => (
                    <tr key={patient.nationalId}>
                      <td>{patient.name}</td>
                      <td>{patient.nationalId}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.hospitalNumber}</td>
                      <td><span className="badge bg-success">{patient.status}</span></td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => selectPatient(patient)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Patient Summary */}
        {selectedPatient && (
          <div className="patient-summary-card card mb-4">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center">
                    <div className="patient-avatar me-3">
                      <i className="fas fa-user-md"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">{selectedPatient.name}</h4>
                      <div className="patient-meta">
                        <span className="badge bg-primary me-2">
                          National ID: {selectedPatient.nationalId}
                        </span>
                        <span className="badge bg-secondary me-2">
                          Hospital No: {selectedPatient.hospitalNumber}
                        </span>
                        <span className="badge bg-success">{selectedPatient.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <small className="text-muted d-block">Age / Gender</small>
                      <span>
                        {selectedPatient.age} • {selectedPatient.gender}
                      </span>
                    </div>
                    <div className="col-md-4">
                      <small className="text-muted d-block">Blood Type</small>
                      <span>{selectedPatient.bloodType}</span>
                    </div>
                    <div className="col-md-4">
                      <small className="text-muted d-block">Contact</small>
                      <span>{selectedPatient.contactNumber}</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <small className="text-muted d-block">Last Visit</small>
                      <span>{new Date(selectedPatient.lastVisit).toLocaleDateString()}</span>
                    </div>
                    <div className="col-md-6">
                      <small className="text-muted d-block">Next Appointment</small>
                      <span>{new Date(selectedPatient.nextAppointment).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="patient-summary-right">
                    <div className="mb-3">
                      <strong>Chronic Conditions</strong>
                      <div className="mt-2">
                        {selectedPatient.conditions.map((c, i) => (
                          <span key={i} className="badge bg-info me-2 mb-2">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Emergency Contact</strong>
                      <div className="mt-2">
                        <p className="mb-1">{selectedPatient.emergencyContact.name}</p>
                        <small className="text-muted d-block">
                          {selectedPatient.emergencyContact.relation}
                        </small>
                        <span>{selectedPatient.emergencyContact.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        {selectedPatient && (
          <Tabs
            tabs={patientTabs}
            defaultActiveTab={activeTab}
            onTabChange={setActiveTab}
            variant="underline"
          />
        )}
      </div>
    </div>
  );
};

// === Tab Components (English) ===

const OverviewContent = ({ patient }) => {
  const upcoming = patient.appointments.slice(0, 2);
  return (
    <div className="dashboard-overview">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header"><h5>Health Overview</h5></div>
            <div className="card-body">
              <div className="row">
                {patient.overviewMetrics.map((m) => (
                  <div key={m.id} className="col-sm-6 mb-3">
                    <div className="health-metric">
                      <div className="metric-icon"><i className={`${m.icon} text-primary`}></i></div>
                      <div className="metric-content">
                        <h6>{m.label}</h6>
                        <span className="metric-value">{m.value}</span>
                        <small className={`text-${m.statusVariant}`}>{m.statusLabel}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header"><h5>Upcoming Appointments</h5></div>
            <div className="card-body">
              {upcoming.length > 0 ? (
                upcoming.map((a) => (
                  <div key={a.id} className="appointment-item">
                    <div className="appointment-date">
                      <strong>{new Date(a.date).toLocaleDateString()}</strong>
                      <small className="text-muted">{a.time}</small>
                    </div>
                    <div className="appointment-details">
                      <h6>{a.doctor}</h6>
                      <p className="mb-0">{a.type}</p>
                      <small className="text-muted">{a.location}</small>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted mb-0">No upcoming appointments scheduled.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MedicalHistoryContent = ({ patient }) => (
  <div className="card">
    <div className="card-header"><h5>Medical Timeline</h5></div>
    <div className="card-body">
      <div className="timeline">
        {patient.timeline.map((t) => (
          <div key={t.id} className="timeline-item">
            <div className="timeline-icon"><i className={t.icon}></i></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h6 className="mb-1">{t.title}</h6>
                <span className="timeline-date">{t.date}</span>
              </div>
              <p className="timeline-description">{t.description}</p>
              <span className={`badge badge-${t.status === "completed" ? "success" : "primary"}`}>
                {t.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LabResultsContent = ({ patient }) => (
  <div>
    {patient.labResults.map((r) => (
      <div key={r.id} className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>{r.testName}</h5>
          <div>
            <span className="badge bg-secondary me-2">
              {new Date(r.date).toLocaleDateString()}
            </span>
            <span className={`badge ${r.status === "attention" ? "bg-warning" : "bg-success"}`}>
              {r.status}
            </span>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-sm">
            <thead><tr><th>Test</th><th>Result</th><th>Normal Range</th></tr></thead>
            <tbody>
              {r.results.map((res, i) => (
                <tr key={i}>
                  <td>{res.name}</td>
                  <td><strong>{res.value}</strong></td>
                  <td>{res.normal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

const PrescriptionsContent = ({ patient }) => (
  <div className="card">
    <div className="card-header"><h5>Current Prescriptions</h5></div>
    <div className="card-body">
      {patient.prescriptions.map((p) => (
        <div key={p.id} className="prescription-item">
          <div className="row align-items-center">
            <div className="col-md-4"><h6>{p.medication}</h6><small>{p.dosage}</small></div>
            <div className="col-md-3"><span className="badge bg-primary">{p.frequency}</span></div>
            <div className="col-md-3"><small>Until: {new Date(p.endDate).toLocaleDateString()}</small></div>
            <div className="col-md-2">
              <span className={`badge ${p.status === "active" ? "bg-success" : "bg-secondary"}`}>
                {p.status}
              </span>
            </div>
          </div>
          <hr className="my-2" />
        </div>
      ))}
    </div>
  </div>
);

const AppointmentsContent = ({ patient }) => (
  <div className="card">
    <div className="card-header"><h5>All Appointments</h5></div>
    <div className="card-body">
      {patient.appointments.map((a) => (
        <div key={a.id} className="appointment-card">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="appointment-date-badge">
                <span className="day">{new Date(a.date).getDate()}</span>
                <span className="month">
                  {new Date(a.date).toLocaleDateString("en-US", { month: "short" })}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <h6>{a.doctor}</h6>
              <p className="mb-1">{a.type}</p>
              <small className="text-muted">{a.location}</small>
            </div>
            <div className="col-md-2"><span className="badge bg-primary">{a.time}</span></div>
            <div className="col-md-2">
              <span className={`badge ${a.status === "scheduled" ? "bg-success" : "bg-secondary"}`}>
                {a.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NotesContent = ({ notes, noteInput, setNoteInput, onAddNote }) => (
  <div className="card">
    <div className="card-header"><h5>Clinical Notes</h5></div>
    <div className="card-body">
      <form className="mb-4" onSubmit={onAddNote}>
        <div className="mb-3">
          <label className="form-label">Add New Note</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Document your observation or follow-up plan..."
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-plus me-2"></i>Save Note
        </button>
      </form>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((n) => (
            <div key={n.id} className="note-item">
              <div className="note-header">
                <strong>{n.author}</strong>
                <span className="text-muted">{n.date}</span>
              </div>
              <p className="mb-0">{n.content}</p>
            </div>
          ))
        ) : (
          <p className="text-muted mb-0">No clinical notes recorded yet.</p>
        )}
      </div>
    </div>
  </div>
);

export default HospitalDoctorDashboard;