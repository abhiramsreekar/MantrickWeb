import React,{useEffect,useContext} from 'react'
import './navbar3.css'
import context from '../context/useContext';
import image from '../Images/mantrickstudios_logo.webp';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert/Alert';
import { Link } from 'react-router-dom';
export default function Navbar3() {
    const {gpt,setGpt}=useContext(context);
    const {openSnackbar,setOpenSnackbar,snackbarMessage,snackbarSeverity,setSnackbarSeverity,showSnackbar,setSnackbarMessage}=useContext(context);
    const navanimation=(e)=>{
        // e.target.style.top="10px";
        var mark=document.querySelector("#marker");
        mark.style.left=document.querySelector("#first").offsetLeft+  "px";
        mark.style.width=document.querySelector("#first").offsetWidth+"px";
    }
    useEffect(()=>{
        var mark=document.querySelector("#marker");
        mark.style.left=document.querySelector('#first').offsetLeft+"px";
        mark.style.width=document.querySelector('#first').offsetWidth+"px";
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
          const mainListDiv = document.getElementById('mainListDiv');
          mainListDiv.classList.toggle('show_list');
          fadeIn(mainListDiv);
      });
    },[])
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
   
    const marker=(e)=>{
        if(window.innerWidth<=1048)
        {
            const navTrigger = document.querySelector('.navTrigger').classList.toggle('active');
            const mainListDiv = document.getElementById('mainListDiv');
            mainListDiv.classList.toggle('show_list');
            fadeIn(mainListDiv);
        }

        var mark=document.querySelector("#marker");
        mark.style.left=e.target.offsetLeft+"px";
        mark.style.width=e.target.offsetWidth+"px";
        
    }
  return (
    <>
    <div className='navUp'>
        <ul style={{    margin:"auto 2px"}}>
            <li className='ul-1'>
                <span>
                <span class="material-symbols-outlined" style={{color:"red"}}>
                    call
                </span>
                
                +91 9052000230
                </span>
            </li>
            <li className='ul-2'>
                <span>
                <span class="material-symbols-outlined">
                    mail
                    </span>
                    <a style={{textDecoration:"none",color:"black"}} href = "mailto:training@mantrickstudios.com">training@mantrickstudios.com</a>
                    
                </span>
            </li>
            <li className='ul-3'>
                <span>
                <span class="material-symbols-outlined">
                    schedule
                </span>
                Mon-Sat  9am-7pm
                </span>
            </li>
                    <li className='ul-3' style={{cursor:"pointer"}} id='sh-meet'><a  className=''  onClick={(e)=>{
                        document.querySelector(".back-2").style.display="flex";
                        if(window.innerWidth<=1000)
                        {
                            document.querySelector('.navTrigger').classList.toggle('active');
            
                            const mainListDiv = document.querySelector('#mainListDiv');
                            mainListDiv.classList.toggle('show_list');
                            fadeIn(mainListDiv);
                        }
                        
                        
                        document.querySelector(".back-2").style.display="block";
                        document.querySelector(".schedule-meet").style.display="none";
                        document.querySelector(".schedule-meet-o").style.display="flex";
                    }}>
                        <span>
                        <span class="material-symbols-outlined"style={{color:"white"}}>
                            coffee
                        </span>
                    Let's meet for a coffee 
                        </span>
                    </a></li>
        </ul>
    </div>
     <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#"><img src={image} alt=""/></a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks ulm">
                    <div id='marker'></div>
                    <li>
                        <Link to="/" id='first'  className='ul1 ul1' onClick={marker}>Home</Link>
                    </li>
                    <li><Link to="/about" className='ul1 ul2' id="#aboutUs1" onClick={marker}>About</Link></li>
                    <li><Link to="/services" className='ul1 ul3'  id="#services-head3" onClick={marker}>Services</Link></li>
                    <li><Link to="/team" className='ul1 ul3' id="#team1"
                    //  onClick={portfolio}
                    onClick={marker}
                    >Portfolio</Link></li>
                    <li><Link to="/team" className='ul1 ul5'   id="#team22" onClick={marker} >Team</Link></li>
                    {/* <li><Link to="/training" className='ul1 ul4'   id="#courses1" onClick={marker}>Training</Link></li>
                    <li><a href="#clients" className='ul22 ul6' onClick={(e)=>{
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
                    }}>Brochure</a></li>
                        <li>
                        <Link to="/blogs" className='ul1 ul7' id="#footer1"  onClick={marker}>Blogs</Link>
                        </li>
                        <li>
                        <Link to="/studentcorner" className='ul1 ul7' id="#footer1"  onClick={marker}>Student Corner</Link>
                        </li> */}
                        <li>
                        <div className="dropdown">
        <a href="#!" className="dropbtn" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Academy <span class="material-symbols-outlined">
keyboard_arrow_down
</span></a>
        <div className="dropdown-content">
          <Link 
           onClick={(e)=>{
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
        }}
          >Brochure</Link>
          <Link to="blogs">Blogs</Link>
          <Link to="/studentcorner">StudentCorner</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>
      </div>
                        </li>
                        <li>
                        <div className="dropdown">
        <a href="#!" className="dropbtn" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Reach Us <span class="material-symbols-outlined">
keyboard_arrow_down
</span></a>
        <div className="dropdown-content">
          <Link to="/">Business</Link>
          <Link to="/">Careers</Link>
        </div>
      </div>
                        </li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <div className='snacker' >
    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    </>
  )
}
