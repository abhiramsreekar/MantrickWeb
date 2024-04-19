import React,{useState,useContext} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import context from "../context/useContext";
export default function DateCompo({triggerNextStep}) {
  const {ph,setPh,name,setName,msg,setMsg,email,setEmail}=useContext(context);
  const {openSnackbar,setOpenSnackbar,snackbarMessage,snackbarSeverity,setSnackbarSeverity,showSnackbar,setSnackbarMessage}=useContext(context);
    const [date, setDate] = useState("");
    const submitDate=(e)=>{
      e.preventDefault();
      // https://api.ultramsg.com/instance74996/messages/chat?token=nbridiw147r4ch9c&to=+919951661022&body=WhatsApp+API+on+UltraMsg.com+works+good&priority=10
      var url = "https://api.ultramsg.com/instance74996/messages/chat";
    var data = {
      token: "nbridiw147r4ch9c",
      to: "+91"+ph,
      body: JSON.stringify(`${name} Thank you for scheduling a callback, we look forward to talking to you! Your date and time:${date}`)
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

      fetch(`https://sheet.best/api/sheets/9f32ac99-3673-4bfb-81bc-6452c996d806/mobile/${ph}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name,"email":email,mobile:ph,date:new Date(),meeting:date}),
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
                  body: JSON.stringify({name:name,"email":email,mobile:ph,date:new Date(),meeting:date}),
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
