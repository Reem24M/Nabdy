import React from 'react';
import EmergencyCard from '../components/EmergencyCard';

const EmergencyPage = () => {
  return (
    <div className="emergency-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="emergency-header text-center mb-5">
              <h1 className="display-4 text-danger mb-3">
                <i className="fas fa-exclamation-triangle me-3"></i>
                Emergency Access
              </h1>
              <p className="lead">
                Quick access to emergency medical information and contacts
              </p>
            </div>
            
            <EmergencyCard />
            
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="card emergency-contact-card">
                  <div className="card-header bg-danger text-white">
                    <h5 className="mb-0">
                      <i className="fas fa-phone me-2"></i>
                      Emergency Contacts
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="contact-item">
                      <h6>Emergency Services</h6>
                      <p className="mb-1">123 - General Emergency</p>
                      <p className="mb-1">125 - Ambulance</p>
                      <p className="mb-0">126 - Fire Department</p>
                    </div>
                    <hr />
                    <div className="contact-item">
                      <h6>Medical Emergency</h6>
                      <p className="mb-1">+20 2 1234 5678 - Cairo Medical Center</p>
                      <p className="mb-1">+20 2 2345 6789 - Emergency Hospital</p>
                      <p className="mb-0">+20 2 3456 7890 - Heart Institute</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card emergency-info-card">
                  <div className="card-header bg-warning text-dark">
                    <h5 className="mb-0">
                      <i className="fas fa-info-circle me-2"></i>
                      Emergency Information
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="info-item">
                      <h6>What to do in an emergency:</h6>
                      <ul className="mb-3">
                        <li>Call emergency services immediately</li>
                        <li>Provide your location clearly</li>
                        <li>Stay calm and follow instructions</li>
                        <li>Have your emergency card ready</li>
                      </ul>
                    </div>
                    <div className="info-item">
                      <h6>Important Notes:</h6>
                      <ul className="mb-0">
                        <li>Keep emergency contacts updated</li>
                        <li>Carry your emergency card at all times</li>
                        <li>Inform emergency responders of allergies</li>
                        <li>Know your blood type and medications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;
