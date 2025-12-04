// import React, { useState } from 'react';
import { Menu, X, Siren, LogOut, User, Settings, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { role, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // setIsOpen(false);
    navigate('/');
  };

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      // setIsOpen(false);
    }
  };

  // روابط الزوار
  const navLinksGuest = [
    { name: 'Features', action: () => scrollToSection('features') },
    { name: 'How It Works', action: () => scrollToSection('how-it-works') },
    { name: 'Security', action: () => scrollToSection('security') },
  ];

  // روابط الداشبورد لكل دور
  const dashboardLink = {
    doctor: '/doctor/dashboard',
    patient: '/patient/dashboard',
    labDoctor: '/labDoctor/dashboard',
  }[role];

  // أسماء الأدوار للعرض
  const roleDisplayNames = {
    doctor: 'Doctor',
    patient: 'Patient',
    labDoctor: 'Lab Doctor',
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0A1A3A] to-[#11294B] border-b border-gray-800/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Left Side */}
          <div className="flex items-center gap-8">
            <a 
              href="/" 
              className="flex items-center gap-3 group transition-all duration-300"
            >
              <div className="relative">
                <Siren className="h-8 w-8 text-[#169CF6] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-[#169CF6]/10 blur-md group-hover:bg-[#169CF6]/20 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Nabdy
              </span>
            </a>

         
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-3">
            
            {role === 'guest' ? (
            
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-1">
                  {navLinksGuest.map((link) => (
                    <button
                      key={link.name}
                      onClick={link.action}
                      className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 !rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/auth/login')}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#169CF6] to-[#0B5AA8] text-white !rounded-lg font-medium hover:shadow-lg hover:shadow-[#169CF6]/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                >
                  Login / Register
                </button>
              </div>
            ) : (
              
              <div className="flex items-center gap-3">
                {/* Dashboard Button */}
                <button
                  onClick={() => navigate(dashboardLink)}
                  className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                >
                  <Home className="w-4 h-4 text-gray-300 group-hover:text-white" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    Dashboard
                  </span>
                </button>

                {/* User Profile & Settings */}
                <div className="flex items-center gap-1 bg-white/5 !rounded-lg p-1">
                  {/* User Profile */}
                 {(role !== 'guest' && role !== 'patient') &&<button
                    onClick={() => navigate(`/${role}/profile`)}
                    className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group relative"
                    title={`${roleDisplayNames[role] || role} Profile`}
                  >
                    <User className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 !rounded-full border border-white"></span>
                  </button>}

                  {/* Settings */}
                  <button
                    onClick={() => navigate(`/${role}/settings`)}
                    className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                    title="Settings"
                  >
                    <Settings className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </button>
   {/* Logout - كجزء من المجموعة */}
                  <button
                    onClick={handleLogout}
                    className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </button>
                </div>

              
                {/* <div className="md:hidden flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/${role}/profile`)}
                    className="p-2 hover:bg-white/10 !rounded-lg"
                  >
                    <User className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate(`/${role}/settings`)}
                    className="p-2 hover:bg-white/10 !rounded-lg"
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 hover:bg-white/10 !rounded-lg"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div> */}
              </div>
            )}

            {/* Mobile Menu Button */}
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 !rounded-lg transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button> */}
          </div>
        </div>
      </div>
{/* 
  {isOpen && (
  <div className="md:hidden">
 
    <div 
      className="fixed inset-0 bg-black/40"
      onClick={() => setIsOpen(false)}
    />
    
   
    <div className="fixed right-4 top-20 w-64 bg-[#0A1A3A] border border-gray-700 !rounded-lg shadow-lg">
      <div className="p-3 space-y-1">
        {role === 'guest' ? (
          
          <>
            {navLinksGuest.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 !rounded-lg text-sm transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-gray-700 pt-2 mt-2">
              <button
                onClick={() => {
                  navigate('/auth/login');
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 bg-[#169CF6] text-white !rounded-lg text-sm font-medium hover:bg-[#1285D6] transition-colors"
              >
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="px-4 py-3 bg-white/5 !rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#169CF6] !rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {roleDisplayNames[role] || role}
                  </div>
                  <div className="text-xs text-gray-400">Welcome</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                navigate(dashboardLink);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 !rounded-lg text-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              Dashboard
            </button>

            <button
              onClick={() => {
                navigate(`/${role}/profile`);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 !rounded-lg text-sm transition-colors"
            >
              <User className="w-4 h-4" />
              My Profile
            </button>

            <button
              onClick={() => {
                navigate(`/${role}/settings`);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 !rounded-lg text-sm transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>

            <div className="border-t border-gray-700 pt-2 mt-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 !rounded-lg text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
)} */}
    </nav>
  );
}