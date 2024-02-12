import React,{useState,useContext} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import context from "../context/useContext";
export default function DateCompo({triggerNextStep}) {
  const {ph,setPh,name,setName,msg,setMsg,email,setEmail}=useContext(context);
    const [date, setDate] = useState(new Date());
    const submitDate=(e)=>{
      e.preventDefault();
      // message sending to whatsapp


      var url = "https://api.ultramsg.com/instance74996/messages/chat";
    var data = {
      token: "nbridiw147r4ch9c",
      to: "+91"+ph,
      body: JSON.stringify({"email":email,"msg":"WhatsApp API on UltraMsg.com works good "+name,meetingDate:date,"link":"https://google.com"})
    };
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
        
        console.error("Error:", error);
      });
      
      // data storing on google sheets

      fetch(`https://sheet.best/api/sheets/29cba8d3-cb7f-4c2a-923b-2a77bf108c85/mobile/${ph}`, {
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

            fetch(`https://sheet.best/api/sheets/29cba8d3-cb7f-4c2a-923b-2a77bf108c85`, {
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

      triggerNextStep({trigger:"intro-user"});
    }
  return (
    <div> 
    <form id="msform">
  <fieldset>
  <h2 class="fs-title">Enter Date To Get Call Back</h2>
  <input type="Date" name="date" value={date} placeholder="Enter Date" />
  <input type="submit" onClick={submitDate} name="next"  class="next action-button" value="Next" />
  </fieldset>
  </form>
    </div>
  )
}
