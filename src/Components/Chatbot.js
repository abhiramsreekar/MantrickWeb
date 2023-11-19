import React, {useState, Component,useContext, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import User from './User';
import Login from './Login'
import './index.css'
import context from '../context/useContext';
import DateCompo from './DateCompo';
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];
// all available config props
const config ={
  width: "28vw",
  height: "70vh",
};
export default function Chatbot() {
  const BrochureCard=(triggerNextStep)=>{
    return(
      <div class="">
          <div class="card" style={{width: "18rem"}}>
        <img src="https://cdn.pixabay.com/photo/2015/06/30/08/07/lens-826308_1280.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Brochure </h5>
        <p class="card-text">Some quick example text to build on the card title .</p>
        <a href="https://google.com" target="_blank" class="btn btn-primary">Download brochure</a>
  </div>
</div>
            </div>
    )
    
  }
  const [otp,setOtp]=useState(null);
  const {ph,setPh,gpt,setGpt,gptState,setGptState}=useContext(context);
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
            <label for="exampleInputPassword1" className="form-label">Otp:</label>
            <input type="text"  className="form-control otp" id="exampleInputPassword1" />
            <button type="submit"  onClick={checkOtp} className="btn btn-primary" >Submit</button>
        </div>
      )

  }
  return (
    <>
    {
      gpt?<ChatBot id="bot" style={{right:"0px",position:"absolute",top:"100px",backgroundColor:"black"}}
      steps={[
        {
          id:'intro', 
          message:"Hi There. Welcome to Mantrick Studios", 
          trigger:'i1',
        },
        {
          id:"i1",
          // component:<Login  msg="brochure"/>,
          message:"trigger:'intro-user",
          trigger:'i2',
        },
        {
          id:"i2",
          message:"Hiii user1",
          trigger:'i3',
        },
        {
          id:"i3",
          message:"Hiii user2",
          trigger:'intro-user',
        },
        {
          id:'intro-user', 
          options:[
          {value:'Download Brochure', label:'Download Brochure', trigger:'Download Brochure'},
          {value:'Get Callback', label:'Get Callback', trigger:'arrange-call-back'},
          ] 
        },
        {
          id:'Download Brochure', 
          component:<User type="brochure" />
          
        },
        {
          id:'arrange-call-back', 
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
          trigger:"brochure-options"
        },
        {
          id:'book-call',
          component:<DateCompo/>
        },
        {
          id:'brochure-options',
          options:[
            {value:'1', label:'Download Brochure', trigger:'end'},
            {value:'2', label:'Get Callback', trigger:'end'},
            {value:'3', label:'Get Callback', trigger:'end'},
            // {value:'4', label:'Get Callback', trigger:'end'},
            // {value:'5', label:'Get Callback', trigger:'end'}
            ] 
        },
        {
          id:'call-options', 
          options:[
            {value:'1', label:'Download Brochure', trigger:'end'},
            {value:'2', label:'Get Callback', trigger:'end'},
            {value:'3', label:'Get Callback', trigger:'end'}
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
    :<div></div>
    }
    </>
  )
}
