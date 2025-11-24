import React, { useState } from 'react';
import NotificationSystem from '../components/NotificationSystem';
import Tabs, { LabDashboardTabs } from '../components/Tabs';

const LabDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="lab-dashboard">
      <div className="container-fluid">
        <div className="dashboard-header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="welcome-section">
                <h2 className="mb-1">Welcome, Lab Technician</h2>
                <p className="text-muted mb-0">Laboratory • Cairo Medical Center</p>
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
              <i className="fas fa-microscope fa-3x text-primary mb-3"></i>
              <h4>Laboratory Dashboard</h4>
              <p className="text-muted">Lab test management and result processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
