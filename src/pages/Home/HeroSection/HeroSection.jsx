import React from "react";
import { Link } from "react-router-dom";
import './herosection.css'

const HeroSection = () => (
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center min-vh-100">
        {/* Left Content */}
        <div className="col-lg-6">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="text-primary">Nabdy</span>
              <br />
              Unified Digital Health Records
            </h1>
            <p className="hero-subtitle">
              Revolutionizing healthcare with a comprehensive digital health
              record system that connects patients, doctors, and medical
              facilities seamlessly.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <i className="fas fa-shield-alt"></i>
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
              <Link to="/login" className="btn btn-primary btn-lg">
                <i className="fas fa-sign-in-alt me-2"></i>
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6">
          <div className="hero-image">
            <div className="health-illustration">
              <img src="../../../../logo.png" alt="Health Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
