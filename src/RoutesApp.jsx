import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import DoctorDashboard from './pages/Doctor/HospitalDoctorDashboard'
import PatientDashboard from './pages/Patient/PatientDashboard'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgetPassword from './pages/auth/forgetpassword'
import ResetPassword from './pages/auth/resetpassword'
import About from './pages/About/about'
import Contactus from './pages/ContactUs/contactus'
import LabDashboard from './pages/labDoctors/HospitalDoctorDashboard.jsx'
import Emergency from './pages/EmergencyPage.jsx'
import PatientDetails from './pages/labDoctors/PatientDetails.jsx'
import LabDoctorProfile from './pages/labDoctors/LabDoctorProfile.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
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
        <Route path='/auth/resetpassword' element={<ResetPassword />} />
        {/* guest routes */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
        {/* Doctor routes */}
        <Route path='/doctor/dashboard' element={<DoctorDashboard />} />
        {/* Patient routes */}
        <Route path='/patient/dashboard' element={<PatientDashboard />} />
        {/* lab routes */}
        <Route path='/lab/dashboard' element={<LabDashboard />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path='/lab-doctor/profile' element={<LabDoctorProfile />} />
        {/* emergency routes */}
        <Route path='/emergency' element={<Emergency />} />
        {/* settings */}
        <Route path='/:role/settings' element={<SettingsPage />} />

      </Routes>
    </div>
  )
}
