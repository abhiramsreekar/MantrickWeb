import React,{useState,useContext} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import context from "../context/useContext";
export default function DateCompo({triggerNextStep}) {
  const {ph,setPh,name,setName,msg,setMsg,email,setEmail}=useContext(context);
  const {openSnackbar,setOpenSnackbar,snackbarMessage,snackbarSeverity,setSnackbarSeverity,showSnackbar,setSnackbarMessage}=useContext(context);
    const [date, setDate] = useState("");
    const submitDate=async (e)=>{


      const da=new Date(date);
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

    const da2=new Date();
    let hours2 = da2.getHours();
    const minutes2 = da2.getMinutes();
    const ampm2 = hours2 >= 12 ? 'PM' : 'AM';
    
    // Convert hours from 24-hour format to 12-hour format
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12; // the hour '0' should be '12'
    
    // Format minutes to be two digits
    const minutesStr2 = minutes2 < 10 ? '0' + minutes2 : minutes2;
    
    // Create the formatted date string
    const formattedDate2 = `${da2.toLocaleDateString()} ${hours2}:${minutesStr2} ${ampm2}`;
      e.preventDefault();
      
      
      // data storing on google sheets
      try{
      const store=await fetch('https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/users.json',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name:name,email:email,mobile:ph,Schedule_time:formattedDate,last_sign_in_date:formattedDate2}),
      }
      )
    }catch(error) {
          showSnackbar('Meeting Not Scheduled,Try Again!', 'error');
          console.error("Error:", error);
        };

      triggerNextStep({trigger:"intro-user"});
      }
  return (
    <div> 
    <form id="msform">
  <fieldset>
  <h2 class="fs-title">Enter Date To Get Call Back</h2>
  <input type="datetime-local" name="date" value={date} onChange={(e)=>{
    setDate(e.target.value);
  }} placeholder="Enter Date" />
  <input type="submit" onClick={submitDate} name="next"  class="next action-button" />
  </fieldset>
  </form>
    </div>
  )
}
