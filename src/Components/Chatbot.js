import React, {useState, Component,useContext, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import User from './User';
import Login from './Login'
import './index.css'
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
// type Value = ValuePiece | [ValuePiece, ValuePiece];
// all available config props
const config ={
  width: "28vw",
  height: "70vh",
};
export default function Chatbot() {
  
    const [otp, setOtp] = useState("");
    const [phone,setPhone] = useState("");
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
  
  function onCaptchaVerify(id) {
    if (!window.RecaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        id===1?"recaptcha-container2":"recaptcha-container3",
        {
          size:"invisible"
        }
        );
        window.recaptchaVerifier.verify();
      }
    }
    function onOtpverify() {
      window.confirmationResult
        .confirm(otp)
        .then(async (result) => {
          // User signed in successfully.
          const user = result.user;
          setUser(user);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
        });
      }
  function onSignup(id) {
    
    setLoading(true);
    onCaptchaVerify(id);
    const appVerifier = window.recaptchaVerifier;
    var phoneNumber;
    if(id==1)
    {
      phoneNumber = "+91"+document.querySelector(".ss-phone-2").value;
    }
    else
    {
      phoneNumber = "+91"+document.querySelector(".ss-phone-3").value;
    }
    alert(phoneNumber);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOtp(true);
      // toast.success("OTP Sended Sucessfully");
      showSnackbar('OTP Sended Sucessfully!', 'success');
      setOtpbox("true");
    })
    .catch((error) => {
      setLoading(false);
      showSnackbar('OTP Not Sent!', 'error');
      setEmail("");
        setPhone("");
        setName("");
      toast.error(error.message);
      });
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


  const onDowloadBrochure=(e)=>{
    // https://api.ultramsg.com/instance74996/messages/chat?token=nbridiw147r4ch9c&to=+919951661022&body=WhatsApp+API+on+UltraMsg.com+works+good&priority=10
    e.preventDefault();
    // alert(phone);
    var url = "https://api.ultramsg.com/instance74996/messages/chat";
    var data = {
      token: "nbridiw147r4ch9c",
      to: "+91"+phone,
      body: JSON.stringify(`${name} Thank you for download our brochure, we look forward to talking to you!
      Download our brochure-
      https://drive.google.com/file/d/1v2JQvY40RLbKf8W8J3eyLH22d4ZYQenk/view
      `)
    };
    // whatsapp msg sending

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        showSnackbar('Brochure details has been sent to Whatsapp', 'success');
        setBsubmit("s");
      })
      .catch(error => {
        showSnackbar('Data Not Went Whatsapp', 'error');
        setBsubmit(null);
        console.error("Error:", error);
      });

      // Data sending to google sheets
      fetch(`https://sheet.best/api/sheets/9f32ac99-3673-4bfb-81bc-6452c996d806/mobile/${phone}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name,"email":email,mobile:phone,date:new Date(),meeting:"not yet"}),
      })
        .then(response => response.json())
        .then(responseData => {
          if(JSON.stringify(responseData)==="[]")
          {

            fetch(`https://sheet.best/api/sheets/9f32ac99-3673-4bfb-81bc-6452c996d806`, {
                  method: "POSt",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({name:name,"email":email,mobile:phone,date:new Date(),meeting:"not yet"}),
        })
        .then(response => response.json())
        .then(responseData => {
          setEmail("");
        setPhone("");
        setName("");
        setBotp("");
        setEmailbox(null);
        setOtpbox(null);
        showSnackbar('Details sent to your Whatsapp successfully', 'success');
          console.log("inner new inseted response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          // alert("Data has not been sent");
          showSnackbar('Data Has Not Been Sent', 'error');
          console.error("Error:", error);
           });
          }
          else
          {
            // alert("we got user");
          }
          setEmail("");
        setPhone("");
        setName("");
        setBotp("");
        setEmailbox(null);
        setOtpbox(null);
          console.log("response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          showSnackbar('data  not sent to database', 'error');
          console.error("Error:", error);
        });
        
        
  }
  const onScheduleSubmit=(e)=>{
    e.preventDefault();
    var url = "https://api.ultramsg.com/instance74996/messages/chat";
    var data = {
      token: "nbridiw147r4ch9c",
      to: "+91"+phone,
      body: JSON.stringify(`${name} Thank you for scheduling a callback, we look forward to talking to you! Your date and time:${DateAndTime}`)
    };
    // whatsapp msg sending

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
    // ,{ mode: 'no-cors'}
    )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        showSnackbar('Meeting details has been sent to Whatsapp', 'success');
        setBsubmit("s");
      })
      .catch(error => {
        // alert("msg not sent");
        showSnackbar('msg not sent', 'erro');
        setBsubmit(null);
        console.error("Error:", error);
      });

      // Data sending to google sheets
      fetch(`https://sheet.best/api/sheets/9f32ac99-3673-4bfb-81bc-6452c996d806/mobile/${phone}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name,"email":email,mobile:phone,date:new Date()}),
      })
        .then(response => response.json())
        .then(responseData => {
          if(JSON.stringify(responseData)==="[]")
          {
            fetch(`https://sheet.best/api/sheets/9f32ac99-3673-4bfb-81bc-6452c996d806`, {
                  method: "POSt",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({name:name,"email":email,mobile:phone,date:new Date()}),
        })
        .then(response => response.json())
        .then(responseData => {
          setEmail("");
        setPhone("");
        setName("");
        setBotp("");
        setEmailbox(null);
        setOtpbox(null);
        showSnackbar('Meeting Has Been Scheduled Successfully', 'success');
          console.log("inner new inseted response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          showSnackbar('Data  Not Submitted', 'error');
          console.error("Error:", error);
           });
          }
          else
          {
            showSnackbar('Failed to schedule yor meet. ', 'error'); 
          }
          setEmail("");
        setPhone("");
        setName("");
        setBotp("");
        setEmailbox(null);
        setOtpbox(null);
          console.log("response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          console.log("data  not sent to google sheet");
          console.error("Error:", error);
        });
        
  }
  function onOtpverify() {
    window.confirmationResult
      .confirm(Botp)
      .then(async (result) => {
        // User signed in successfully.
        const user = result.user;
        setUser(user);
        setOtpstatus(null);
        setEmailbox("ss");
        setLoading(false);
      })
      .catch((error) => {
        setOtpstatus("s");
        console.log(error.message);
        toast.error(error.message);
      });
    }
    function auto_popUp(){
      setTimeout(()=>{
        document.querySelector(".schedule-meet").style.display="flex";
      },30000)
    }
    useEffect(()=>{
      auto_popUp();
    },[])
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
      <form>
      <div className='ss-box'>
          <label htmlFor="ss-name" className="ss-label">Name:</label>
          <input type="text" minLength={4} id="ss-name" name='ss-name' value={name} onChange={(e)=>{
              setName(e.target.value);
          }} className='ss-input' placeholder='Enter Your Name'/>
        </div>
      <div className='ss-box'>
          <label htmlFor="ss-name"  className="ss-label" 
          >Ph.No:</label>
          <input type="text" id="ss-name"  maxLength={10} value={phone} onChange={(e)=>{
            setPhone(e.target.value);
          }} className='ss-input ss-phone-2'  placeholder='Enter Phone Number'/>
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
         !otpbox?      <div className='ss-box button'>
         <Button type='submit' onClick={onDowloadBrochure}>Download Brochure</Button>
         {
           !Bsubmit?<p >by pressing this button, you are agreed to receive message on whatsapp</p>:<p style={{color:"green"}}>Brochure details sent to your whatsapp successfully</p>
         }
         </div>
        :<>
        
        <div className='ss-box button'>
        <Button type='button'  onClick={()=>{
            onSignup(2);
        }}>SEND OTP</Button>
        </div>
        </>
      }
      </form>
    </div>
    {/* schedule */}
    <div id="recaptcha-container2"  style={{display:"none"}} className="mt-6 recaptcha-container2"></div>
      <div id="recaptcha-container3"  style={{display:"none"}} className="mt-6 recaptcha-container3"></div>
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
      <form>
      <div className='ss-box'>
          <label htmlFor="ss-name" className="ss-label">Name:</label>
          <input type="text" id="ss-name" name='ss-name'  value={name} onChange={(e)=>{
            setName(e.target.value);
          }} className='ss-input' placeholder='Enter Your Name'/>
        </div>
      <div className='ss-box'>
          <label htmlFor="ss-name" className="ss-label">Ph.No:</label>
          <input type="text" id="ss-name3" name='ss-name' maxLength="10" value={phone} onChange={(e)=>{
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

      <p>Please select date and time of visit</p>
      <div className='ss-box ss-date'>
        <label htmlFor="birthdaytime"  className="ss-label">Date/Time:</label>
        <input type="datetime-local" value={DateAndTime} onChange={(e)=>{
          setDateAndTime(e.target.value);
        }} id="birthdaytime" className='ss-input' name="birthdaytime"></input>
      </div>

          </>
        :<></>
      }
      {
         !otpbox?<div className='ss-box button'>
        <Button type='button'  onClick={onScheduleSubmit}>Schedule Meet</Button>
        {
          Bsubmit?<p style={{color:"green"}}>by pressing this button, you are agreed to receive message on whatsapp</p>:<p>scheduled meeting confirmation details sent to your whatsapp successfully</p>
        }
        </div>:<>
        
        <div className='ss-box button'>
        <Button type='button'  onClick={()=>{
            onSignup(2);
        }}>SEND OTP</Button>
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
