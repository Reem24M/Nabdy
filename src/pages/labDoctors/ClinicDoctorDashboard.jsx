import React, { useState } from 'react';
import NotificationSystem from '../components/NotificationSystem';
import Tabs, { DoctorDashboardTabs } from '../components/Tabs';

const ClinicDoctorDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="clinic-doctor-dashboard">
      <div className="container-fluid">
        <div className="dashboard-header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="welcome-section">
                <h2 className="mb-1">Welcome, Dr. Clinic Doctor</h2>
                <p className="text-muted mb-0">Clinic Practice • Private Clinic</p>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <NotificationSystem 
                notifications={notifications}
                onMarkAsRead={() => {}}
                onDeleteNotification={() => {}}
              />
            </div>
          </div>
        </div>
        
        <div className="dashboard-content">
          <div className="card">
            <div className="card-body text-center py-5">
              <i className="fas fa-stethoscope fa-3x text-primary mb-3"></i>
              <h4>Clinic Doctor Dashboard</h4>
              <p className="text-muted">Clinic-specific features and patient management tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDoctorDashboard;
