import React from "react";

const SecuritySection = () => (
  <section className="security-section py-20" style={{ backgroundColor: '#0A1A3A' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#169CF6' }}>Your Privacy & Security</h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#B8C2CC' }}>
            We prioritize the security and privacy of your medical information
            with industry-leading encryption and access controls.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#169CF6' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#169CF6' }}>End-to-End Encryption</h3>
                <p className="text-lg" style={{ color: '#B8C2CC' }}>
                  All data is encrypted using military-grade security protocols.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#169CF6' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#169CF6' }}>Role-Based Access</h3>
                <p className="text-lg" style={{ color: '#B8C2CC' }}>
                  Only authorized medical professionals can access your records.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#169CF6' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#169CF6' }}>HIPAA Compliant</h3>
                <p className="text-lg" style={{ color: '#B8C2CC' }}>
                  Fully compliant with international healthcare privacy standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/20 rounded-3xl"></div>
            <div 
              className="relative p-12 rounded-3xl text-center border-2 backdrop-blur-sm"
              style={{ 
                borderColor: '#169CF6',
                backgroundColor: 'rgba(10, 26, 58, 0.8)'
              }}
            >
              <div className="text-8xl mb-6" style={{ color: '#169CF6' }}>
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Maximum Security
              </h3>
              <p className="text-lg" style={{ color: '#B8C2CC' }}>
                Your health data is protected with the highest security standards
              </p>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full" style={{ backgroundColor: '#169CF6' }}></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full" style={{ backgroundColor: '#169CF6' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full" style={{ backgroundColor: '#169CF6' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection;