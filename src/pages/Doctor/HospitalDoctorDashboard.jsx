import React, { useEffect, useMemo, useState } from "react";
import NotificationSystem from "../../components/NotificationSystem";
import Tabs from "../../components/Tabs";
import "./HospitalDoctorDashboard.css";

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
  const [mainTabIndex, setMainTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [recentPatients, setRecentPatients] = useState([]);
  const [doctorNotes, setDoctorNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const doctorData = {
    name: "Dr. Sarah Ahmed",
    specialization: "Internal Medicine",
    hospital: "Cairo Medical Center",
    experience: "15 years",
    patientsToday: 12,
    appointmentsToday: 8
  };

  useEffect(() => {
    if (selectedPatient) {
      setDoctorNotes(selectedPatient.notes || []);
    } else {
      setDoctorNotes([]);
    }
  }, [selectedPatient]);

  // const handleMarkNotificationAsRead = (notificationId) => {
  //   setNotifications((prev) =>
  //     prev.map((notification) =>
  //       notification.id === notificationId ? { ...notification, isRead: true } : notification
  //     )
  //   );
  // };

  // const handleDeleteNotification = (notificationId) => {
  //   setNotifications((prev) => prev.filter((notification) => notification.id !== notificationId));
  // };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handlePatientSearch = (event) => {
    event.preventDefault();
    const normalizedQuery = searchQuery.replace(/\s/g, "");

    if (!normalizedQuery) {
      setSearchError("Please enter a national ID to search.");
      setSelectedPatient(null);
      return;
    }

    const foundPatient = patientRecords.find(
      (patient) => patient.nationalId === normalizedQuery
    );

    if (foundPatient) {
      setSelectedPatient(foundPatient);
      setSearchError("");
      setActiveTab(0);
      setRecentPatients((prev) => {
        const filtered = prev.filter(
          (patient) => patient.nationalId !== foundPatient.nationalId
        );
        return [foundPatient, ...filtered].slice(0, 5);
      });
    } else {
      setSelectedPatient(null);
      setSearchError("No patient found with that national ID.");
    }
  };

  const handleTabAction = (action, section) => {
    console.log(`Doctor selected to ${action} in ${section}`);
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    const trimmedNote = noteInput.trim();

    if (!trimmedNote) {
      return;
    }

    const newNote = {
      id: `note-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      author: doctorData.name,
      content: trimmedNote
    };

    setDoctorNotes((prev) => [newNote, ...prev]);
    setNoteInput("");
  };

  const handleRecentPatientSelect = (patient) => {
    // Get the full patient record from patientRecords to ensure all data is available
    const fullPatient = patientRecords.find(
      (p) => p.nationalId === patient.nationalId
    ) || patient;
    
    // Update recent patients list - move selected patient to top
    setRecentPatients((prev) => {
      const filtered = prev.filter(
        (p) => p.nationalId !== fullPatient.nationalId
      );
      return [fullPatient, ...filtered].slice(0, 5);
    });
    
    // Set the selected patient and switch to Search Patient tab
    setSelectedPatient(fullPatient);
    setActiveTab(0); // Reset to Overview tab within patient view
    setSearchQuery(fullPatient.nationalId);
    setSearchError("");
    setMainTabIndex(0); // Switch to Search Patient tab to show patient card
  };

  const DoctorTabActions = ({ section }) => (
    <div className="tab-actions">
      <button
        type="button"
        className="btn btn-sm btn-outline-primary me-2"
        onClick={() => handleTabAction("edit", section)}
      >
        <i className="fas fa-edit me-1"></i>
        Edit
      </button>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => handleTabAction("add", section)}
      >
        <i className="fas fa-plus me-1"></i>
        Add
      </button>
    </div>
  );

  const OverviewContent = () => {
    if (!selectedPatient) {
      return null;
    }

    const upcomingAppointments = selectedPatient.appointments.slice(0, 2);

    return (
      <div className="dashboard-overview">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="fas fa-chart-line me-2"></i>
                  Health Overview
                </h5>
                <DoctorTabActions section="Health Overview" />
              </div>
              <div className="card-body">
                <div className="row">
                  {selectedPatient.overviewMetrics.map((metric) => (
                    <div key={metric.id} className="col-sm-6 mb-3">
                      <div className="health-metric">
                        <div className="metric-icon">
                          <i className={`${metric.icon} text-primary`}></i>
                        </div>
                        <div className="metric-content">
                          <h6>{metric.label}</h6>
                          <span className="metric-value">{metric.value}</span>
                          <small className={`text-${metric.statusVariant}`}>
                            {metric.statusLabel}
                          </small>
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
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Upcoming Appointments
                </h5>
                <DoctorTabActions section="Upcoming Appointments" />
              </div>
              <div className="card-body">
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="appointment-item">
                      <div className="appointment-date">
                        <strong>{new Date(appointment.date).toLocaleDateString()}</strong>
                        <small className="text-muted">{appointment.time}</small>
                      </div>
                      <div className="appointment-details">
                        <h6>{appointment.doctor}</h6>
                        <p className="mb-0">{appointment.type}</p>
                        <small className="text-muted">{appointment.location}</small>
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

  const MedicalHistoryContent = () => {
    if (!selectedPatient) {
      return null;
    }

    return (
      <div className="medical-history">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              <i className="fas fa-history me-2"></i>
              Medical Timeline
            </h5>
            <DoctorTabActions section="Medical Timeline" />
          </div>
          <div className="card-body">
            <div className="timeline">
              {selectedPatient.timeline.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h6 className="mb-1">{item.title}</h6>
                      <span className="timeline-date">{item.date}</span>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                    <span
                      className={`badge badge-${
                        item.status === "completed"
                          ? "success"
                          : item.status === "active"
                          ? "primary"
                          : "secondary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LabResultsContent = () => {
    if (!selectedPatient) {
      return null;
    }

    return (
      <div className="lab-results">
        {selectedPatient.labResults.map((result) => (
          <div key={result.id} className="card mb-4">
            <div className="card-header d-flex flex-wrap justify-content-between align-items-center">
              <h5 className="mb-0">{result.testName}</h5>
              <div className="d-flex align-items-center flex-wrap justify-content-end w-auto">
                <DoctorTabActions section={`Lab Result: ${result.testName}`} />
                <div className="ms-0 ms-md-3 mt-3 mt-md-0">
                  <span className="badge bg-secondary me-2">
                    {new Date(result.date).toLocaleDateString()}
                  </span>
                  <span
                    className={`badge ${
                      result.status === "normal"
                        ? "bg-success"
                        : result.status === "attention"
                        ? "bg-warning"
                        : "bg-danger"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Test</th>
                      <th>Result</th>
                      <th>Normal Range</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.results.map((test, index) => (
                      <tr key={index}>
                        <td>{test.name}</td>
                        <td>
                          <strong>{test.value}</strong>
                        </td>
                        <td>{test.normal}</td>
                        <td>
                          <i
                            className={`fas fa-circle text-${
                              test.value.includes("145") || test.value.includes("Class")
                                ? "warning"
                                : "success"
                            }`}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const PrescriptionsContent = () => {
    if (!selectedPatient) {
      return null;
    }

    return (
      <div className="prescriptions">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              <i className="fas fa-prescription-bottle me-2"></i>
              Current Prescriptions
            </h5>
            <DoctorTabActions section="Prescriptions" />
          </div>
          <div className="card-body">
            {selectedPatient.prescriptions.map((prescription) => (
              <div key={prescription.id} className="prescription-item">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6 className="mb-1">{prescription.medication}</h6>
                    <small className="text-muted">{prescription.dosage}</small>
                  </div>
                  <div className="col-md-3">
                    <span className="badge bg-primary">{prescription.frequency}</span>
                  </div>
                  <div className="col-md-3">
                    <small className="text-muted">
                      Until: {new Date(prescription.endDate).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="col-md-2">
                    <span
                      className={`badge ${
                        prescription.status === "active" ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {prescription.status}
                    </span>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AppointmentsContent = () => {
    if (!selectedPatient) {
      return null;
    }

    return (
      <div className="appointments">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              <i className="fas fa-calendar-alt me-2"></i>
              All Appointments
            </h5>
            <DoctorTabActions section="Appointments" />
          </div>
          <div className="card-body">
            {selectedPatient.appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <div className="appointment-date-badge">
                      <span className="day">{new Date(appointment.date).getDate()}</span>
                      <span className="month">
                        {new Date(appointment.date).toLocaleDateString("en-US", {
                          month: "short"
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6 className="mb-1">{appointment.doctor}</h6>
                    <p className="mb-1">{appointment.type}</p>
                    <small className="text-muted">{appointment.location}</small>
                  </div>
                  <div className="col-md-2">
                    <span className="badge bg-primary">{appointment.time}</span>
                  </div>
                  <div className="col-md-2">
                    <span
                      className={`badge ${
                        appointment.status === "scheduled" ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const NotesContent = () => (
    <div className="doctor-notes">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="fas fa-sticky-note me-2"></i>
            Clinical Notes
          </h5>
          <DoctorTabActions section="Clinical Notes" />
        </div>
        <div className="card-body">
          <form className="mb-4" onSubmit={handleAddNote}>
            <div className="mb-3">
              <label htmlFor="noteInput" className="form-label">
                Add New Note
              </label>
              <textarea
                id="noteInput"
                className="form-control"
                rows="3"
                placeholder="Document your observation or follow-up plan..."
                value={noteInput}
                onChange={(event) => setNoteInput(event.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-plus me-2"></i>
              Save Note
            </button>
          </form>
          <div className="notes-list">
            {doctorNotes.length > 0 ? (
              doctorNotes.map((note) => (
                <div key={note.id} className="note-item">
                  <div className="note-header">
                    <strong>{note.author}</strong>
                    <span className="text-muted">{note.date}</span>
                  </div>
                  <p className="mb-0">{note.content}</p>
                </div>
              ))
            ) : (
              <p className="text-muted mb-0">No clinical notes recorded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const RecentPatientsContent = () => (
    <div className="recent-patients-section">
      {recentPatients.length > 0 ? (
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
                    {patient.nationalId.slice(-4).padStart(patient.nationalId.length, "•")}
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
                  onClick={() => handleRecentPatientSelect(patient)}
                >
                  <i className="fas fa-user-check me-1"></i>
                  View Patient
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card empty-state-card">
          <div className="card-body text-center py-5">
            <i className="fas fa-clock fa-2x text-muted mb-3"></i>
            <h5 className="mb-2">No Recent Patients</h5>
            <p className="text-muted mb-0">
              Patients you search for will appear here for quick access.
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const SearchPatientContent = () => (
    <div className="search-patient-section">
      <div className="patient-search card mb-4">
        <div className="card-body">
          <form className="row g-3 align-items-end" onSubmit={handlePatientSearch}>
            <div className="col-md-8">
              <label htmlFor="patientSearch" className="form-label">
                Search Patient by National ID
              </label>
              <input
                id="patientSearch"
                type="text"
                className="form-control"
                placeholder="Enter national ID (e.g. 12345678901234)"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <div className="col-md-4 text-md-end">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search me-2"></i>
                Find Patient
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

      {!selectedPatient && (
        <div className="card empty-state-card mb-4">
          <div className="card-body text-center py-5">
            <i className="fas fa-search fa-2x text-primary mb-3"></i>
            <h5 className="mb-2">Search for a patient</h5>
            <p className="text-muted mb-0">
              Enter a national ID above to load patient records, medical history, and notes.
            </p>
          </div>
        </div>
      )}

      {selectedPatient && (
        <>
          <div className="patient-summary-card card mb-4">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-wrap align-items-center">
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
                      <span>
                        {new Date(selectedPatient.nextAppointment).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="patient-summary-right">
                    <div className="mb-3">
                      <strong>Chronic Conditions</strong>
                      <div className="mt-2">
                        {selectedPatient.conditions.map((condition, index) => (
                          <span key={index} className="badge bg-info me-2 mb-2">
                            {condition}
                          </span>
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

          {selectedPatient && (
            <Tabs
              key={selectedPatient.nationalId}
              tabs={patientTabs}
              defaultActiveTab={activeTab}
              onTabChange={handleTabChange}
              variant="underline"
            />
          )}
        </>
      )}
    </div>
  );

  const patientTabs = useMemo(() => {
    if (!selectedPatient) {
      return [];
    }

    return [
      {
        label: "Overview",
        icon: "fas fa-chart-line",
        content: <OverviewContent />
      },
      {
        label: "Medical History",
        icon: "fas fa-history",
        content: <MedicalHistoryContent />
      },
      {
        label: "Lab Results",
        icon: "fas fa-vial",
        content: <LabResultsContent />
      },
      {
        label: "Prescriptions",
        icon: "fas fa-prescription-bottle",
        content: <PrescriptionsContent />
      },
      {
        label: "Appointments",
        icon: "fas fa-calendar-alt",
        content: <AppointmentsContent />
      },
      {
        label: "Notes",
        icon: "fas fa-sticky-note",
        content: <NotesContent />
      }
    ];
  }, [selectedPatient, doctorNotes]);

  const mainTabs = useMemo(() => {
    return [
      {
        label: "Search Patient",
        icon: "fas fa-search",
        content: <SearchPatientContent />,
        badge: selectedPatient ? "1" : null
      },
      {
        label: "Recent Patients",
        icon: "fas fa-clock",
        content: <RecentPatientsContent />,
        badge: recentPatients.length > 0 ? recentPatients.length.toString() : null
      }
    ];
  }, [selectedPatient, recentPatients, searchQuery, searchError, activeTab, doctorNotes]);

  return (
    <div className="hospital-doctor-dashboard">
      <div className="container-fluid">
        <div className="dashboard-header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="welcome-section">
                <h2 className="mb-1">Welcome, {doctorData.name}</h2>
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

        <div className="row mb-4">
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users text-primary"></i>
              </div>
              <div className="stat-content">
                <h3>{doctorData.patientsToday}</h3>
                <p>Patients Today</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-check text-success"></i>
              </div>
              <div className="stat-content">
                <h3>{doctorData.appointmentsToday}</h3>
                <p>Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-file-medical text-warning"></i>
              </div>
              <div className="stat-content">
                <h3>5</h3>
                <p>Pending Reports</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-clock text-info"></i>
              </div>
              <div className="stat-content">
                <h3>2h</h3>
                <p>Avg. Consultation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <Tabs
            tabs={mainTabs}
            defaultActiveTab={mainTabIndex}
            onTabChange={(index) => setMainTabIndex(index)}
            variant="underline"
          />
        </div>
      </div>
    </div>
  );
};

export default HospitalDoctorDashboard;

