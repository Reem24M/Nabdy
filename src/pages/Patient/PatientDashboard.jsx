import React, { useState } from 'react';
// import NotificationSystem from '../../components/NotificationSystem';
import Tabs, { PatientDashboardTabs } from '../../components/Tabs';
import './PatientDashboard.css';

import { patientRecords } from '../../data/patientData';

const PatientDashboard = () => {
  // const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const patient = patientRecords[0]; 

  // const handleMarkNotificationAsRead = (notificationId) => {
  //   setNotifications(prev => 
  //     prev.map(notification => 
  //       notification.id === notificationId 
  //         ? { ...notification, isRead: true }
  //         : notification
  //     )
  //   );
  // };

  // const handleDeleteNotification = (notificationId) => {
  //   setNotifications(prev => 
  //     prev.filter(notification => notification.id !== notificationId)
  //   );
  // };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  
  const OverviewContent = ({ patient }) => (
    <div className="dashboard-overview">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                <i className="fas fa-chart-line me-2"></i>
                Health Overview
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {patient.overviewMetrics.map((metric) => (
                  <div key={metric.id} className="col-md-6">
                    <div className="health-metric">
                      <div className="metric-icon">
                        <i className={`${metric.icon} text-${metric.statusVariant === 'success' ? 'danger' : 'warning'}`}></i>
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
            <div className="card-header">
              <h5 className="mb-0">
                <i className="fas fa-calendar-alt me-2"></i>
                Upcoming Appointments
              </h5>
            </div>
            <div className="card-body">
              {patient.appointments.slice(0, 2).map(appointment => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MedicalHistoryContent = ({ patient }) => (
    <div className="medical-history">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">
            <i className="fas fa-history me-2"></i>
            Medical Timeline
          </h5>
        </div>
        <div className="card-body">
          <div className="timeline">
            {patient.timeline.map(item => (
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
                  <span className={`badge badge-${item.status === 'completed' ? 'success' : 'primary'}`}>
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

  const LabResultsContent = ({ patient }) => (
    <div className="lab-results">
      {patient.labResults.map(result => (
        <div key={result.id} className="card mb-4">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{result.testName}</h5>
              <div>
                <span className="badge bg-secondary me-2">{result.date}</span>
                <span className={`badge ${result.status === 'normal' ? 'bg-success' : 'bg-warning'}`}>
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
                      <td><strong>{test.value}</strong></td>
                      <td>{test.normal}</td>
                      <td>
                        <i className={`fas fa-circle text-${test.value < test.normal ? 'success' : 'warning'}`}></i>
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

  const PrescriptionsContent = ({ patient }) => (
    <div className="prescriptions">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">
            <i className="fas fa-prescription-bottle me-2"></i>
            Current Prescriptions
          </h5>
        </div>
        <div className="card-body">
          {patient.prescriptions.map(prescription => (
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
                  <span className={`badge ${prescription.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
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

  const AppointmentsContent = ({ patient }) => (
    <div className="appointments">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">
            <i className="fas fa-calendar-alt me-2"></i>
            All Appointments
          </h5>
        </div>
        <div className="card-body">
          {patient.appointments.map(appointment => (
            <div key={appointment.id} className="appointment-card">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="appointment-date-badge">
                    <span className="day">{new Date(appointment.date).getDate()}</span>
                    <span className="month">{new Date(appointment.date).toLocaleDateString('en-US', { month: 'short' })}</span>
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
                  <span className={`badge ${appointment.status === 'scheduled' ? 'bg-success' : 'bg-secondary'}`}>
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

  // Configure tabs with content
  const tabsWithContent = PatientDashboardTabs.map((tab, index) => ({
    ...tab,
    content: (() => {
      switch (index) {
        case 0: return <OverviewContent patient={patient} />;
        case 1: return <MedicalHistoryContent patient={patient} />;
        case 2: return <LabResultsContent patient={patient} />;
        case 3: return <PrescriptionsContent patient={patient} />;
        case 4: return <AppointmentsContent patient={patient} />;
        default: return <OverviewContent patient={patient} />;
      }
    })()
  }));

  return (
    <div className="patient-dashboard">
      <div className="container-fluid">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="welcome-section">
                <h2 className="mb-1">Welcome back, {patient.name}!</h2>
                <p className="text-muted mb-0">
                  Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
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
        <div className="patient-summary-card card mb-4">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="patient-avatar me-3">
                    <i className="fas fa-user-circle"></i> 
                  </div>
                  <div>
                    <h4 className="mb-1">{patient.name}</h4>
                    <div className="patient-meta">
                      <span className="badge bg-primary me-2">
                        National ID: {patient.nationalId}
                      </span>
                      <span className="badge bg-secondary me-2">
                        Hospital No: {patient.hospitalNumber}
                      </span>
                      <span className="badge bg-success">{patient.status}</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <small className="text-muted d-block">Age / Gender</small>
                    <span>
                      {patient.age} • {patient.gender}
                    </span>
                  </div>
                  <div className="col-md-4">
                    <small className="text-muted d-block">Blood Type</small>
                    <span>{patient.bloodType}</span>
                  </div>
                  <div className="col-md-4">
                    <small className="text-muted d-block">Contact</small>
                    <span>{patient.contactNumber}</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <small className="text-muted d-block">Last Visit</small>
                    <span>{new Date(patient.lastVisit).toLocaleDateString()}</span>
                  </div>
                  <div className="col-md-6">
                    <small className="text-muted d-block">Next Appointment</small>
                    <span>
                      {new Date(patient.nextAppointment).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="patient-summary-right">
                  <div className="mb-3">
                    <strong>Chronic Conditions</strong>
                    <div className="mt-2">
                      {patient.chronicConditions.map((condition, index) => (
                        <span key={index} className="badge bg-info me-2 mb-2">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <strong>Emergency Contact</strong>
                    <div className="mt-2">
                      <p className="mb-1">{patient.emergencyContact.name}</p>
                      <small className="text-muted d-block">
                        {patient.emergencyContact.relationship}
                      </small>
                      <span>{patient.emergencyContact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="dashboard-content">
          <Tabs 
            tabs={tabsWithContent}
            defaultActiveTab={activeTab}
            onTabChange={handleTabChange}
            variant="underline"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;