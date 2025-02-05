import React from 'react'
import Courses from './Courses'
import Testimonials from '../Components/Testimonials'
import StudentCorner from './StudentCorner'
import BlogPage from '../Components/BlogsPage'
import Mystudents from '../Components/Mystudents'
import StudentGallary from '../Components/StudentGallary'
export default function Academy() {
  function fadeIn(element) {
    let opacity = 1;
    const links=document.querySelector('.ulm');
  links.style.display="none";
  setTimeout(()=>{
      links.style.display="block";
  },500)
  element.style.display = 'block';
  const fadeInInterval = setInterval(function() {
      if (opacity < 1) {
          opacity += 0.5;
          element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 50);
}
  return (
    <div>
      <Courses/>
      <button onClick={(e)=>{
            document.querySelector(".back-2").style.display="flex";
            if(window.innerWidth<=1000)
            {
                document.querySelector('.navTrigger').classList.toggle('active');
                const mainListDiv = document.querySelector('#mainListDiv');
                mainListDiv.classList.toggle('show_list');
                fadeIn(mainListDiv);
            }
            document.querySelector(".schedule-meet-o").style.display="none";
            document.querySelector(".schedule-meet").style.display="flex";
        }} className="btn">Download Brochure</button>
      <Testimonials/>
      <StudentCorner/>
      <BlogPage/>
      <Mystudents/>
      <StudentGallary/>
    </div>
  )
}
