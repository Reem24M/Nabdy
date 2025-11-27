import React from "react";

const SecuritySection = () => (
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
                <p>
                  All data is encrypted using military-grade security protocols.
                </p>
              </div>
            </div>
            <div className="security-item">
              <i className="fas fa-user-shield text-success"></i>
              <div>
                <h6>Role-Based Access</h6>
                <p>
                  Only authorized medical professionals can access your records.
                </p>
              </div>
            </div>
            <div className="security-item">
              <i className="fas fa-certificate text-warning"></i>
              <div>
                <h6>HIPAA Compliant</h6>
                <p>
                  Fully compliant with international healthcare privacy
                  standards.
                </p>
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
);

export default SecuritySection;
