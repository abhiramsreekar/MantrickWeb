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
          let opacity = 0;
          element.style.display = 'block';
          const fadeInInterval = setInterval(function() {
              if (opacity < 1) {
                  opacity += 0.1;
                  element.style.opacity = opacity;
              } else {
                  clearInterval(fadeInInterval);
              }
          }, 50);
      }
    },[])
  return (
    <>
     <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#"><img src={image} alt="" width={"200px"}/></a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li>
                        <a href="#" className='ul1' onMouseOver={navanimation}>Home</a>
                        <a href="#" style={{display:"none"}} className='ul1'><strong>Home</strong></a>
                    </li>
                    <li><a href="#about" className='ul1'>About</a></li>
                    <li><a href="#team" className='ul1'>Services</a></li>
                    <li><a href="#courses" className='ul2'>Schedule Meet</a></li>
                    <li><a href="#gllary" className='ul2'>Brochure</a></li>
                    <li><a href="#" className='ul1'>Contact Us</a></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <section>
    <div type="button"  style={{zIndex:"1000"}} onClick={()=>{
        if(gpt===true)
        {
          setGpt(false);
        }
        else
        {
          setGpt(true);
        }
      }} id="chatBot"  class="btn btn-primary" ><img src={logo} alt="" style={{height:"60px"}}></img></div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    </>
  )
}
