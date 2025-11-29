import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  HeartPulse,
  Siren,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A1A3A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Siren className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-white">Nabdy</span>
            </a>
          </div>
          <p className="text-gray-300 pt-6 leading-relaxed">
            A comprehensive medical platform connecting doctors and patients.
            Manage your health records easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li
              className="hover:text-white transition cursor-pointer"
              onClick={() => scrollToSection("features")}
            >
              Features
            </li>
            <li
              className="hover:text-white transition cursor-pointer"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </li>
            <li
              className="hover:text-white transition cursor-pointer"
              onClick={() => scrollToSection("security")}
            >
              Security
            </li>
            <li
              className="hover:text-white transition cursor-pointer"
              onClick={() => scrollToSection("cta")}
            >
              CTA
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +1 (234) 567-890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@medicare.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} />
              25 Downtown Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Customer Support: 24/7
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-gray-400 text-sm">© 2025 MediCare. All Rights Reserved.</p>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Facebook className="hover:text-blue-400 cursor-pointer" size={20} />
          <Linkedin className="hover:text-blue-400 cursor-pointer" size={20} />
          <Instagram className="hover:text-pink-400 cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  );
}
