import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="cta-section py-5 bg-primary text-white">
    <div className="container text-center">
      <h2 className="mb-4">Ready to Transform Your Healthcare Experience?</h2>
      <p className="lead mb-4">
        Join thousands of patients and medical professionals who trust Nabdy for
        their digital health management needs.
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
);

export default CTASection;
