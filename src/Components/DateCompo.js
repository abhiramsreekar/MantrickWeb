import React,{useState,useContext} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import context from "../context/useContext";
export default function DateCompo({triggerNextStep}) {
  const {ph,setPh,name,setName,msg,setMsg,email,setEmail}=useContext(context);
  const {openSnackbar,setOpenSnackbar,snackbarMessage,snackbarSeverity,setSnackbarSeverity,showSnackbar,setSnackbarMessage}=useContext(context);
    const [date, setDate] = useState("");
    const submitDate=(e)=>{


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
      // https://api.ultramsg.com/instance74996/messages/chat?token=nbridiw147r4ch9c&to=+919951661022&body=WhatsApp+API+on+UltraMsg.com+works+good&priority=10
      var url = "https://api.ultramsg.com/instance86007/messages/chat";
    var data = {
      token: "nexiu3b9pflmtg98",
      to: "+91"+ph,
      body: JSON.stringify(`${name} Thank you for scheduling a callback, we look forward to talking to you! Your date and time:${formattedDate}`)
    };
    fetch(url, {
      // mode: 'no-cors',
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
        
        console.error("Error:", error);
      });
      
      // data storing on google sheets

      fetch(`https://sheet.best/api/sheets/68244d50-c52a-4fd2-83f8-95cdadac0bdb/mobile/${ph}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name,"email":email,mobile:ph,date:formattedDate2,meeting:formattedDate}),
      })
        .then(response => response.json())
        .then(responseData => {
          if(JSON.stringify(responseData)==="[]")
          {

            fetch(`https://sheet.best/api/sheets/68244d50-c52a-4fd2-83f8-95cdadac0bdb`, {
                  method: "POSt",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({name:name,"email":email,mobile:ph,date:formattedDate2,meeting:formattedDate}),
        })
        .then(response => response.json())
        .then(responseData => {
          setEmail("");
        setPh("");
        setName("");
          console.log("inner new inseted response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          showSnackbar('Meeting Not Scheduled,Try Again!', 'error');
          console.error("Error:", error);
           });
          }
          else
          {
            showSnackbar('Meeting  Scheduled Successfully!', 'success');
          }
          setEmail("");
        setPh("");
        setName("");
          console.log("response is:"+JSON.stringify(responseData));
        })
        .catch(error => {
          showSnackbar('Meeting Not Scheduled,Try Again!', 'error');
          console.error("Error:", error);
        });

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
