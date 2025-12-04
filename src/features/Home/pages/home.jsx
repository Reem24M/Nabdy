import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import SecuritySection from "../components/sections/SecuritySection";
import CTASection from "../components/sections/CTASection";
import "./home.css";
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
