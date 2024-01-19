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
  const {ph,setPh}=useContext(context);
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
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
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
        if(type==="brochure")
        {
          triggerNextStep({trigger:"brochure"});
        }
        else
        {
          triggerNextStep({trigger:"book-call"});
        }
      })
      .catch((error) => {
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