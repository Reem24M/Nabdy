
import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Ambulance, 
  Heart, 
  Shield, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Emergency Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Ambulance className="h-20 w-20 text-red-500" />
            <h1 className="text-2xl font-bold">MediCare Hospital</h1>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            24/7 Emergency Care • Advanced Medical Technology • Compassionate Healthcare
          </p>

          {/* Emergency Hotline Box */}
          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 mt-6">
            <div className="flex items-center gap-3">
              <Heart className="h-10 w-10 text-red-500 animate-pulse" />
              <div>
                <p className="text-xs text-gray-400">Emergency Hotline</p>
                <p className="text-xl font-bold text-white">16666</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" />
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Our Services" },
              { to: "/doctors", label: "Find a Doctor" },
              { to: "/appointment", label: "Book Appointment" },
              { to: "/emergency", label: "Emergency Help" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className=" hover:text-white transition-colors duration-200 flex items-center gap-2 text-md text-white no-underline font-semibold "
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-400" />
            Departments
          </h3>
          <ul className="space-y-3 text-sm text-gray-300 hover:cursor-pointer">
            <li className="hover:text-white transition">Emergency Care</li>
            <li className="hover:text-white transition">Cardiology</li>
            <li className="hover:text-white transition">Neurology</li>
            <li className="hover:text-white transition">Pediatrics</li>
            <li className="hover:text-white transition">Orthopedics</li>
            <li className="hover:text-white transition">ICU & Critical Care</li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-400" />
            Contact & Hours
          </h3>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
              <span>New Cairo, 5th Settlement<br />Cairo, Egypt</span>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 text-green-400" />
              <div>
                <p>+20 2 2615 0000</p>
                <p className="text-red-400 font-semibold">Emergency: 16666</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <span>info@medicarehospital.com</span>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span>24 Hours Open • 365 Days</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-blue-600 transition transform hover:scale-110"
                aria-label="Social media"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 border-t border-gray-800 py-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6  flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} MediCare Hospital. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="text-white transition">Terms of Service</Link>
            <Link to="/sitemap" className="text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


