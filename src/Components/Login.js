import React, { useState,useEffect,useContext} from "react";
// import Style from "../Auth/login.module.css";
// import bgimg from "../Asset/Img/back.jpg";
// import Twilio from 'twilio';
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { auth } from "./Firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import context from "../context/useContext";
const Login = ({triggerNextStep,type}) => {
  const {ph,setPh,name,setName,msg,setMsg,email,setEmail}=useContext(context);
  useEffect(()=>{
    onSignup();
  },[])
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  function onCaptchaVerify() {
    if (!window.RecaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
        );
        window.recaptchaVerifier.verify();
      }
  }
  function onSignup() {
    setLoading(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91"+ph;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOtp(true);
      toast.success("OTP Sended Sucessfully");
      // document.getElementById("recaptcha-container").style.display="none";
    })
    .catch((error) => {
      setLoading(false);
      alert("Otp bot sent.");
        toast.error(error.message);
      });
  }
  
  function onOtpverify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (result) => {
        // User signed in successfully.
        const user = result.user;
        setUser(user);
        setLoading(false);
        alert(ph);
        var url = "https://api.ultramsg.com/instance74996/messages/chat";
      var data = {
        token: "nbridiw147r4ch9c",
        to: "+91"+ph,
        body: JSON.stringify({"email":email,"msg":"WhatsApp API on UltraMsg.com works good ","link":"https://google.com"})
      };
      if(type==="brochure")
      {
        // message sending to whatsapp4

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
             
            })
            .catch(error => {
              alert("msg not sent");
              console.error("Error:", error);
            });

          // data storing on google sheet

          fetch(`https://sheet.best/api/sheets/29cba8d3-cb7f-4c2a-923b-2a77bf108c85/mobile/${ph}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name,"email":email,mobile:ph,date:new Date(),meeting:"not yet"}),
      })
        .then(response => response.json())
        .then(responseData => {
          if(JSON.stringify(responseData)==="[]")
          {

            fetch(`https://sheet.best/api/sheets/29cba8d3-cb7f-4c2a-923b-2a77bf108c85`, {
                  method: "POSt",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({name:name,"email":email,mobile:ph,date:new Date(),meeting:"not yet"}),
        })
        .then(response => response.json())
        .then(responseData => {
          setEmail("");
        setPh("");
        setName("");
          console.log("inner new inseted response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          alert("data  not sent to google sheet");
          console.error("Error:", error);
           });
          }
          else
          {
            alert("we got user");
          }
          setEmail("");
        setPh("");
        setName("");
          console.log("response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          alert("data  not sent to google sheet");
          console.error("Error:", error);
        });
          triggerNextStep({trigger:"brochure"});
        }
        else
        {
          triggerNextStep({trigger:"book-call"});
        }

      
      })
      .catch((error) => {
        alert("OTP not correct");
        console.log(error.message);
        toast.error(error.message);
      });
    }
  return (
    <div className={`d-flex justify-content-center`}>
      <script src="https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"></script>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <div id="recaptcha-container"  style={{display:"block",width:"65px",marginBottom:"50px"}} className="mt-6"></div>
    <div style={{display:"block",marginTop:"40px"}} >
    <a style={{color:"white"}}>Enter the otp sent to your registered mobile number</a>
      <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  shouldAutoFocus
                  renderInput={(props) => (
                    <input
                    {...props}
                    style={{
                      width: "30px",
                      marginRight: "12px",
                      marginTop:"0px",
                      color:"white"
                    }}
                    />
                    )}
                ></OtpInput>
        <button
                    className="btn btn-primary mt-3 w-75 "
                    onClick={onOtpverify}
                  >Verify</button>

    </div>
        
    </div>
    
  );
};

export default Login;