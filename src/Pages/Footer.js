import React from 'react'
import './footer.css';
import logo from '../Images/mantrickstudios_logo.webp';
import facebook from '../Images/icons/facebook.png';
import instagram from '../Images/icons/instagram.png';
import twitter from '../Images/icons/twitter.png';
import youtube from '../Images/icons/youtube.png';
import { Link } from 'react-router-dom';
export default function Footer() {
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
    <>

    <div className='outerfooter' id="footer">
    <div className='footer'>
    <div className='f1 f'>
        <img src={logo} alt=''/>
        <div className='fabox' style={{paddingTop:"5px"}}>
        <a target="_blank" href="https://www.facebook.com/mantrickstudios" >
          <img src={facebook} alt='facebook' style={{height:"50px",width:"50px"}}/>
        </a>
        <a target="_blank" href="https://twitter.com/mantrickStudios" >
        <img src={twitter} alt='facebook' style={{height:"50px",width:"50px"}}/>
        </a>
        <a target="_blank" href="https://www.instagram.com/mantrick_studios/">
        <img src={instagram} alt='facebook' style={{height:"50px",width:"50px"}}/>
        </a>
        <a target="_blank" href="https://www.youtube.com/@MANTRICKSTUDIOS">
        <img src={youtube} alt='facebook' style={{height:"50px",width:"50px"}}/>
        </a>
        </div>
        <div className='p'>
            <p><strong className='underline'>Address:</strong></p>
            <p>Sixth floor, 3 Cube Towers, White Field Rd,</p>
            <p>Whitefields, HITEC City,</p>
            <p>Hyderabad, Telangana 500081.</p>
            <p>Phone: +91 9052000230</p>
            <p>Mail us: muneswar@mantrickstudios.com, anil@mantrickstudios.com</p>
            {/* <p>muneswar@mantrickstudios.com</p> */}
            </div>
      </div>
        <div className='f2 f'>
            <div className='f21'>
                <p ><strong className='underline '> Quick Links</strong></p>
                <div className='links'>
                    <Link to='/' onClick={()=>{window.scrollTo(0, 0)}}>Home</Link>
                    <Link to="/about">About us</Link>
                    <Link style={{cursor:"pointer"}} onClick={(e)=>{
                        if(window.innerWidth<=1000)
                        {
                            document.querySelector('.navTrigger').classList.toggle('active');
                            const mainListDiv = document.querySelector('#mainListDiv');
                            mainListDiv.classList.toggle('show_list');
                            fadeIn(mainListDiv);
                        }
                        var mark=document.querySelector("#marker");
                        mark.style.left=e.target.offsetLeft+"px";
                        mark.style.width=e.target.offsetWidth+"px";
                        
                        document.querySelector(".back-2").style.display="block";
                        document.querySelector(".schedule-meet").style.display="none";
                        document.querySelector(".schedule-meet-o").style.display="flex";
                      }}>Meet Us</Link>
                    <a href='#photos_o'>Our Works</a>
                    <Link  onClick={()=>{
                      
                      window.scrollTo(0,0);
                    }}
                    >Gallery</Link>
                    {/* <a href='#'>Chat</a> */}
                    <a  style={{cursor:"pointer"}} onClick={(e)=>{
                        if(window.innerWidth<=1000)
                        {
                            document.querySelector('.navTrigger').classList.toggle('active');
                            const mainListDiv = document.querySelector('#mainListDiv');
                            mainListDiv.classList.toggle('show_list');
                            fadeIn(mainListDiv);
                        }
                        var mark=document.querySelector("#marker");
                        mark.style.left=e.target.offsetLeft+"px";
                        mark.style.width=e.target.offsetWidth+"px";
                        
                        document.querySelector(".back-2").style.display="block";
                        document.querySelector(".schedule-meet").style.display="none";
                        document.querySelector(".schedule-meet-o").style.display="flex";
                      }}>Call Back</a>
                </div>
            </div>
            <div className='f22 f'>
                <p ><strong className='underline '>Services</strong></p>
                <div className='links'>
                    <Link to='/courses '>Roto</Link>
                    <Link to='/courses '>Composting</Link>
                    <Link to='/courses '>Vfx</Link>
                    <Link to='/courses '>Paint</Link>
                    <Link to='/courses '>Match Move</Link>
                    <Link to='/courses '>3D</Link>
                </div>
            </div>
            <div className='f21'></div>
        </div>
      
    <div className='f3 f'>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1002133133356!2d78.36752707516648!3d17.454916983443763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c575532ed7%3A0x8b832bc3a49ac5a7!2s3%20Cube%20Towers!5e0!3m2!1sen!2sin!4v1702214300879!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            
        </div>
    </div>
      <div className='rights'><h6 style={{color:"white",textAlign:"center"}}>&copy; 2024 All rights are reserved</h6></div>
    </div>
    </>
  )
}
