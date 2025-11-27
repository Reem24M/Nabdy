import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import SecuritySection from "./SecuritySection";
import CTASection from "./CTASection";
import "./LandingPage.css";
import BGimg from '../../../public/bg.jpg'
const LandingPage = () => {
  return (
    <div className="landing-page" >
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      {/* <CTASection /> */}
    </div>
  );
};

export default LandingPage;
