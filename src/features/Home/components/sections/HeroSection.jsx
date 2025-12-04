import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Siren } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { role } = useAuth()
  const handleGetStarted = () => {
    if (role === "guest") navigate("/auth/login");
    else if (role === "doctor") navigate("/doctor/dashboard");
    else if (role === "patient") navigate("/patient/dashboard");
    else if (role === "lab-doctor") navigate("/lab-doctor/dashboard");
    else navigate("/auth/login"); // fallback
  };
  return (
    <section className="min-h-screen sm:bg-orange-300 flex items-center relative overflow-hidden" style={{ backgroundColor: '#0A1A3A' }}>
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6' }}></div>
      <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
    </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 flex items-center space-x-3 animate-fade-in-up">
              <Siren className="h-10 w-10 text-[#169CF6] " />
              <span className="text-white underline decoration-sky-500">Nabdy</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Unified Digital Health Records
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up" style={{ color: '#B8C2CC', animationDelay: '0.4s' }}>
              Revolutionizing healthcare with a comprehensive digital health
              record system that connects patients, doctors, and medical
              facilities seamlessly.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-lock text-white"></i>
                </div>
                <span className="font-semibold">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.7s' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-bolt text-white"></i>
                </div>
                <span className="font-semibold">Instant Access</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-hospital text-white"></i>
                </div>
                <span className="font-semibold">Connected Healthcare</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetStarted}
                className="!no-underline inline-flex items-center justify-center p-3 text-white font-bold !rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-100 hover:shadow-2xl animate-fade-in-up relative overflow-hidden group"
                style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}
              >
                <span className="relative z-10">Get Started</span>
                <i className="fas fa-arrow-right ml-3 relative z-10"></i>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/20 rounded-3xl"></div>
              <div
                className="relative p-12 rounded-3xl text-center border-2 backdrop-blur-sm animate-fade-in-up"
                style={{ borderColor: '#169CF6', backgroundColor: 'rgba(10, 26, 58, 0.8)', animationDelay: '0.3s' }}
              >
                <div className="text-8xl mb-6 animate-pulse" style={{ color: '#169CF6', animationDelay: '1s' }}>
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your Health, Connected
                </h3>
                <p className="text-lg" style={{ color: '#B8C2CC' }}>
                  Secure digital records accessible anytime, anywhere
                </p>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-bounce flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-check text-white"></i>
                </div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full animate-bounce flex items-center justify-center" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}>
                  <i className="fas fa-check text-white"></i>
                </div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full animate-bounce flex items-center justify-center" style={{ backgroundColor: '#169CF6', animationDelay: '0.5s' }}>
                  <i className="fas fa-check text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
      .animate-fade-in-left { animation: fadeInLeft 0.6s ease-out forwards; opacity: 0; }
      .animate-float { animation: float 3s ease-in-out infinite; }
    `}</style>
    </section>
  );
};

export default HeroSection;
