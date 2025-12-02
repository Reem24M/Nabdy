import React, { useState } from 'react';
import { Menu, X, Siren, LogOut, User, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const navigate = useNavigate();
  const { role, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    setShowUserCard(false);
    navigate('/');
  };

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const getUserStatus = () => {
    switch (role) {
      case 'patient': return { status: 'Online', color: '#10B981' };
      case 'doctor': return { status: 'Busy', color: '#F59E0B' };
      case 'lab-doctor': return { status: 'Available', color: '#3B82F6' };
      default: return { status: 'Online', color: '#10B981' };
    }
  };

  const navLinks =
    role === 'guest'
      ? [
        { name: 'Features', action: () => scrollToSection('features') },
        { name: 'How It Works', action: () => scrollToSection('how-it-works') },
        { name: 'Security', action: () => scrollToSection('security') },
      ]
      : role === 'doctor'
        ? [{ name: 'Doctor Dashboard', href: '/doctor/dashboard' }]
        : role === 'patient'
          ? [{ name: 'Patient Dashboard', href: '/patient/dashboard' }]
          : role === 'lab-doctor'
            ? [{ name: 'Lab Dashboard', href: '/lab/dashboard' }]
            : [];

  const getUserName = () => {
    switch (role) {
      case 'patient': return 'Omar Patient';
      case 'doctor': return 'Dr. Mohammed';
      case 'lab-doctor': return 'Dr. Anas';
      default: return 'Guest User';
    }
  };

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="glass-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <Siren className="h-9 w-9 text-[#169CF6] drop-shadow-lg animate-pulse" />
                <span className="text-2xl font-bold text-white tracking-tight">Nabdy</span>
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="!no-underline px-5 py-2.5 !rounded-lg text-white hover:text-white hover:bg-white/5 transition-all duration-300 font-medium text-sm"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="px-5 py-2.5 text-white/90 !rounded-lg hover:text-white hover:bg-white/5 transition-all duration-300 font-medium text-sm"
                  >
                    {link.name}
                  </button>
                )
              )}
               {/* User Profile */}
              {role !== 'guest' && (
                <div className="relative mr-10">
                  <button
                    onClick={() => setShowUserCard(!showUserCard)}
                    className="font-medium flex items-center gap-3"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 !rounded-full border-2 flex items-center justify-center bg-[#0A1A3A]">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5">
                        <Circle
                          className="h-3 w-3"
                          fill={getUserStatus().color}
                          stroke="white"
                          strokeWidth="2"
                        />
                      </div>
                    </div>
                    <span className="hidden lg:inline">{getUserName()}</span>
                  </button>

                  {showUserCard && (
                    <div className="absolute  mt-3 w-72 bg-[#0A1A3A]/95 backdrop-blur-xl 
                                    p-5 rounded-2xl shadow-xl border border-white/10 animate-fade-in z-50">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#169CF6] to-[#0A1A3A] flex items-center justify-center shadow-md">
                            <User className="h-7 w-7 text-white" />
                          </div>
                          <div className="absolute bottom-0 right-0">
                            <Circle
                              className="h-4 w-4"
                              fill={getUserStatus().color}
                              stroke="white"
                              strokeWidth="2"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">{getUserName()}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Circle className="h-2 w-2" fill={getUserStatus().color} />
                            <span className="text-sm text-white/80">{getUserStatus().status}</span>
                          </div>
                          <span className="text-xs text-white/60 capitalize block mt-1">{role.replace('-', ' ')}</span>
                        </div>
                      </div>

                      {/* User Actions */}
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            navigate(`/${role}/profile`);
                            setShowUserCard(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-white/85 hover:bg-white/10 !rounded-lg transition-all duration-200 text-sm hover:translate-x-1"
                        >
                          View Profile
                        </button>

                        <button
                          onClick={() => {
                            navigate(`/${role}/settings`);
                            setShowUserCard(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-white/85 hover:bg-white/10 !rounded-lg transition-all duration-200 text-sm hover:translate-x-1"
                        >
                          Settings
                        </button>

                        {/* Logout */}
                        <div className="border-t border-white/10 pt-3">
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 !rounded-lg font-medium transition-all duration-300 text-sm bg-[#169CF6] text-white hover:bg-[#1285D6] hover:shadow-lg"
                          >
                            <LogOut className="h-4 w-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* Login/Register or Logout */}
              <div>
                {role === 'guest' ? (
                  <button
                    onClick={() => navigate('/auth/login')}
                    className="px-3 py-1.5 bg-[#169CF6] text-white !rounded-lg font-medium hover:bg-[#1285D6] transition-all duration-200 text-sm"
                  >
                    Login / Register
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2.5 bg-[#169CF6] text-white !rounded-lg font-medium hover:bg-[#1285D6] transition-all duration-200 text-sm"
                  >
                    Logout
                  </button>
                )}
              </div>

             
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 glass-card hover:bg-white/10 transition-all rounded-lg"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-4 mt-2">
          <div className="glass-dropdown p-5 space-y-2">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg font-medium transition-all text-sm"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg font-medium transition-all text-sm"
                >
                  {link.name}
                </button>
              )
            )}

            {/* Mobile User Info */}
            {role !== 'guest' && (
              <>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#169CF6] to-[#0A1A3A]">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute bottom-0 right-0">
                        <Circle
                          className="h-3 w-3"
                          fill={getUserStatus().color}
                          stroke="white"
                          strokeWidth="2"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{getUserName()}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Circle className="h-2 w-2" fill={getUserStatus().color} />
                        <span className="text-xs text-white/80">{getUserStatus().status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 py-3.5 rounded-lg font-bold text-white flex items-center justify-center gap-3 transition-all text-sm"
                  style={{ backgroundColor: '#169CF6' }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#1285D6')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#169CF6')}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
