import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="text-primary">OneHealth</span>
                  <br />
                  Unified Digital Health Records
                </h1>
                <p className="hero-subtitle">
                  Revolutionizing healthcare with a comprehensive digital health record system 
                  that connects patients, doctors, and medical facilities seamlessly.
                </p>
                <div className="hero-features">
                  <div className="feature-item">
                    <i className="fas fa-shield-alt text-primary"></i>
                    <span>Secure & Private</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-bolt text-warning"></i>
                    <span>Instant Access</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-users text-success"></i>
                    <span>Connected Healthcare</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <Link to="/login" className="btn btn-primary btn-lg me-3">
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Get Started
                  </Link>
                  <Link to="/emergency" className="btn btn-outline-danger btn-lg">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Emergency Access
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="health-illustration">
                  <i className="fas fa-heartbeat"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Why Choose OneHealth?</h2>
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
                  Integrated lab and radiology systems for efficient workflow 
                  and comprehensive patient care.
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

      {/* How It Works Section */}
      <section className="how-it-works-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                Simple steps to better healthcare management
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="step-card">
                <div className="step-number">1</div>
                <h5>Register</h5>
                <p>Create your account with your national ID for secure access.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="step-card">
                <div className="step-number">2</div>
                <h5>Connect</h5>
                <p>Link your medical records from hospitals and clinics.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="step-card">
                <div className="step-number">3</div>
                <h5>Access</h5>
                <p>View your complete medical history anytime, anywhere.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="step-card">
                <div className="step-number">4</div>
                <h5>Manage</h5>
                <p>Keep track of appointments, medications, and health updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Your Privacy & Security</h2>
              <p className="section-subtitle">
                We prioritize the security and privacy of your medical information 
                with industry-leading encryption and access controls.
              </p>
              <div className="security-features">
                <div className="security-item">
                  <i className="fas fa-lock text-primary"></i>
                  <div>
                    <h6>End-to-End Encryption</h6>
                    <p>All data is encrypted using military-grade security protocols.</p>
                  </div>
                </div>
                <div className="security-item">
                  <i className="fas fa-user-shield text-success"></i>
                  <div>
                    <h6>Role-Based Access</h6>
                    <p>Only authorized medical professionals can access your records.</p>
                  </div>
                </div>
                <div className="security-item">
                  <i className="fas fa-certificate text-warning"></i>
                  <div>
                    <h6>HIPAA Compliant</h6>
                    <p>Fully compliant with international healthcare privacy standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="security-illustration">
                <i className="fas fa-shield-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Transform Your Healthcare Experience?</h2>
          <p className="lead mb-4">
            Join thousands of patients and medical professionals who trust OneHealth 
            for their digital health management needs.
          </p>
          <div className="cta-actions">
            <Link to="/login" className="btn btn-light btn-lg me-3">
              <i className="fas fa-user-plus me-2"></i>
              Create Account
            </Link>
            <Link to="/login" className="btn btn-outline-light btn-lg">
              <i className="fas fa-sign-in-alt me-2"></i>
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
