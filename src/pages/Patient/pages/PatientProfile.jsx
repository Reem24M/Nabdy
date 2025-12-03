// components/PatientProfile.jsx
import { 
  User, Phone, Mail, Calendar, MapPin, HeartPulse, 
  Activity, Clock, Shield, FileText, Pill, AlertCircle 
} from "lucide-react";
import { useState } from "react";

export default function PatientProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  // Static patient info with more details
  const patient = {
    name: "Ahmed Mostafa",
    age: 32,
    gender: "Male",
    bloodType: "A+",
    phone: "+20 114 987 6543",
    email: "ahmed.mostafa@example.com",
    address: "Alexandria – Egypt",
    status: "Stable",
    patientId: "PAT-2024-7845",
    insurance: "National Health Insurance",
    lastVisit: "Oct 12, 2024",
    nextAppointment: "Nov 15, 2024, 10:30 AM",
    primaryPhysician: "Dr. Mohamed Hassan",
    emergencyContact: {
      name: "Sarah Mostafa",
      relationship: "Wife",
      phone: "+20 100 234 5678"
    },

    vitalStats: [
      { label: "Blood Pressure", value: "120/80", status: "normal", icon: Activity },
      { label: "Heart Rate", value: "72 bpm", status: "normal", icon: HeartPulse },
      { label: "Blood Sugar", value: "110 mg/dL", status: "elevated", icon: Pill },
      { label: "Weight", value: "78 kg", status: "normal", icon: Shield },
    ],

    medicalHistory: [
      { condition: "Diabetes Type 2", since: "2018", severity: "Moderate", treatment: "Metformin 500mg" },
      { condition: "High Blood Pressure", since: "2020", severity: "Mild", treatment: "Lisinopril 10mg" },
      { condition: "Asthma", since: "2015", severity: "Mild", treatment: "Albuterol inhaler" },
    ],

    recentVisits: [
      { date: "Oct 12, 2024", reason: "Routine Checkup", doctor: "Dr. Mohamed Hassan", status: "Completed" },
      { date: "Sep 28, 2024", reason: "Blood Sugar Test", doctor: "Dr. Sarah Ali", status: "Completed" },
      { date: "Aug 15, 2024", reason: "Blood Pressure Follow-up", doctor: "Dr. Mohamed Hassan", status: "Completed" },
    ],

    currentMedications: [
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily", status: "Active" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", status: "Active" },
      { name: "Aspirin", dosage: "81mg", frequency: "Once daily", status: "Active" },
    ],

    bio: "Ahmed Mostafa is a regular patient receiving continuous checkups to monitor blood sugar and blood pressure levels. His condition is stable with ongoing medication. He maintains a healthy lifestyle with regular exercise and balanced diet."
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "medical", label: "Medical History", icon: FileText },
    { id: "medications", label: "Medications", icon: Pill },
    { id: "visits", label: "Visits", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0A1A3A] text-white p-4 md:p-6">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Card */}
        <div className="bg-gradient-to-r from-[#0F234A] to-[#1A2F5A] rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Avatar & Basic Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#169CF6] to-[#0B5AA8] flex items-center justify-center shadow-lg">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{patient.name}</h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                    {patient.status}
                  </span>
                  <span className="px-3 py-1 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-sm font-medium">
                    ID: {patient.patientId}
                  </span>
                  <span className="text-slate-300 text-sm">
                    Last visit: {patient.lastVisit}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="lg:ml-auto bg-[#112348]/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold">Emergency Contact</h3>
              </div>
              <p className="font-medium">{patient.emergencyContact.name}</p>
              <p className="text-slate-300 text-sm">{patient.emergencyContact.relationship}</p>
              <p className="text-slate-400 text-sm mt-1">{patient.emergencyContact.phone}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tabs Navigation */}
            <div className="bg-[#0F234A] rounded-xl p-2">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#169CF6] text-white shadow-lg'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-[#0F234A] rounded-2xl p-6 shadow-xl">
              {activeTab === "overview" && (
                <div>
                  <h3 className="text-xl font-bold text-[#169CF6] mb-6">Patient Overview</h3>
                  
                  {/* Vital Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {patient.vitalStats.map((stat, index) => (
                      <div key={index} className="bg-[#112348] rounded-xl p-4 border border-gray-700 hover:border-[#169CF6]/30 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-lg ${
                            stat.status === 'normal' ? 'bg-emerald-500/20' : 'bg-amber-500/20'
                          }`}>
                            <stat.icon className={`w-5 h-5 ${
                              stat.status === 'normal' ? 'text-emerald-400' : 'text-amber-400'
                            }`} />
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            stat.status === 'normal' 
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {stat.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                        <p className="text-xl font-bold mt-1">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bio Section */}
                  <div className="bg-[#112348] rounded-xl p-5 border border-gray-700">
                    <h4 className="font-semibold text-lg mb-3">About Patient</h4>
                    <p className="text-slate-300 leading-relaxed">{patient.bio}</p>
                  </div>
                </div>
              )}

              {activeTab === "medical" && (
                <div>
                  <h3 className="text-xl font-bold text-[#169CF6] mb-6">Medical History</h3>
                  <div className="space-y-4">
                    {patient.medicalHistory.map((item, i) => (
                      <div key={i} className="bg-[#112348] rounded-xl p-5 border border-gray-700 hover:border-[#169CF6]/30 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg">{item.condition}</h4>
                            <p className="text-slate-400 text-sm">Since {item.since}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            item.severity === 'Mild' ? 'bg-emerald-500/20 text-emerald-300' :
                            item.severity === 'Moderate' ? 'bg-amber-500/20 text-amber-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {item.severity}
                          </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className="text-slate-300">
                            <span className="text-slate-400">Treatment: </span>
                            {item.treatment}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "medications" && (
                <div>
                  <h3 className="text-xl font-bold text-[#169CF6] mb-6">Current Medications</h3>
                  <div className="space-y-4">
                    {patient.currentMedications.map((med, i) => (
                      <div key={i} className="bg-[#112348] rounded-xl p-5 border border-gray-700 hover:border-[#169CF6]/30 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-lg">{med.name}</h4>
                            <p className="text-slate-400">{med.dosage}</p>
                          </div>
                          <span className="px-3 py-1 bg-[#169CF6]/20 text-[#169CF6] rounded-full text-sm">
                            {med.frequency}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            med.status === 'Active' 
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-gray-700 text-gray-300'
                          }`}>
                            {med.status}
                          </span>
                          <button className="text-[#169CF6] hover:text-[#169CF6]/80 text-sm font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "visits" && (
                <div>
                  <h3 className="text-xl font-bold text-[#169CF6] mb-6">Recent Visits</h3>
                  <div className="space-y-4">
                    {patient.recentVisits.map((visit, i) => (
                      <div key={i} className="bg-[#112348] rounded-xl p-5 border border-gray-700 hover:border-[#169CF6]/30 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg">{visit.reason}</h4>
                            <p className="text-slate-400">{visit.doctor}</p>
                          </div>
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                            {visit.status}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span>{visit.date}</span>
                          </div>
                          <button className="text-[#169CF6] hover:text-[#169CF6]/80 text-sm font-medium">
                            View Report
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            
            {/* Patient Info Card */}
            <div className="bg-[#0F234A] rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-[#169CF6] mb-6">Quick Information</h3>
              
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: patient.phone },
                  { icon: Mail, label: "Email", value: patient.email },
                  { icon: MapPin, label: "Address", value: patient.address },
                  { icon: HeartPulse, label: "Blood Type", value: patient.bloodType },
                  { icon: User, label: "Gender / Age", value: `${patient.gender} • ${patient.age}` },
                  { icon: Clock, label: "Next Appointment", value: patient.nextAppointment },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-700 last:border-0 last:pb-0">
                    <div className="p-2 bg-[#112348] rounded-lg">
                      <item.icon className="w-5 h-5 text-[#169CF6]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-sm">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & Primary Physician */}
            <div className="bg-gradient-to-r from-[#0F234A] to-[#1A2F5A] rounded-2xl p-6 shadow-xl">
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-lg mb-2">Insurance</h4>
                  <p className="text-slate-300">{patient.insurance}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="font-bold text-lg mb-2">Primary Physician</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#169CF6] to-[#0B5AA8] flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{patient.primaryPhysician}</p>
                      <p className="text-slate-400 text-sm">Orthopedic Surgeon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-[#0F234A] rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-[#169CF6] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-[#169CF6] to-[#0B5AA8] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Schedule Appointment
                </button>
                <button className="w-full bg-white/5 border border-gray-700 text-white py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Send Message
                </button>
                <button className="w-full bg-white/5 border border-gray-700 text-white py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  View Full History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}