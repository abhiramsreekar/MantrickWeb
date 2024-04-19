import React from 'react'
import LandingPage from './Pages/LandingPage';
import Clients from './Pages/Clients'
import About2 from './Pages/About2'
import StudentGallary from './Components/StudentGallary'
import Courses from './Pages/Courses';
import ServicesTab from './Pages/ServicesTab';
import './App.css'
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Mystudents from './Components/Mystudents';
import Services from './Pages/Services';
import Footer from './Pages/Footer';
export default function Home() {
  return (
    <div className="App">
    
    <LandingPage/>
    <About2/>
    <ServicesTab/>
    <Courses/>
    <Mystudents/>
    <StudentGallary/>
    <Testimonials/>
    <Team/>
    <Services/>
    <Clients/>
    
  
  </div>
  )
}
