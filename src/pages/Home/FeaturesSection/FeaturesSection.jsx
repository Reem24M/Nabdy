import React from "react";
import './features.css'
const FeaturesSection = () => (
  <section className="features-section py-5">
    <div className="container">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h2 className="section-title">Why Choose Nabdy?</h2>
          <p className="section-subtitle">
            Comprehensive healthcare management at your fingertips
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-user-md"></i>
            </div>
            <h5>For Patients</h5>
            <p>
              Access your complete medical history, lab results, prescriptions,
              and appointments in one secure platform.
            </p>
            <ul className="feature-list">
              <li>Complete Medical Timeline</li>
              <li>Lab Results & Reports</li>
              <li>Prescription Management</li>
              <li>Emergency Card</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-stethoscope"></i>
            </div>
            <h5>For Doctors</h5>
            <p>
              Streamlined patient management with instant access to medical
              history and seamless communication tools.
            </p>
            <ul className="feature-list">
              <li>Patient Dashboard</li>
              <li>Medical History Access</li>
              <li>Lab & Radiology Integration</li>
              <li>Appointment Scheduling</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-hospital"></i>
            </div>
            <h5>For Medical Facilities</h5>
            <p>
              Integrated lab and radiology systems for efficient workflow and
              comprehensive patient care.
            </p>
            <ul className="feature-list">
              <li>Lab Management</li>
              <li>Radiology Reports</li>
              <li>Emergency Protocols</li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
