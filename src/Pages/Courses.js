import React from 'react'
import './courses.css'
import roto from '../Images/courses/mantrickstudios_roto.webp';
import paint from '../Images/courses/mantrickstudios_paint.webp';
import d3 from '../Images/courses/mantrickstudios_3d.webp';
import mm from '../Images/courses/mantrickstudios_mm.webp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { display } from '@mui/system';
export default function Courses() {
   var currentCard=1;
   const location = useLocation();
   useEffect(()=>{
      window.scrollTo(0, 0);
      // alert(location.pathname=='/');
   },[])
  const courses=[
    {
      heading:"Roto (Rotoscoping)",
      content:"Roto, short for rotoscoping, is an indispensable technique in the film industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background. ",
      duration:"6 Months",
      p1:"Roto, short for rotoscoping, is an indispensable techniqueing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background. ",
      p2:"Roto, short for rotoscoping, is  in the film industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality."
    }
    ,
    {
      heading:"Paint in VFX",
      content:"Paint in VFX is a fundamental tool for creating high-quality visual effects in the film, television, and media industries. Aspiring artists can develop their skills through courses, workshops, and by building a robust portfolio. Networking within the industry is crucial for discovering job opportunities and advancing in this dynamic field. Professionals in VFX paint utilize various techniques and industry-standard tools to enhance their creations. By staying updated on the latest trends and continuously building a strong network of contacts, individuals can carve out a successful and rewarding career in this exciting industry.",
      duration:"4 Months",
      p1:"Roto, short for rotoscoping, is an indispensable technique in the ftists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background. ",
      p2:"Roto, short for rotoscoping, is an inilm industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality."
 
    }
    ,
    {
      heading:"Match Move",
      content:"IMatch Move, a visual effects technique, plays a vital role in film and video production by seamlessly integrating computer-generated imagery (CGI) into live-action footage. Its applications include object tracking, camera tracking, and motion capture, enhancing the overall visual experience. Despite its power, Match Move has limitations, requiring high-quality footage for accurate tracking and facing challenges with shots involving significant camera movement. The time-consuming nature of the process, especially for complex shots, is another consideration. Nonetheless, Match Move stands as an essential tool in the toolkit of VFX artists, contributing to the creation of visually stunning and immersive content.",
      duration:"1 Year",
      p1:"Roto, short for rotoscopingry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background. ",
      p2:"Roto, short for rotoscoping, is an indispensable technique in the film industry, o meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality."
 
    }
    ,
    {
      heading:"3D Animation    ",
      content:"3D animation, a process involving the creation of three-dimensional moving images using computer software, is a cornerstone in various industries, including film, television, video games, and advertising. Successful 3D animation requires a combination of technical skills, creativity, and attention to detail. Key technical skills include 3D modeling, texturing and shading, and animation and rigging. Industry-standard software tools such as Maya, Blender, and ZBrush are integral for 3D artists. Career opportunities span across film and television for special effects, video game development, architectural and interior design visualization, and medical and scientific visualization, making 3D animation a challenging yet rewarding career path for those passionate about art and technology.",
      duration:"1 Month",
      p1:"Roto, short for dustry, a. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background. ",
      p2:"Roto, short for rng, is an indispensable technique in the film industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality."
 
    }
    ,
    {
      heading:"Compositing:      ",
      content:"VFX compositing serves as the bridge between live-action footage and digital elements, enhancing the realism of the final output. Compositors meticulously combine various digital assets like animations, background plates, photos, and computer graphics to create a cohesive and believable image. These artists play a crucial role in addressing elements such as light, color, composition, and perspective to ensure the integration of digital elements into live-action sequences looks seamless. Collaboration with other VFX artists, efficient resource utilization, and the ability to relight footage for improved visuals are essential skills. VFX compositing, by merging the real and the digital, contributes significantly to the visual appeal of films, television shows, and other media productions.",
      duration:"2 Months",
      p1:"Roto, short for rotoscoping, is an indispensable technique in the film industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background. ",
      p2:"Roto, short for rotoscoping, is an indispensable technique in the film industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality."
 
    }
    ,
    {
      heading:"Digital Marketing:      ",
      content:"These programs provide in-person instruction, often including hands-on experiences with digital marketing tools and direct interaction with instructors and peers. They may offer simulations of real-world digital marketing challenges, workshops, and networking opportunities.",
      duration:"2 Months",
      p1:" Online courses offer flexibility and accessibility, allowing learners to study at their own pace and access course materials from anywhere. These programs often include video lectures, interactive assignments, and forums for discussion with instructors and fellow students. ",
      p2:"Both on-campus and online digital marketing courses typically span several months and are designed to equip participants with the skills necessary to navigate the digital marketing landscape effectively. They cover foundational concepts, the latest industry trends, and practical applications, preparing students for careers in various sectors, including e-commerce, advertising, media, and more."
 
   }
   ,
    {
      heading:"UX/UI Design:      ",
      content:"Understanding the fundamentals of design principles and psychology.Learning tools and software commonly used in the industry, such as Sketch, Adobe XD, Figma, and InVision.Building a portfolio through practice projects, which is crucial for showcasing skills to potential employers or clients.",
      duration:"6 Months",
      p1:"Both online and on-campus options are available for learning UX/UI design, each offering unique advantages. Online courses can provide flexibility and convenience, while on-campus programs may offer more hands-on, collaborative experiences. ",
      p2:"UX/UI design is a rewarding and challenging field, combining creativity with practical problem-solving to improve the way people interact with technology and digital products."
 
   }
  ];
  function active(e) {
     if(currentCard===e.target.id)
     return;
    currentCard=e.target.id;
    // alert(courses[e.target.id].heading);
    document.getElementById('h1').innerHTML=courses[e.target.id-1].heading;
    document.getElementById('p1').innerHTML=courses[e.target.id-1].content;
    document.getElementById('p2').innerHTML=courses[e.target.id-1].p1;
    document.getElementById('p3').innerHTML=courses[e.target.id-1].p2;
    document.getElementById('time').innerHTML=courses[e.target.id-1].duration;
    setTimeout(()=>{
       document.getElementById("c1").style.display="block";
      },100)
    let lists=document.querySelectorAll(".option").forEach(function(el) {
      el.classList.remove("active");
   });
    e.target.classList.add("active");
    document.getElementById("c1").style.display="none";
   }
   return (
      <>
      {/* <video style={{display:"absolute",width:"100%"}} autoPlay muted loop id="myVideo"  src={Video} type="video/mp4" controls> 
      </video> */}
    <div className="coursesBox page" id="courses" style={{display: "flex",flexDirection: "column",justifyContent:"center",alignItems:"center",marginTop:"0px",paddingTop:"5vh"}}>
      <h1 className='head-one training-head' style={{textAlign:"center",marginTop:"100px",marginBottom:"50px"}} >
         
         {
            location.pathname=='/'?<>
            Studio Services
            </>
            :
            <>
            TRAINING
            </>
         }
         </h1>

      <h1 className='text-blk heading' style={{fontSize:"30px",letterSpacing:"-.5px",width:"100%"}}>HERE ARE OU
      
      {
         location.pathname=='/'?<>
         R SERVICES
         </>
         :
         <>
         R COURSES
         </>
      }
      </h1>
      <div className="options ">
        <div className="option active option1" id="1" onMouseOver={active}
         style={{"--optionBackground":`url("${roto}")`}}
         >
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-walking"></i>
              </div>
              <div className="info">
                 <div className="main">Roto (Rotoscoping)</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
              </div>
                 {/* <video style={{position:"absolute",left:"0px",top:"0px",width:"100%",height:"100%"}} autoPlay muted loop id="myVideo"  src={Video} type="video/mp4"> 
                  </video> */}
           </div>
          </div>
          <div className="option option2" id="2" onMouseOver={active}
           style={{"--optionBackground":`url("${paint}")`}}
           >
             <div className="shadow" style={{pointerEvents:"none"}}></div>
             <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-snowflake"></i>
              </div>
              <div className="info">
                 <div className="main">Paint in VFX</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
              </div>
           </div>
          </div>
        <div className="option option3" id="3" onMouseOver={active} style={{"--optionBackground":`url("${mm}")`}}>
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-tree"></i>
                </div>
              <div className="info">
                 <div className="main">Match Move</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
              </div>
           </div>
        </div>
        <div className="option option4" id="4" onMouseOver={active}>
        {/* <video style={{display:"absolute",width:"100%"}} muted loop id="myVideo"  src={Video} type="video/mp4">
        </video> */}
          <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-tint"></i>
              </div>
              <div className="info">
                 <div className="main">3D Animation</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
                </div>
           </div>
          </div>
        <div className="option option5" id="5" onMouseOver={active} style={{"--optionBackground":`url("${d3}")`}}>
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-sun"></i>
              </div>
              <div className="info">
                 <div className="main">Compositing</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
                </div>
             </div>
        </div>
        
                 {
                    !location.pathname=='/'?
                    <>
                    <div className="option option6" id="6" onMouseOver={active}>
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-sun"></i>
              </div>
              <div className="info">
                 <div className="main">Digital Marketing</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
                </div>
             </div>
        </div>
        <div className="option option7" id="7" onMouseOver={active}>
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-sun"></i>
              </div>
              <div className="info">
                 <div className="main">UX/UI Design</div>
                 {/* <div className="sub">Omuke trughte a otufta</div> */}
                </div>
             </div>
        </div>
                 </>
                    :
                    <></>
                 }
   </div>
   <div className='options2' style={{display:"none"}}>

         <diV className="gallaryBox page " id="gallary">
        <div className='gin'>
          <div className='gallary'>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg>
              </button>
              <section className="carousel">
              {/* {
                cardArr.map((e,i)=>{
                return 
                  })
              } */}
              <div className="carousel-item client-item option">
              <h3 id="1" onClick={active}>Roto</h3>
               </div>
              <div className="carousel-item client-item option">
              <h3 id="2" onClick={active}>Paint in VFX</h3>
               </div>
              <div className="carousel-item client-item option">
              <h3 id="3" onClick={active}>Match Move</h3>
               </div>
              <div className="carousel-item client-item option">
              <h3 id="4" onClick={active}>3D Animation</h3>
               </div>
              <div className="carousel-item client-item option">
              <h3 id="5" onClick={active}>Compositing</h3>
               </div>
                  <div className="carousel-item client-item option">
              <h3 id="6" onClick={active}>Digital Marketing</h3>
               </div>
              <div className="carousel-item client-item option">
              <h3 id="7" onClick={active}>UX/UI Design</h3>
               </div>
              
              </section>
              <button type="button" className="arrows right-arrow" aria-label="Arrow Right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                </svg>
              </button>
            </section>
          </div>
        </div>
      </diV>
   </div>
   
   <div  className='optionContentout'
    

      style={{display:"none",display:location.pathname=='/'?"none":"block"}}
      
      
    >
    <div className="optionContent" id="c1" style={{padding:"0px 0px",display:"none"}} >
      
      <h3 id="h1" className='heads' style={{color:"red"}}>{courses[0].heading}</h3>
      <p id="p1">
      {courses[0].content}
      </p>
      <h4 className='heads' style={{color:"red"}}>Duration: <span id="time" style={{color:"white"}}>{courses[0].duration}</span></h4>
      <div style={{display:"none"}}>
      <h3 id="h2" className='heads'>On-Campus</h3>
      <p id="p2">
      {courses[0].p1}
      </p>
      <h3 id="h3" className='heads'>Online</h3>
      <p id="p3">{courses[0].p2}</p>
         </div>
         <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="cbtns">
      <button className='cbtn' onClick={()=>{
         document.querySelector(".schedule-meet").style.display="none";
         document.querySelector(".schedule-meet-o").style.display="flex";
      }}>Get Call Back</button>
      <button className='cbtn'onClick={()=>{
         document.querySelector(".schedule-meet-o").style.display="none";
         document.querySelector(".schedule-meet").style.display="flex";
      }}>Brochure</button>
      </div>
    </div>
   </div>
 </div>
   </>
  )
}
