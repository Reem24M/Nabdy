import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#0A1A3A' }}>
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
       
        <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-32 h-32 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '2s' }}></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white animate-fade-in-up">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="text-xl leading-relaxed animate-fade-in-up" style={{ color: '#B8C2CC', animationDelay: '0.2s' }}>
                Join thousands of doctors and patients who are already benefiting from our
                secure, efficient, and patient-centered platform.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-calendar-check text-white"></i>
                </div>
                <span className="font-semibold text-white">Streamlined Appointments</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-lock text-white"></i>
                </div>
                <span className="font-semibold text-white">Secure Messaging</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-notes-medical text-white"></i>
                </div>
                <span className="font-semibold text-white">Digital Health Records</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/auth/login"
                className="inline-flex items-center justify-center p-3 text-white font-bold !rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-100 hover:shadow-2xl !no-underline animate-fade-in-up relative overflow-hidden group "
                style={{ backgroundColor: '#169CF6', animationDelay: '0.8s' }}
              >
                <span className="relative z-10">Get Started</span>
                <i className="fas fa-arrow-right ml-3"></i>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t animate-fade-in-up" style={{ borderColor: '#169CF6', animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm mt-1" style={{ color: '#B8C2CC' }}>Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm mt-1" style={{ color: '#B8C2CC' }}>Verified Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm mt-1" style={{ color: '#B8C2CC' }}>Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md text-center border-2" style={{ borderColor: '#169CF6' }}>
                <div className="text-6xl mb-4" style={{ color: '#169CF6' }}>
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A1A3A' }}>Connected Healthcare</h3>
                <p className="text-lg" style={{ color: '#0A1A3A' }}>
                  Doctors, Patients & Medical Facilities
                </p>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce flex items-center justify-center" style={{ backgroundColor: '#169CF6' }}>
                  <i className="fas fa-check text-white"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-bounce flex items-center justify-center" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}>
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

export default CTASection;
