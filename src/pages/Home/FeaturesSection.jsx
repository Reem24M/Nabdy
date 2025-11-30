import React from "react";
import { User, Stethoscope, Home } from "lucide-react";

const FeaturesSection = () => (
  <section className="features-section py-20 relative overflow-hidden" style={{ backgroundColor: '#0A1A3A' }}>
    {/* Animated Background */}
    {/* <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6' }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-10 right-1/4 w-18 h-18 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '0.5s' }}></div>
    </div> */}

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">Why Choose Nabdy?</h2>
        <p className="text-lg text-sky-400">
          Comprehensive healthcare management at your fingertips
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white">
            <User size={28} />
          </div>
          <h5 className="text-xl font-bold text-white mb-2">For Patients</h5>
          <p className="text-gray-300 mb-3 text-sm">
            Access your complete medical history, lab results, and prescriptions in one secure platform.
          </p>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
              Complete Medical Timeline
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
              Lab Results & Reports
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
              Prescription Management
            </li>
          </ul>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white">
            <Stethoscope size={28} />
          </div>
          <h5 className="text-xl font-bold text-white mb-2">For Doctors</h5>
          <p className="text-gray-300 mb-3 text-sm">
            Streamlined patient management with instant access to medical history.
          </p>
        <ul className="space-y-3 text-gray-300 text-sm">
  <li className="flex items-center">
    <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
    Patient Dashboard
  </li>
  <li className="flex items-center">
    <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
    Medical History Access
  </li>
</ul>

        </div>

        {/* Feature 3 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white">
            <Home size={28} />
          </div>
          <h5 className="text-xl font-bold text-white mb-2">For Medical Facilities</h5>
          <p className="text-gray-300 mb-3 text-sm">
            Integrated lab systems for efficient workflow and comprehensive patient care.
          </p>
          <ul className="space-y-3 text-gray-300 text-sm">
  <li className="flex items-center">
    <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
    Lab Management
  </li>
  <li className="flex items-center">
    <span className="inline-block w-3 h-3 mr-2 bg-sky-500 rounded-full flex-shrink-0"></span>
    Emergency Protocols
  </li>
</ul>

        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
