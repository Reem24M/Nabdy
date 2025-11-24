import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home/home'
import DoctorDashboard from './pages/Doctor/HospitalDoctorDashboard'
import PatientDashboard from './pages/Patient/PatientDashboard'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgetPassword from './pages/auth/forgetpassword'
import ResetPassword from './pages/auth/resetpassword'
import About from './pages/About/about'
import Contactus from './pages/ContactUs/contactus'
export default function RoutesApp() {
  return (
    <div  className='bg-gray-200 min-h-lvh '>
      
    

      <Routes>
        {/* home route */}
        <Route path='/' element={<Home/>} />
        {/* Auth routes */}
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/register' element={<Register/>} />
        <Route path='/auth/forgetpassword' element={<ForgetPassword />} />
        <Route path='/auth/resetpassword' element={<ResetPassword/>} />
        {/* guest routes */}
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contactus/>} />
        {/* Doctor routes */}
        <Route path='/doctor/dashboard' element={<DoctorDashboard/>} />
        {/* Patient routes */}
        <Route path='/patient/dashboard' element={<PatientDashboard/>} />
      </Routes>
    </div>
  )
}
