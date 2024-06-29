import React, { useState,useEffect,useContext} from "react";
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
  const {openSnackbar,setOpenSnackbar,snackbarMessage,snackbarSeverity,setSnackbarSeverity,showSnackbar,setSnackbarMessage}=useContext(context);
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
      showSnackbar('OTP Sended Sucessfully!', 'success');
      // document.getElementById("recaptcha-container").style.display="none";
    })
    .catch((error) => {
      setLoading(false);
      showSnackbar('OTP Not Sent', 'error');
        toast.error(error.message);
      });
  }
  
  function onOtpverify() {
    const da=new Date();
    let hours = da.getHours();
    const minutes = da.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes to be two digits
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    
    // Create the formatted date string
    const formattedDate = `${da.toLocaleDateString()} ${hours}:${minutesStr} ${ampm}`;
    window.confirmationResult
      .confirm(otp)
      .then(async (result) => {
       
      
      if(type==="brochure")
      {
        const store=await fetch('https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users.json',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name:name,email:email,mobile:ph,Schedule_time:'Not yet',last_sign_in_date:formattedDate}),
        }
      );
          triggerNextStep({trigger:"brochure"});
        }
        else
        {
          triggerNextStep({trigger:"book-call"});
        }
      })
      .catch((error) => {
        showSnackbar('OTP Not Correct!', 'error');
        
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