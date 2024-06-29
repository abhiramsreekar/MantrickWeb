import React, {useState, Component,useContext, useEffect,useRef } from 'react';
import ChatBot from 'react-simple-chatbot';
import User from './User';
import Login from './Login'
import './index.css';
import emailjs from '@emailjs/browser';
import context from '../context/useContext';
import logo from '../Images/chatlogo2..png'
import logo2 from '../Images/img/ChatBot/img.svg'
import DateCompo from './DateCompo';
import { auth } from "./Firebase.config";
import { Toaster, toast } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// type ValuePiece = Date | null;
import './chatBot.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { async } from '@firebase/util';
// type Value = ValuePiece | [ValuePiece, ValuePiece];
// all available config props
const config ={
  width: "28vw",
  height: "70vh",
};
export default function Chatbot() {
  const form = useRef();
  const form2 = useRef();
    const [otp, setOtp] = useState("");
    const [phone,setPhone] = useState("");
    const [email_otp,setEmail_otp]=useState("");
    const [captcha,setCaptcha] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);

  const {openSnackbar,setOpenSnackbar,snackbarMessage,snackbarSeverity,setSnackbarSeverity,showSnackbar,setSnackbarMessage,ph,setPh,gpt,setGpt,gptState,setGptState}=useContext(context);
  const Otp=({triggerNextStep,type})=>{

    const checkOtp=(e)=>{
      e.preventDefault();
      if(type==="call-back")
      {
        triggerNextStep({ trigger: 'call-options' });
      }
      else
      {
        triggerNextStep({ trigger: 'brochure-options' });
      }
    }
      return(
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Otp:</label>
            <input type="text"  className="form-control otp" id="exampleInputPassword1" />
            <button type="submit"  onClick={checkOtp} className="btn btn-primary" >Submit</button>
        </div>
      )

  }
  const login=()=>{
    window.localStorage({"name":"pavan"});
  }
  

    
  
  // Brochure download whatsapp msg sending
  const [name, setName] = useState("");
  const [Botp, setBotp] = useState("");
  const [email,setEmail] = useState("");
  const [DateAndTime,setDateAndTime] = useState("");
  const [user, setUser] = useState(false);
  const [otpbox,setOtpbox]=useState(null);
  const [Bsubmit,setBsubmit]=useState(null);
  const [otpstatus,setOtpstatus]=useState(null);
  const [emailbox,setEmailbox]=useState(null);
  // brochure card
  const BrochureCard=(triggerNextStep)=>{
    
    return(
            <div className="">
              <div className="card" style={{width: "96%"}}>
                    <img src="https://cdn.pixabay.com/photo/2015/06/30/08/07/lens-826308_1280.jpg" className="card-img-top" alt="..." style={{width:"100%"}}/>
                    <div className="card-body">
                    <h5 className="card-title">Brochure </h5>
                    <p className="card-text">Some quick example text to build on the card title .</p>
                    <a href="https://google.com" target="_blank" className="btn btn-primary">Download brochure</a>
                    </div>
                </div>
            </div>
          )
    
    }

    function auto_popUp(){
      setTimeout(()=>{
        document.querySelector(".schedule-meet").style.display="flex";
        document.querySelector(".back-2").style.display="block";
      },15000)
    }
    useEffect(()=>{
      auto_popUp();
    },[])
    var e_otp;
    const Email_OTP=async(e)=>{
      e.preventDefault();
      const min = 1000;
      const max = 9999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      e_otp=randomNumber.toString();
      document.querySelector('#email_id').value=e_otp;
      emailjs
      .sendForm('service_xe7vpm5', 'template_52psjsp', form.current, {
          publicKey: 'q7X7GCfUuxJ7losY8',
        })
        .then(
          () => {
            setOtpbox("s");
            showSnackbar('OTP has been sent to your registered email successfully!', 'success');
          },
          (error) => {
            alert(JSON.stringify(error));
            showSnackbar('Failed to send OTP!', 'error');
          },
        );

    }
    const formated_date=(da)=>
    {
    let hours = da.getHours();
    const minutes = da.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes to be two digits
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    
    // Create the formatted date string
    return `${da.toLocaleDateString()} ${hours}:${minutesStr} ${ampm}`;
    }
    const onDowloadBrochure1= async () => {

    
      const new_date=formated_date(new Date())
      if(e_otp=!otp)
      {
        showSnackbar('OTP entered is wrong!', 'error');
        return;
      }
      try {

      // #sending data to firebase
        const search=await fetch('https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users.json',{
          method:"GET",
          headers:{
            'Content-Type': 'application/json',
          },
        }
        )
        const search_result = await search.json();
        if(search_result)
        {

          const search_keys=Object.keys(search_result);
          try{
          var s=0;
          var element;
          var user_id;
        }catch(err)
        {
          alert(err);
        }
        if(search_keys)
        {
          search_keys.forEach(element=>
          {
            if(search_result[element].email==email)
            {
              s=1;
              user_id=element;
            }
            
          });
  
        }
      
        }
      if(!search_result || s==0)
      {
        const store=await fetch('https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users.json',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name:name,email:email,mobile:phone,Schedule_time:'Not yet',last_sign_in_date:new_date}),
      }
      )
    }
    else
    {
        const update=await fetch(`https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users/${user_id}.json`,{
          method:"PUT",
          headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:search_result[user_id].name,email:search_result[user_id].email,mobile:search_result[user_id].mobile,Schedule_time:search_result[user_id].Schedule_time,last_sign_in_date:new_date}),
          }
          )
        }
        
        // # Brochure sent to email
        
        // emailjs
        // .sendForm('service_xe7vpm5', 'template_82neu78', form.current, {
        //   publicKey: 'q7X7GCfUuxJ7losY8',
        // })
        // .then(
        //   () => {
        //     console.log('SUCCESS!');
        //   },
        //   (error) => {
        //     console.log('FAILED...', error.text);
        //   },
        //   );
        clear();
        setBsubmit("s");
        showSnackbar('Brochure has been sent to your registered email successfully!', 'success');
      
      } catch (error) {
        clear();
        showSnackbar('Failed to download brochure!', 'error'); 
      } finally {
        
    }
    };
    function clear()
    {
      setEmail("");
        setPhone("");
        setName("");
        setBsubmit(null);
        setBotp("");
        setEmailbox(null);
        setOtpbox(null);
    }
    const onScheduleSubmit1=async ()=>{
      // #sending data to firebase
      const sh_date=formated_date(new Date(DateAndTime));

      const new_date=formated_date(new Date())
      if(e_otp=!otp)
      {
        showSnackbar('OTP entered is wrong!', 'error');
        return;
      }
      try {

      // #sending data to firebase
        const search=await fetch('https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users.json',{
          method:"GET",
          headers:{
            'Content-Type': 'application/json',
          },
        }
        )
        const search_result = await search.json();
        if(search_result)
        {

          const search_keys=Object.keys(search_result);
         
          var s=0;
          var element;
          var user_id;
        
        if(search_keys)
        {
          search_keys.forEach(element=>
          {
            if(search_result[element].email==email)
            {
              s=1;
              user_id=element;
            }
            
          });
  
        }
      
        }
      if(!search_result || s==0)
      {
        const store=await fetch('https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users.json',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name:name,email:email,mobile:phone,Schedule_time:sh_date,last_sign_in_date:new_date}),
      }
      )
    }
    else
    {
        const update=await fetch(`https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users/${user_id}.json`,{
          method:"PUT",
          headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:search_result[user_id].name,email:search_result[user_id].email,mobile:search_result[user_id].mobile,Schedule_time:sh_date,last_sign_in_date:new_date}),
          }
          )
        }
        
        // # Brochure sent to email
        
        // emailjs
        // .sendForm('service_xe7vpm5', 'template_82neu78', form.current, {
        //   publicKey: 'q7X7GCfUuxJ7losY8',
        // })
        // .then(
        //   () => {
        //     console.log('SUCCESS!');
        //   },
        //   (error) => {
        //     console.log('FAILED...', error.text);
        //   },
        //   );
        // clear();
        // setBsubmit("s");
        // showSnackbar('Meet has been scheduled successfully and details sent to your registered email!', 'success');
      
      } catch (error) {
        clear();
        showSnackbar('Failed to schedule a meet!', 'error'); 
      } finally {
        
    }
    }
    return (
      <> 
    {/* Download Brochure */}
    <div className='schedule-meet' >
    <span className="material-symbols-outlined" onClick={()=>{
      document.querySelector(".schedule-meet").style="none";
      document.querySelector(".back-2").style.display="none";
      }}>cancel</span>
      
      <h2>Download Brochure</h2>
      <p>Please provide your contact information</p>
      <form ref={form} onSubmit={Email_OTP}>
      <input type='text' name='email_otp' id='email_id' value={email_otp} style={{display:"none"}}/>
      <div className='ss-box'>
          <label htmlFor="ss-name" className="ss-label">Name:</label>
          <input type="text" minLength={4} id="ss-name" name='ss-name'  value={name} onChange={(e)=>{
              setName(e.target.value);
              
          }} className='ss-input' placeholder='Enter Your Name'/>
        </div>
      <div className='ss-box'>
          <label htmlFor="ss-name"  className="ss-label" 
          >Ph.No:</label>
          <input type="text" id="ss-name"  pattern="[6-9]{1}[0-9]{9}" value={phone} onChange={(e)=>{
            setPhone(e.target.value);
          }} className='ss-input ss-phone-2'  placeholder='Enter Phone Number'/>
        </div>
        
        <div className='ss-box'>
        <label htmlFor="ss-name" className="ss-label">Email: </label>
        <input type="email" id="ss-name" value={email} 
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        name='email' className='ss-input' placeholder='Enter Email Address'/>
        </div>
          
        {
         !otpbox?<div className='ss-box button'>
          <div className='ss-box' style={{display:"none"}}>
          <label htmlFor="ss-name" className="ss-label" >OTP:</label>
          <input type="text" minLength={4} maxLength={4} id="ss-name" name='ss-name'  value={otp} onChange={(e)=>{
              setOtp(e.target.value);
          }} className='ss-input' placeholder='Enter OTP'/>
        </div>
         <Button type='button' onClick={onDowloadBrochure1}>Download Brochure</Button>
         {
           !Bsubmit?<p  style={{color:"white"}}>by clicking this button, you are agreed to receive an email</p>:<p style={{color:"green",background:"white"}}>Brochure details sent to your registered email successfully</p>
         }
         </div>
        :<>
        
        <div className='ss-box button'>
        <Button type='submit'>SEND OTP</Button>
        </div>
        </>
      }
  </form>
    </div>
    {/* schedule */}
    <div className='back-2' onClick={()=>{
      setPhone("");
      document.querySelector(".back-2").style.display="none";
      document.querySelector(".schedule-meet-o").style="none";
      document.querySelector(".schedule-meet").style="none";
    }}></div>
    <div className='schedule-meet schedule-meet-o' >
    <span className="material-symbols-outlined" onClick={()=>{
      setPhone("");
      document.querySelector(".back-2").style.display="none";
      document.querySelector(".schedule-meet-o").style="none";
    }}>cancel</span>
      <h2>Schedule Meet</h2>
      <p>Please provide your contact information</p>
      <form onSubmit={Email_OTP}>
      <div className='ss-box'>
          <label htmlFor="ss-name" className="ss-label">Name:</label>
          <input type="text" id="ss-name" name='ss-name'  value={name}  onChange={(e)=>{
            setName(e.target.value);
          }} className='ss-input' placeholder='Enter Your Name'/>
        </div>
      <div className='ss-box'>
          <label htmlFor="ss-name" className="ss-label">Ph.No:</label>
          <input type="text" id="ss-name3" name='ss-name' pattern="[6-9]{1}[0-9]{9}" value={phone} onChange={(e)=>{
            setPhone(e.target.value);
          }}
          className='ss-input ss-phone-3' placeholder='Enter Phone Number'/>
        </div>

      {
        !emailbox?
        <>
        <div className='ss-box'>
        <label htmlFor="ss-name" className="ss-label">Email: </label>
        <input type="email" id="ss-name" value={email} 
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        name='ss-name' className='ss-input' placeholder='Enter Email Address'/>
      </div>

      

          </>
        :<></>
      }
      {
         !otpbox?<div className='ss-box button'>
          <div className='ss-box' style={{display:"none"}}>
          <label htmlFor="ss-name" className="ss-label" style={{display:"none"}}>OTP:</label>
          <input type="text" minLength={4} maxLength={4} id="ss-name" name='ss-name'  value={otp} onChange={(e)=>{
              setOtp(e.target.value);
          }} className='ss-input' placeholder='Enter OTP'/>
          </div>
         <p>Please select date and time of visit</p>
        <div className='ss-box ss-date'>
          <label htmlFor="birthdaytime"  className="ss-label">Date/Time:</label>
          <input type="datetime-local" value={DateAndTime} onChange={(e)=>{
              setDateAndTime(e.target.value);
            }} id="birthdaytime" className='ss-input' name="birthdaytime"></input>
        </div>

        <Button type='button'  onClick={onScheduleSubmit1}>Schedule Meet</Button>
        {
          !Bsubmit?<p>by clicking this button, you are agreed to receive message on whatsapp</p>:<p style={{color:"green"}}>scheduled meeting confirmation details sent to your whatsapp successfully</p>
        }
        </div>:<>
        
        <div className='ss-box button'>
        <Button type='submit'>SEND OTP</Button>
        </div>
        </>
      }
      
      </form>
    </div>
    {
      gpt?
      <div id='bot' className='bot' style={{opacity:0}}>
        <ChatBot  style={{right:"-2px",position:"fixed",bottom:"3px",backgroundColor:"black"}}
        steps={[
          {
            id:'intro', 
            message:"Hey there! Welcome to Mantriix Studios, your gateway to a career in VFX and 3D animation. What would you like to do today?", 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
              {value:'Courses We Offer', label:'Courses We Offer', trigger:'c1'},
            {value:'Contact Us', label:'Contact Us', trigger:'arrange-call-back-1'},
            {value:'Download Brochure', label:'Download Brochure', trigger:'Download Brochure-1'},
            {value:'Get Callback', label:'Get Callback', trigger:'arrange-call-back-1'},
          ] 
        },
        {
          id:'c1', 
          options:[
            {value:'Rotoscopy', label:'Rotoscopy', trigger:'R1'},
            {value:'Paint in VFX', label:'Paint in VFX', trigger:'P1'},
            {value:'Match Move', label:'Match Move', trigger:'M1'},
            {value:'3D Animation', label:'3D Animation', trigger:'3D'},
            {value:'Composting', label:'Composting', trigger:'f1'},
            {value:'Fx', label:'FX (unreal)', trigger:'f1'},
            ] 
          },
          {
            id:'R1', 
            message:"Mantriix Studios offers a comprehensive Rotoscoping course, a vital skill in the VFX industry. Rotoscoping involves creating mattes or masks around objects in footage, enabling seamless compositing onto different backgrounds. The course covers techniques such as point tracking, shape-based roto, and frame-by-frame roto. Students learn essential tools like Bezier curves and tracking software, gaining creative control over VFX integration. The program emphasises practical experience with live production classes led by industry experts, ensuring students understand production nuances. With a focus on 100% job placement, Mantriix Academy prepares students for successful careers in the dynamic field of VFX.            ", 
            trigger:'course-end',
          },
          {
            id:'P1', 
            message:"Mantriix Studios introduces the Paint in VFX course, essential for creating high-quality visual effects in film and television. This program delves into various paint techniques, tools, and software applications used in the industry. Students learn to build a strong portfolio, network within the industry, and attend events to enhance career opportunities. With a dynamic and rewarding curriculum, this course equips individuals with the skills needed to excel in the exciting field of VFX painting.", 
            trigger:'course-end',
          },
          {
            id:'M1', 
            message:"The Match Move course at Mantriix Studios explores the visual effects technique crucial for inserting CGI into live-action footage seamlessly. Students delve into applications like object tracking, camera tracking, and motion capture. The program highlights the limitations, emphasising the importance of high-quality footage for accurate tracking. While acknowledging the time-consuming nature of the process, the course equips students with skills essential for successful integration of CGI elements into diverse film and video productions.            ", 
            trigger:'course-end',
          },
          {
            id:'3D', 
            message:"Mantriix Studios offers a comprehensive 3D Animation course, guiding students through the process of creating lifelike characters, objects, and environments using industry-standard software like Maya, Blender, and ZBrush. The curriculum covers foundational skills such as 3D modelling, texturing, shading, animation, and rigging. The program explores diverse career opportunities in film, television, video games, architecture, and medical visualisation, making it an ideal choice for individuals passionate about combining art, technology, and storytelling.            ", 
            trigger:'course-end',
          },
          {
            id:'C1', 
            message:"The VFX Compositing course at Mantriix Studios focuses on the crucial connection between live-action footage and digital properties. Students learn to enhance digital elements, making them seamlessly blend with reality. Compositors play a pivotal role in creating a final, credible image by combining various digital assets effectively. The course emphasises understanding light, colour, composition, and perspective to achieve realistic results. Aspiring artists gain the skills needed to work collaboratively with other VFX professionals and contribute to the composition of images and videography.            ", 
            trigger:'course-end',
          },
          {
            id:'f1', 
            message:"Mantriix Studios presents the FX(Unreal) course, providing a powerful toolkit for game development, architectural visualisation, and film and television content creation. The program explores Unreal Engine's advanced graphics engine and dynamic features, making it suitable for real-time VFX elements. Students learn to harness Unreal's capabilities for creating immersive visual effects. This course caters to those interested in leveraging cutting-edge technology for the development of interactive and engaging content in various industries. ", 
            trigger:'course-end',
          },
          {
            id:'course-end', 
            options:[
              {value:'Learn More', label:'Learn More', trigger:'learn'},
              {value:'Register Now', label:'Register Now', trigger:'c-register'},
              {value:'Contact Us', label:'Contact Us', trigger:'c-contact'}
            ] 
          },
          {
            id:'learn', 
            component:<div>
                <p>Learn More: Paint in VFX Course Contents:</p>
                <ul classNam="a">
                <li>Introduction to VFX Painting</li>
                <li>Brush Techniques and Styles</li>
                <li>Texture Application on 3D Models</li>
                <li>Color Grading and Correction</li>
                <li>Background Removal and Replacement</li>
                <li>Digital Restoration Techniques</li>
                <li>Software Tools and Applications</li>
                <li>Building a Strong Portfolio</li>
                <li>Networking in the VFX Industry</li>
                <li>Industry Events and Professional Organizations</li>
                  </ul>
              <p>Learn More: Match Move Course Contents:</p>
              <ul classNam="a">
                <li>Introduction to Match Move in VFX</li>
                <li>Object Tracking Techniques</li>
                <li>Camera Tracking Applications</li>
                <li>Motion Capture Integration</li>
                <li>Handling High-Quality Footage</li>
                <li>Time-Consuming Aspects</li>
                <li>Software and Tools for Match Move</li>
                <li>Practical Applications in Film Production</li>
                <li>Real-world Project Exercises</li>
              </ul>

              <p>Learn More: 3D Animation Course Conten:</p>
              <ul classNam="a">
                <li>Introduction to 3D Animation</li>
                <li>3D Modeling Fundamentals</li>
                <li> Texturing and Shading Techniques</li>
                <li>Animation and Rigging Basics</li>
                <li>Industry-Standard Software (Maya, Blender, ZBrush)</li>
                <li>Career Opportunities in Film and Television</li>
                <li>Video Game Development Applications</li>
                <li>Architectural and Interior Design Visualization</li>
                <li>Medical and Scientific Visualisation</li>
                <li>Creating a Professional Animation Portfolio</li>
              </ul>

              <p>Learn More: Compositing Course Contents</p>
              <ul classNam="a">
                <li>Introduction to VFX Compositing</li>
                <li> Connecting Live-Action and Digital Elements</li>
                <li> Enhancing Digital Properties</li>
                <li>   Realistic Image Composition</li>
                <li> Importance of Light, Color, and Perspective</li>
                <li> Collaborative Work with VFX Artists</li>
                <li>Image and Videography Composition</li>
                <li> Software and Tools for Compositing</li>
                <li>Creating Credible Visual Effects</li>
                <li>  Practical Application in Industry Workflow</li>
              </ul>

              <p>Learn More: FX (Unreal) Course Contents</p>
              <ul classNam="a">
                <li>  Introduction to FX in Unreal</li>
                <li>Unreal Engine's Creation Tools</li>
                <li>Game Development Applications</li>
                <li> Architectural and Automotive Visualization</li>
                <li>   Film and Television Content Creation</li>
                <li>Real-time Visual Effects in VFX</li>
                <li> Digital Production Tools in Unreal</li>
                <li> Interactive and Immersive Elements</li>
                <li> Broadcasting Visual Effects in Real-time</li>
                <li> Project-based Learning and Practical Exercises</li>
              </ul>
            </div>,
            trigger:"learn-end"
          },
          {
            id:'learn-end', 
            message:"Ready to unleash your creativity and become a VFX Master? Enter your mobile number below to get started!", 
            trigger:"learn-end-2"
          },
          {
            id:'learn-end-2',
            component:<User type="brochure" />
          },
          {
            id:'c-contact', 
            message:"Have a question? Want to speak to a representative? Enter your mobile number below and we'll be happy to get in touch!", 
            trigger:"c-contact-2"
          },
          {
            id:'c-contact-2',
            component:<User type="call-back" />
          },
          {
            id:'c-register', 
            message:"Ready to take the next step and schedule a free consultation with our team? Enter your mobile number and choose a date and time that works best for you!", 
            trigger:"c-register2"
          },
          {
            id:'c-register2', 
            message:"To confirm your appointment, please provide the following information:", 
            trigger:"c-register-3"
          },
          {
            id:'c-register-3',
            component:<User type="brochure" />
          },
          {
            id:'Download Brochure-1', 
            message:"Download our free brochure to learn more about Mantriix Studios and our courses! Enter your mobile number below to receive the download link.",
            trigger:"Download Brochure-2"
            
          },
          {
            id:'Download Brochure-2', 
            component:<User type="brochure" />
            
          },
          {
            id:'arrange-call-back-1', 
            message:"Ready to take the next step and schedule a free consultation with our team? Enter your mobile number and choose a date and time that works best for you!            ",
            trigger:"arrange-call-back-2"
          },
          {
            id:'arrange-call-back-2', 
            message:"To confirm your appointment, please provide the following information:",
            trigger:"arrange-call-back-3"
          },
          {
            id:'arrange-call-back-3', 
            component:<User type="call-back"/>
          },
          {
            id:'brochure-otp', 
            component:<Login  type="brochure"/>,
          },
          {
            id:'callBack-otp', 
            component:<Login  type="call-back"/>,
          },
          {
            id:'Get Callback', 
            message:'Sorry to hear that.', 
            end:true
          },
          {
            id:'brochure',
            component:<BrochureCard/>,
            trigger:"intro-user"
          },
          {
            id:'book-call',
            component:<DateCompo/>
          },
          {
            id:'call-options', 
              options:[
                {value:'Courses We Offer', label:'Courses We Offer', trigger:'c1'},
                {value:'Contact Us', label:'Contact Us', trigger:'arrange-call-back-1'},
                {value:'Download Brochure', label:'Download Brochure', trigger:'Download Brochure-1'},
                {value:'Get Callback', label:'Get Callback', trigger:'arrange-call-back-1'},
              ] 
          },
          {
            id:"end",
            message:"Would you like to continue the chat ?",
            trigger:"end1"
          },
          {
            id:'end1', 
            options:[
            {value:'Download Brochure', label:'No', trigger:'0'},
            {value:'Get Callback', label:'Yes', trigger:'intro'},
            ] 
          }
          ,
          {
            id:'0',
            message:"Exited",
            end:true
          }
        ]}
        {...config}
      />

      </div>
    :<div></div>
    }
    <section>
    {/* <div type="button" style={{zIndex:"1000"}} onClick={()=>{ */}
    <div type="button" onClick={()=>{
        const c1=document.querySelector("#chat1");
        const c2=document.querySelector("#chat2");
        const bot=document.querySelector(".bot");
        if(c2.style.display==="block")
        {
            c2.style.display="none";
            c1.style.display="block";
            bot.style.opacity=0;
            bot.style.zIndex=-1000;
          }
          else
          {
            bot.style.opacity=1;
            bot.style.zIndex=1000;
            c1.style.display="none";
            c2.style.display="block";
        }
        // if(gpt===true)
        // {
        //   setGpt(false);
        // }
        // else
        // {
        //   setGpt(true);
        // }
      }} id="chatBot"  className="btn btn-primary"  style={{zIndex:9001}}>
        <img id="chat1"  src={logo} alt="" style={{height:"50px",color:"white"}}/>
        <img id="chat2"   src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png" alt="" style={{height:"60px"}}>
        </img></div>
    </section>
    </>
  )
}
