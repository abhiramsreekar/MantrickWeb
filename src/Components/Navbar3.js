import React,{useEffect,useContext} from 'react'
import './navbar3.css'
import context from '../context/useContext';
import image from '../Images/mantrick.png'
export default function Navbar3() {
    const {gpt,setGpt}=useContext(context);
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Schedule Meet</a></li>
                    <li><a href="#">Brochure</a></li>
                    <li><a href="#">Contact Us</a></li>
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
      }} id="chatBot"  class="btn btn-primary" ><img src='https://cdn.pixabay.com/photo/2016/04/01/11/09/cartoon-1300224_640.png' alt="" style={{height:"100px"}}></img></div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    </>
  )
}
