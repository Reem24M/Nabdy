import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import SecuritySection from "./SecuritySection";
import CTASection from "./CTASection";
import "./LandingPage.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // بعد ما نعمل scroll، نمسح state عشان ما يكررش
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="landing-page">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="security">
        <SecuritySection />
      </div>
      <CTASection />
    </div>
  );
};

export default LandingPage;
