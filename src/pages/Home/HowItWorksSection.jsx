import React from "react";
import { UserPlus, Link2, Eye, Settings } from "lucide-react";

const HowItWorksSection = () => (
  <section className="how-it-works-section py-20 relative overflow-hidden" style={{ backgroundColor: '#0A1A3A' }}>
    {/* Animated Background Elements Only */}
    {/* <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6' }}></div>
      <div className="absolute top-1/4 right-20 w-12 h-12 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-14 h-14 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1.5s' }}></div>
    </div> */}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">How It Works</h2>
        <p className="text-lg text-sky-400">Simple steps to better healthcare management</p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
            <UserPlus size={28} />
          </div>
          <div className="text-sky-300 font-bold text-xl mb-2">1. Register</div>
          <p className="text-gray-300 text-sm">
            Create your account with your national ID for secure access.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
            <Link2 size={28} />
          </div>
          <div className="text-sky-300 font-bold text-xl mb-2">2. Connect</div>
          <p className="text-gray-300 text-sm">
            Link your medical records from hospitals and clinics.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
            <Eye size={28} />
          </div>
          <div className="text-sky-300 font-bold text-xl mb-2">3. Access</div>
          <p className="text-gray-300 text-sm">
            View your complete medical history anytime, anywhere.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-[#11294B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
            <Settings size={28} />
          </div>
          <div className="text-sky-300 font-bold text-xl mb-2">4. Manage</div>
          <p className="text-gray-300 text-sm">
            Keep track of appointments, medications, and health updates.
          </p>
        </div>
      </div>
    </div>
        {/* Animated Background Elements */}
    {/* <div className="absolute inset-0 overflow-hidden">
    
      <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
    </div> */}
  </section>
);

export default HowItWorksSection;