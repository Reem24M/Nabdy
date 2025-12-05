import { useState } from "react";
import {
  Menu,
  X,
  Siren,
  LogOut,
  User,
  Settings,
  LayoutDashboardIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { role, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinksGuest = [
    { name: "Features", action: () => scrollToSection("features") },
    { name: "How It Works", action: () => scrollToSection("how-it-works") },
    { name: "Security", action: () => scrollToSection("security") },
  ];

  const dashboardLink = {
    doctor: "/doctor/dashboard",
    patient: "/patient/dashboard",
    labDoctor: "/labDoctor/dashboard",
  }[role];

  const roleDisplayNames = {
    doctor: "Doctor",
    patient: "Patient",
    labDoctor: "Lab Doctor",
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0A1A3A] to-[#11294B] border-b border-gray-800/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4">
            {role === "guest" ? (
              <>
                {navLinksGuest.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 !rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => navigate("/auth/login")}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#169CF6] to-[#0B5AA8] text-white !rounded-lg font-medium hover:shadow-lg hover:shadow-[#169CF6]/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                >
                  Login / Register
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2 bg-white/5 !rounded-lg p-1">
                <button
                  onClick={() => navigate(dashboardLink)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                >
                  <LayoutDashboardIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </button>
                {role !== "patient" && (
                  <button
                    onClick={() => navigate(`/${role}/profile`)}
                    className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                  >
                    <User className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </button>
                )}
                <button
                  onClick={() => navigate(`/${role}/settings`)}
                  className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                >
                  <Settings className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300 group"
                >
                  <LogOut className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 !rounded-lg transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div className="lg:hidden fixed inset-0 z-40 pointer-events-none">
        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute right-0 top-0 w-64 h-full bg-[#0A1A3A] border-l border-gray-700 !rounded-l-lg shadow-lg p-4 flex flex-col gap-3
          transition-transform duration-300 pointer-events-auto
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {role === "guest" ? (
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
              <button
                onClick={() => {
                  navigate("/auth/login");
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 bg-[#169CF6] text-white !rounded-lg text-sm font-medium hover:bg-[#1285D6] transition-colors"
              >
                Login / Register
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 bg-white/5 !rounded-lg p-3">
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

              <button
                onClick={() => {
                  navigate(dashboardLink);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 !rounded-lg text-sm transition-colors"
              >
                <LayoutDashboardIcon className="w-4 h-4" />
                Dashboard
              </button>

              {role !== "patient" && (
                <button
                  onClick={() => {
                    navigate(`/${role}/profile`);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 !rounded-lg text-sm transition-colors"
                >
                  <User className="w-4 h-4" />
                  Profile
                </button>
              )}

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

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 !rounded-lg text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
