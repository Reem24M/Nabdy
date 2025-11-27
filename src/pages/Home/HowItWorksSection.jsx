import React from "react";

const HowItWorksSection = () => (
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
);

export default HowItWorksSection;
