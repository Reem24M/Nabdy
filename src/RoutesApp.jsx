import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './features/Home/pages/home.jsx'
import DoctorDashboard from './features/Doctor/pages/HospitalDoctorDashboard.jsx'
import PatientDashboard from './features/Patient/pages/PatientDashboard.jsx'
import Login from './features/auth/login.jsx'
import Register from './features/auth/register.jsx'
import ForgetPassword from './features/auth/forgetpassword.jsx'
import PatientDetails from './features/labDoctors/pages/PatientDetails.jsx'
import LabDashboard from './features/labDoctors/pages/HospitalDoctorDashboard.jsx'
// import Emergency from './pages/EmergencyPage.jsx'
import LabDoctorProfile from './features/labDoctors/pages/LabDoctorProfile.jsx'
import SettingsPage from './features/Settings/pages/SettingsPage.jsx'
import DoctorProfile from './features/Doctor/pages/doctorProfile.jsx'
export default function RoutesApp() {
  return (
    <div className='bg-gray-200 min-h-lvh '>



      <Routes>
        {/* home route */}
        <Route path='/' element={<Home />} />
        {/* Auth routes */}
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/forgetpassword' element={<ForgetPassword />} />

        {/* Doctor routes */}
        <Route path='/doctor/dashboard' element={<DoctorDashboard />} />
        <Route path='/doctor/profile' element={<DoctorProfile />} />
        {/* Patient routes */}
        <Route path='/patient/dashboard' element={<PatientDashboard />} />
        {/* <Route path='/patient/profile' element={<PatientProfile />} /> */}
        {/* lab routes */}
        <Route path='/labDoctor/dashboard' element={<LabDashboard />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path='/labDoctor/profile' element={<LabDoctorProfile />} />
        {/* emergency routes */}
        {/* <Route path='/emergency' element={<Emergency />} /> */}
        {/* settings */}
        <Route path='/:role/settings' element={<SettingsPage />} />
        <Route path='/patient/settings' element={<SettingsPage />} />
        <Route path='/doctor/settings' element={<SettingsPage />} />
        <Route path='/lab-doctor/settings' element={<SettingsPage />} />

      </Routes>
    </div>
  )
}
