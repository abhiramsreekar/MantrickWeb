import {React,useState,useContext} from 'react'
import './index.css'
import context from '../context/useContext';
import PhoneInput from 'react-phone-number-input'
export default function User({triggerNextStep,type}) {
    const {ph,setPh,name,setName,msg,setMsg,email,setEmail}=useContext(context);
    const otp=(e)=>{
        e.preventDefault();
        if(type==="call-back")
        {
            triggerNextStep({ trigger: 'callBack-otp'});
        }
        else
        {
            triggerNextStep({ trigger: 'brochure-otp' });
        }
    }
return (
    <>
<form id="msform">

  {/* <ul id="progressbar">
    <li class="active">Account Setup</li>
    <li>Social Profiles</li>
    <li>Personal Details</li>
  </ul> */}

  <fieldset>
    <h2 class="fs-title">Enter Your Details</h2>
    {/* <h3 class="fs-subtitle">This is step 1</h3> */}
    <input type="email" onChange={(e)=>{ setEmail(e.target.value)}} name="email" placeholder="Email" />
    <input type="text" onChange={(e)=>{ setName(e.target.value)}} name="name" placeholder="Full Name" />
    <textarea name="address" onChange={(e)=>{ setMsg(e.target.value)}} placeholder="Enter message"></textarea>
    <input type="text" onChange={(e)=>{ setPh(e.target.value)}} name="ph" placeholder="Phone Number" />
    {/* <PhoneInput
      placeholder="Enter phone number"
      onChange={}/> */}
    <input type="submit" name="next" onClick={otp} class="next action-button" value="Next" />
  </fieldset>
</form>
    </>
);
}
