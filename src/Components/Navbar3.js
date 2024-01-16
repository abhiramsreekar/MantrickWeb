import React,{useEffect,useContext} from 'react'
import './navbar3.css'
import context from '../context/useContext';
import image from '../Images/mantrick.png'
import logo from '../Images/chatlogo2..png'
export default function Navbar3() {
    const {gpt,setGpt}=useContext(context);
    const navanimation=(e)=>{
        // e.target.style.top="10px";
        setTimeout(()=>{
        },10);

    }
    useEffect(()=>{
        window.addEventListener('scroll', function() {
            if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
                document.querySelector('.nav').classList.add('affix');
                console.log("OK");
            } else {
                document.querySelector('.nav').classList.remove('affix');
            }
            });
            const navTrigger = document.querySelector('.navTrigger');
      navTrigger.addEventListener('click', function() {
          this.classList.toggle('active');
          console.log("Clicked menu");
          const mainListDiv = document.getElementById('mainListDiv');
          mainListDiv.classList.toggle('show_list');
          fadeIn(mainListDiv);
      });
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
    },[])
    const portfolio=()=>{
        const carousel=document.querySelector(".containerbox").style.display="none";
        const about=document.querySelector(".responsive-container-block").style.display="none";
        const gallary=document.querySelector(".original-gallary").style.display="none";
        const test=document.querySelector(".testimonial").style.display="none";
        const team=document.querySelector(".team").style.display="none";
        const client=document.querySelector(".clientspage").style.display="none";
        const placements=document.querySelector(".my-students ").style.display="none";
        const courses=document.querySelector(".coursesBox").style.display="none";
        const trainH=document.querySelector(".trainhead").style.display="none";
        const servicesTab=document.querySelector(".servicesTab").style.display="none";
        const aboutUs=document.querySelector(".aboutUs").style.display="none";
        const services=document.querySelector(".services").style.display="block";
    }
    const all=()=>{
        const trainH=document.querySelector(".trainhead").style.display="block";
        const carousel=document.querySelector(".containerbox").style="none";
        const about=document.querySelector(".responsive-container-block").style="none";
        const servicesTab=document.querySelector(".servicesTab").style.display="flex";
        const gallary=document.querySelector(".original-gallary").style="none";
        const test=document.querySelector(".testimonial").style="none";
    const aboutUs=document.querySelector(".aboutUs").style.display="flex";
        const team=document.querySelector(".team").style="none";
        const client=document.querySelector(".clientspage").style="none";
        const placements=document.querySelector(".my-students ").style="none";
        const courses=document.querySelector(".coursesBox").style="none";
        const footer=document.querySelector(".outerfooter").style="none";
        const services=document.querySelector(".services").style.display="none";

    }
  return (
    <>
     <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#"><img src={image} alt=""/></a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks ulm">
                    <li>
                        <a href="#" onClick={all} className='ul1 ul1'>Home</a>
                    </li>
                    <li><a href="#aboutUs" className='ul1 ul2' onClick={all}>About</a></li>
                    <li><a href="#servicesTab" className='ul1 ul3' onClick={all}>Services</a></li>
                    <li><a href="#courses" className='ul1 ul4'  onClick={all}>Training</a></li>
                    <li><a href="#team" className='ul1 ul3' onClick={portfolio}>Portfolio</a></li>
                    <li><a  className='ul22 ul5'  onClick={all} onClick={()=>{
                        document.querySelector(".schedule-meet-o").style.display="flex";
                    }}>Schedule Meet</a></li>
                    <li><a href="#clients" className='ul22 ul6'  onClick={all} onClick={()=>{
                        document.querySelector(".schedule-meet").style.display="flex";
                    }}>Brochure</a></li>
                    <li><a href="#footer" className='ul1 ul7'  onClick={all}>Contact Us</a></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    </>
  )
}
