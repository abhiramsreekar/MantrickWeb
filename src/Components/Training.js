import React from 'react'
import Courses from '../Pages/Courses'
import Mystudents from './Mystudents'
import StudentGallary from './StudentGallary'
import Testimonials from './Testimonials'
export default function Training() {
  return (
    <div className='training-route'>
      <div style={{height:"7vh"}}></div>
      <Courses />
      <Mystudents/>
      <StudentGallary/>
      <Testimonials/>
    </div>
  )
}
