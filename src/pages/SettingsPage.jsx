import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Save,
  Shield,
  Bell,
  Lock,
  Palette,
  Globe,
  CreditCard,
  Download,
  Upload,
  Eye,
  EyeOff,
  Key,
  Settings as SettingsIcon,
  Database,
  Calendar,
  MessageSquare,
  Zap,
  Moon,
  Sun
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function SettingsPage() {
  const { role, user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: user?.phone || "+1 (555) 123-4567",
    specialization: user?.specialization || "Cardiology",
    licenseId: user?.licenseId || "MED-12345",
    healthInfo: user?.healthInfo || "No allergies. Regular checkups.",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    language: "English",
    theme: "dark",
    notifications: true,
    twoFactor: false,
    emailNotifications: true,
    appointmentReminders: true,
    messageNotifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const saveChanges = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Saving:", formData);
    setIsSaving(false);
    // Show success message
    alert("Settings saved successfully!");
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: <User className="h-5 w-5" />, color: "#169CF6" },
    { id: "security", label: "Security", icon: <Lock className="h-5 w-5" />, color: "#EF4444" },
    { id: "preferences", label: "Preferences", icon: <Palette className="h-5 w-5" />, color: "#8B5CF6" },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" />, color: "#F59E0B" },
    { id: "billing", label: "Billing", icon: <CreditCard className="h-5 w-5" />, color: "#10B981" },
    { id: "data", label: "Data & Privacy", icon: <Shield className="h-5 w-5" />, color: "#3B82F6" },
  ];

  const getActiveTabColor = () => {
    const active = tabs.find(tab => tab.id === activeTab);
    return active ? active.color : "#169CF6";
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${getActiveTabColor()}20` }}>
                  <User className="h-6 w-6" style={{ color: getActiveTabColor() }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Profile Information</h3>
                  <p className="text-white/60">Update your personal details and role-specific information</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Full Name"
                name="name"
                icon={<User className="h-5 w-5" />}
                value={formData.name}
                onChange={handleChange}
                tabColor={getActiveTabColor()}
              />

              <Field
                label="Email Address"
                name="email"
                icon={<Mail className="h-5 w-5" />}
                value={formData.email}
                onChange={handleChange}
                type="email"
                tabColor={getActiveTabColor()}
              />

              <Field
                label="Phone Number"
                name="phone"
                icon={<Phone className="h-5 w-5" />}
                value={formData.phone}
                onChange={handleChange}
                tabColor={getActiveTabColor()}
              />

              {/* Role-specific fields */}
              {role === "doctor" && (
                <>
                  <Field
                    label="Specialization"
                    name="specialization"
                    icon={<Stethoscope className="h-5 w-5" />}
                    value={formData.specialization}
                    onChange={handleChange}
                    tabColor={getActiveTabColor()}
                  />
                  <Field
                    label="Medical License ID"
                    name="licenseId"
                    icon={<FlaskConical className="h-5 w-5" />}
                    value={formData.licenseId}
                    onChange={handleChange}
                    tabColor={getActiveTabColor()}
                  />
                </>
              )}

              {role === "lab-doctor" && (
                <Field
                  label="Laboratory ID"
                  name="licenseId"
                  icon={<FlaskConical className="h-5 w-5" />}
                  value={formData.licenseId}
                  onChange={handleChange}
                  tabColor={getActiveTabColor()}
                />
              )}

              {role === "patient" && (
                <div className="md:col-span-2">
                  <Field
                    label="Health Information"
                    name="healthInfo"
                    icon={<HeartPulse className="h-5 w-5" />}
                    value={formData.healthInfo}
                    onChange={handleChange}
                    multiline
                    tabColor={getActiveTabColor()}
                  />
                </div>
              )}
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${getActiveTabColor()}20` }}>
                  <Lock className="h-6 w-6" style={{ color: getActiveTabColor() }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Security Settings</h3>
                  <p className="text-white/60">Manage your password and security preferences</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: '#11294B' }}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Key className="h-5 w-5" style={{ color: getActiveTabColor() }} />
                  Change Password
                </h4>
                <div className="space-y-4">
                  <Field
                    label="Current Password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    showToggle
                    onToggle={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                    tabColor={getActiveTabColor()}
                  />
                  <Field
                    label="New Password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    tabColor={getActiveTabColor()}
                  />
                  <Field
                    label="Confirm New Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    tabColor={getActiveTabColor()}
                  />
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: '#11294B' }}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" style={{ color: getActiveTabColor() }} />
                  Two-Factor Authentication
                </h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Enable 2FA</p>
                    <p className="text-white/60 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <ToggleSwitch
                    name="twoFactor"
                    checked={formData.twoFactor}
                    onChange={handleChange}
                    color={getActiveTabColor()}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "preferences":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${getActiveTabColor()}20` }}>
                  <Palette className="h-6 w-6" style={{ color: getActiveTabColor() }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Preferences</h3>
                  <p className="text-white/60">Customize your app experience</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: '#11294B' }}>
                <Field
                  label="Language"
                  name="language"
                  icon={<Globe className="h-5 w-5" />}
                  value={formData.language}
                  onChange={handleChange}
                  select
                  options={["English", "Arabic", "French", "Spanish"]}
                  tabColor={getActiveTabColor()}
                />
              </div>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: '#11294B' }}>
                <h4 className="text-lg font-semibold text-white mb-4">Theme Preferences</h4>
                <div className="grid grid-cols-3 gap-4">
                  <ThemeOption
                    icon={<Moon className="h-6 w-6" />}
                    label="Dark"
                    active={formData.theme === "dark"}
                    onClick={() => setFormData({...formData, theme: "dark"})}
                  />
                  <ThemeOption
                    icon={<Sun className="h-6 w-6" />}
                    label="Light"
                    active={formData.theme === "light"}
                    onClick={() => setFormData({...formData, theme: "light"})}
                  />
                  <ThemeOption
                    icon={<SettingsIcon className="h-6 w-6" />}
                    label="System"
                    active={formData.theme === "system"}
                    onClick={() => setFormData({...formData, theme: "system"})}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${getActiveTabColor()}20` }}>
                  <Bell className="h-6 w-6" style={{ color: getActiveTabColor() }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Notification Settings</h3>
                  <p className="text-white/60">Choose what notifications you want to receive</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <NotificationToggle
                icon={<Mail className="h-5 w-5" />}
                label="Email Notifications"
                description="Receive updates via email"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
                color={getActiveTabColor()}
              />
              <NotificationToggle
                icon={<Calendar className="h-5 w-5" />}
                label="Appointment Reminders"
                description="Get reminded about upcoming appointments"
                name="appointmentReminders"
                checked={formData.appointmentReminders}
                onChange={handleChange}
                color={getActiveTabColor()}
              />
              <NotificationToggle
                icon={<MessageSquare className="h-5 w-5" />}
                label="New Messages"
                description="Notify me about new messages"
                name="messageNotifications"
                checked={formData.messageNotifications}
                onChange={handleChange}
                color={getActiveTabColor()}
              />
            </div>
          </div>
        );

      case "billing":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${getActiveTabColor()}20` }}>
                  <CreditCard className="h-6 w-6" style={{ color: getActiveTabColor() }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Billing & Subscription</h3>
                  <p className="text-white/60">Manage your subscription and payment methods</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#11294B' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white">Current Plan</h4>
                  <p className="text-white/60">Premium Plan - $29.99/month</p>
                </div>
                <button 
                  className="px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    backgroundColor: getActiveTabColor(),
                    color: 'white'
                  }}
                >
                  Upgrade Plan
                </button>
              </div>

              <div className="space-y-4">
                <InfoRow label="Next Billing Date" value="Jan 15, 2024" color={getActiveTabColor()} />
                <InfoRow label="Payment Method" value="•••• 4242" color={getActiveTabColor()} />
                <InfoRow label="Billing History" value={<span style={{ color: getActiveTabColor() }} className="hover:underline cursor-pointer">View All</span>} color={getActiveTabColor()} />
              </div>
            </div>
          </div>
        );

      case "data":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${getActiveTabColor()}20` }}>
                  <Shield className="h-6 w-6" style={{ color: getActiveTabColor() }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Data & Privacy</h3>
                  <p className="text-white/60">Manage your data and privacy settings</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ActionCard
                icon={<Download className="h-6 w-6" />}
                title="Download Your Data"
                description="Get a copy of your personal data"
                onClick={() => alert('Downloading data...')}
                color={getActiveTabColor()}
              />
              <ActionCard
                icon={<Database className="h-6 w-6" />}
                title="Clear Data"
                description="Remove all cached and temporary data"
                onClick={() => alert('Clearing data...')}
                color={getActiveTabColor()}
              />
              <ActionCard
                icon={<Upload className="h-6 w-6" />}
                title="Delete Account"
                description="Permanently delete your account and data"
                onClick={() => {
                  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                    alert('Account deletion requested...');
                  }
                }}
                color="#EF4444"
                isDanger
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ backgroundColor: '#0A1A3A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 rounded-xl" style={{ backgroundColor: '#11294B' }}>
              <SettingsIcon className="h-7 w-7 text-[#169CF6]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Settings</h1>
              <p className="text-white/60 mt-1">Manage your account settings and preferences</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#11294B' }}>
              <div className="p-6" style={{ backgroundColor: '#11294B' }}>
                <h2 className="text-lg font-semibold text-white mb-6">Settings Categories</h2>
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'shadow-lg transform -translate-y-0.5'
                          : 'hover:bg-white/5'
                      }`}
                      style={{
                        backgroundColor: activeTab === tab.id ? `${tab.color}20` : 'transparent',
                        borderLeft: activeTab === tab.id ? `4px solid ${tab.color}` : '4px solid transparent',
                      }}
                    >
                      <span style={{ color: activeTab === tab.id ? tab.color : '#94A3B8' }}>
                        {tab.icon}
                      </span>
                      <span className="font-medium text-white">{tab.label}</span>
                      {activeTab === tab.id && (
                        <div className="ml-auto w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: tab.color }} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#11294B' }}>
              <div className="p-6 sm:p-8">
                {/* Active Tab Header */}
                <div className="mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${getActiveTabColor()}20` }}
                      >
                        {tabs.find(t => t.id === activeTab)?.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {tabs.find(t => t.id === activeTab)?.label}
                        </h2>
                        <p className="text-white/60 text-sm">
                          {role.charAt(0).toUpperCase() + role.slice(1)} Account
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                         style={{ backgroundColor: `${getActiveTabColor()}20`, color: getActiveTabColor() }}>
                      <Zap className="h-4 w-4" />
                      <span>Settings Saved</span>
                    </div>
                  </div>
                </div>

                {/* Tab Content */}
                {renderTabContent()}

                {/* Save Button (for editable tabs) */}
                {(activeTab === "profile" || activeTab === "security" || activeTab === "preferences") && (
                  <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-white/60 text-sm">
                        Changes made here will affect your entire account
                      </p>
                      <button
                        onClick={saveChanges}
                        disabled={isSaving}
                        className="p-2 !rounded-lg font-semibold shadow-lg flex items-center gap-2 
                                 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 
                                 disabled:cursor-not-allowed min-w-[160px] justify-center"
                        style={{ 
                          backgroundColor: getActiveTabColor(),
                          color: 'white'
                        }}
                      >
                        {isSaving ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white !rounded-full animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-5 w-5" />
                            Save Changes
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Enhanced Field Component */
function Field({ 
  label, 
  name, 
  icon, 
  value, 
  onChange, 
  type = "text", 
  multiline = false, 
  select = false, 
  options = [],
  showToggle = false,
  onToggle,
  showPassword = false,
  tabColor = "#169CF6"
}) {
  return (
    <div>
      <label className="block text-white/80 font-medium text-sm mb-2">
        {label}
      </label>

      <div className={`relative flex items-center gap-3 rounded-xl px-4 py-3
                     transition-all duration-300 ${multiline ? 'min-h-[120px]' : ''}`}
           style={{ 
             backgroundColor: 'rgba(255,255,255,0.05)',
             border: `1px solid rgba(255,255,255,0.1)`,
           }}>
        {icon && (
          <span style={{ color: tabColor }}>
            {icon}
          </span>
        )}

        {select ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="bg-transparent w-full text-white focus:outline-none appearance-none"
            style={{ backgroundColor: '#11294B' }}
          >
            {options.map((option) => (
              <option key={option} value={option} style={{ backgroundColor: '#11294B' }}>
                {option}
              </option>
            ))}
          </select>
        ) : multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows="4"
            className="bg-transparent w-full text-white placeholder-white/40 focus:outline-none resize-none"
            style={{ backgroundColor: 'transparent' }}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-transparent w-full text-white placeholder-white/40 focus:outline-none"
            style={{ 
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent'
            }}
          />
        )}

        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-3 text-white/60 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
}

/* Toggle Switch Component */
function ToggleSwitch({ name, checked, onChange, color = "#169CF6" }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div 
        className="w-12 h-6 rounded-full peer transition-all duration-300"
        style={{ 
          backgroundColor: checked ? `${color}80` : '#4B5563',
        }}
      >
        <div 
          className="absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-all duration-300 peer-checked:translate-x-6 shadow-md"
          style={{
            backgroundColor: checked ? color : '#D1D5DB',
          }}
        />
      </div>
    </label>
  );
}

/* Theme Option Component */
function ThemeOption({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
        active 
          ? 'ring-2 transform scale-105' 
          : 'hover:bg-white/5'
      }`}
      style={{
        backgroundColor: active ? '#11294B' : 'transparent',
        border: active ? '2px solid #169CF6' : '1px solid rgba(255,255,255,0.1)',
        color: active ? '#169CF6' : '#94A3B8',
      }}
    >
      <span className={active ? 'text-[#169CF6]' : 'text-gray-400'}>
        {icon}
      </span>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

/* Notification Toggle Component */
function NotificationToggle({ icon, label, description, name, checked, onChange, color }) {
  return (
    <div className="p-4 rounded-xl flex items-center justify-between" style={{ backgroundColor: '#11294B' }}>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20` }}>
          <span style={{ color }}>{icon}</span>
        </div>
        <div>
          <p className="text-white font-medium">{label}</p>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
      </div>
      <ToggleSwitch
        name={name}
        checked={checked}
        onChange={onChange}
        color={color}
      />
    </div>
  );
}

/* Info Row Component */
function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <span className="text-white">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}

/* Action Card Component */
function ActionCard({ icon, title, description, onClick, color, isDanger = false }) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] group"
      style={{ 
        backgroundColor: isDanger ? 'rgba(239, 68, 68, 0.1)' : '#11294B',
        border: isDanger ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="flex items-center gap-3">
        <div 
          className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: isDanger ? 'rgba(239, 68, 68, 0.2)' : `${color}20` }}
        >
          <span style={{ color: isDanger ? '#EF4444' : color }}>{icon}</span>
        </div>
        <div className="text-left">
          <p className={`font-medium ${isDanger ? 'text-red-400' : 'text-white'}`}>{title}</p>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
      </div>
      <span 
        className="group-hover:translate-x-1 transition-transform duration-300"
        style={{ color: isDanger ? '#EF4444' : color }}
      >
        →
      </span>
    </button>
  );
}