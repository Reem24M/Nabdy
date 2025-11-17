import React, { useEffect } from 'react'
import HeroSection from "./HeroSection/HeroSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import HowItWorksSection from "./HowItWorks/HowItWorksSection";
import SecuritySection from "./SecuritySection/SecuritySection";
import CTASection from "./CTASection/CTASection";
import "./home.css";
export default function Home() {
  useEffect(() => {
    localStorage.setItem('role', 'guest');
  }, [])
  return (
    <div>
      <div className="landing-page">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SecuritySection />
        <CTASection />
      </div>
    </div>
  )
}
