
'use client';

import React, { useState } from 'react';
import { Menu, X, Siren } from 'lucide-react'; // Optional: using lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {name: 'Login/Register', href: '/auth/login' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <Siren className="h-8 w-8 text-red-600" />
                <span className="text-2xl font-bold text-gray-900">Nabdy</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:bg-blue-200 px-4 py-2 rounded-2xl font-medium transition duration-200"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Emergency Button */}
              <a
                href="/emergency"
                className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition shadow-md flex items-center gap-2"
              >
                <Siren className="h-5 w-5" />
                Emergency
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/emergency"
                className="block px-3 py-3 mt-4 bg-red-600 text-white text-center rounded-full font-bold hover:bg-red-700 transition mx-4"
                onClick={() => setIsOpen(false)}
              >
                Emergency Help
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
