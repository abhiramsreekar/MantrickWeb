import React from 'react'
import './courses.css'
export default function Courses() {
  var currentCard=1;
  const courses=[
    {
      heading:"Roto (Rotoscoping)",
      content:"Roto, short for rotoscoping, is an indispensable technique in the film industry, allowing VFX artists to meticulously isolate objects in footage. This isolation facilitates seamless compositing onto various backgrounds, providing creators with extensive creative control over the final product. The process involves several techniques such as point tracking, where a point on the object is tracked for consistent motion, shape-based roto for irregular motion, and frame-by-frame roto for complex scenes. Despite its time-consuming nature, roto is crucial for achieving flawless integration of VFX elements into live-action sequences. Tips for effective roto work include starting with simple shapes, using appropriate tools like Bezier curves and tracking software, taking regular breaks to combat fatigue, and ensuring meticulous attention to edge quality and feathering for a seamless blend with the background.      "
    }
    ,
    {
      heading:"Paint in VFX",
      content:"Paint in VFX is a fundamental tool for creating high-quality visual effects in the film, television, and media industries. Aspiring artists can develop their skills through courses, workshops, and by building a robust portfolio. Networking within the industry is crucial for discovering job opportunities and advancing in this dynamic field. Professionals in VFX paint utilize various techniques and industry-standard tools to enhance their creations. By staying updated on the latest trends and continuously building a strong network of contacts, individuals can carve out a successful and rewarding career in this exciting industry.      "
    }
    ,
    {
      heading:"Match Move",
      content:"IMatch Move, a visual effects technique, plays a vital role in film and video production by seamlessly integrating computer-generated imagery (CGI) into live-action footage. Its applications include object tracking, camera tracking, and motion capture, enhancing the overall visual experience. Despite its power, Match Move has limitations, requiring high-quality footage for accurate tracking and facing challenges with shots involving significant camera movement. The time-consuming nature of the process, especially for complex shots, is another consideration. Nonetheless, Match Move stands as an essential tool in the toolkit of VFX artists, contributing to the creation of visually stunning and immersive content.      "
    }
    ,
    {
      heading:"3D Animation    ",
      content:"3D animation, a process involving the creation of three-dimensional moving images using computer software, is a cornerstone in various industries, including film, television, video games, and advertising. Successful 3D animation requires a combination of technical skills, creativity, and attention to detail. Key technical skills include 3D modeling, texturing and shading, and animation and rigging. Industry-standard software tools such as Maya, Blender, and ZBrush are integral for 3D artists. Career opportunities span across film and television for special effects, video game development, architectural and interior design visualization, and medical and scientific visualization, making 3D animation a challenging yet rewarding career path for those passionate about art and technology.      "
    }
    ,
    {
      heading:"Compositing:      ",
      content:"VFX compositing serves as the bridge between live-action footage and digital elements, enhancing the realism of the final output. Compositors meticulously combine various digital assets like animations, background plates, photos, and computer graphics to create a cohesive and believable image. These artists play a crucial role in addressing elements such as light, color, composition, and perspective to ensure the integration of digital elements into live-action sequences looks seamless. Collaboration with other VFX artists, efficient resource utilization, and the ability to relight footage for improved visuals are essential skills. VFX compositing, by merging the real and the digital, contributes significantly to the visual appeal of films, television shows, and other media productions.      "
    }
    
  ];
  function active(e) {
    if(currentCard===e.target.id)
    return;
    currentCard=e.target.id;
    // alert(courses[e.target.id].heading);
    document.getElementById('h1').innerHTML=courses[e.target.id-1].heading;
    document.getElementById('p1').innerHTML=courses[e.target.id-1].content;
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
    <div className="coursesBox" style={{display: "flex",flexDirection: "column",justifyContent:"center",alignItems:"center"}}>
      <h1 className='text-blk heading'>Here are our courses</h1>
      <div className="options ">
        <div className="option active option1" id="1" onMouseOver={active}>
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-walking"></i>
              </div>
              <div className="info">
                 <div className="main">Blonkisoaz</div>
                 <div className="sub">Omuke trughte a otufta</div>
              </div>
           </div>
          </div>
          <div className="option option2" id="2" onMouseOver={active}>
             <div className="shadow" style={{pointerEvents:"none"}}></div>
             <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-snowflake"></i>
              </div>
              <div className="info">
                 <div className="main">Oretemauw</div>
                 <div className="sub">Omuke trughte a otufta</div>
              </div>
           </div>
          </div>
        <div className="option option3" id="3" onMouseOver={active} >
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-tree"></i>
                </div>
              <div className="info">
                 <div className="main">Iteresuselle</div>
                 <div className="sub">Omuke trughte a otufta</div>
              </div>
           </div>
        </div>
        <div className="option option4" id="4" onMouseOver={active} >
          <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-tint"></i>
              </div>
              <div className="info">
                 <div className="main">Idiefe</div>
                 <div className="sub">Omuke trughte a otufta</div>
                </div>
           </div>
          </div>
        <div className="option option5" id="5" onMouseOver={active}>
           <div className="shadow" style={{pointerEvents:"none"}}></div>
           <div className="label" style={{pointerEvents:"none"}}>
              <div className="icon" style={{pointerEvents:"none"}}>
                 <i className="fas fa-sun"></i>
              </div>
              <div className="info">
                 <div className="main">Inatethi</div>
                 <div className="sub">Omuke trughte a otufta</div>
                </div>
             </div>
        </div>
   </div>
   <div style={{height:"300px",width:"60%"}}>
    <div className="optionContent" id="c1">
      <h3 id="h1">3D</h3>
      <p id="p1">
         GoDaddy - Official Site - Get Domain Names & More            
            GoDaddy
            https://www.godaddy.com
            Manage Your Website, Customerss, & Email Campaigns with Our All In One Solutions. Your Website Starts With The Perfect Domain. World's Largest Registrar. Big Savings Over Others. 100's of New Domains. 24/7 Expert Support. Services: Domain Names, Web Hosting.
            Web Hosting + Free Domain
            Includes email, setup & support. Fast & reliable, uptime guarantee.
            Domain Name Generator
            Get started by entering a word or phrase you want in your domain.
            GoDaddy™ Website Builder
            Start For Free Award-winning 24/7 Support Team.
            Get Domain Matching Email
            Earn customers' trust with email that matches your business name.
      </p>
    </div>
   </div>
 </div>
  )
}
