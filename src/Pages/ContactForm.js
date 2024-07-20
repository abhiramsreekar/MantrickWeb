import React,{useState} from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState("");
  const [request,setRequest]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [write,setWrite]=useState("");
  const onSubmit=(e)=>{
    e.preventDefault();
    fetch("https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com/data.json", {
    method: "POST", // Specify the request method
    headers: {
        "Content-Type": "application/json" // Set the content type to JSON
    },
    body: JSON.stringify({
      "name":{name},
      "mobile":{mobile},
      "Service_request":{request},
      "Email":{email},
      "Message":{message},
      "Write_to_us":{write}
    }) // Convert the data object to a JSON string
})
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse the JSON response
})
.then(data => {
    console.log("Success:"); // Log the response data
})
.catch(error => {
    console.error("Error:", error); // Handle any errors
});
  }
  return (
      
    <div className="contact_container">
      <div className="contact_content">
      
      <div className="contact_form-group">
            <label htmlFor="message">Write to Us</label>
            <textarea id="message" name="message" minLength={10} value={write} onChange={(e)=>{
              setWrite(e.target.value);
            }}></textarea>
      </div>
        <form className="contact_form" onSubmit={onSubmit}>
          <div className="contact_form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" minLength={4} value={name} onChange={(e)=>{
              setName(e.target.value);
            }}/>
          </div>
          <div className="contact_form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="text" id="mobile" name="mobile" pattern="[6-9]{1}[0-9]{9}" value={mobile} onChange={(e)=>{
              setMobile(e.target.value);
            }}/>
          </div>
          <div className="contact_form-group">
            <label htmlFor="service">Service Request</label>
            <input type="text" id="service" name="service" value={request} onChange={(e)=>{
              setRequest(e.target.value);
            }}/>
          </div>
          <div className="contact_form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
          </div>
          <div className="contact_form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" minLength={10} value={message} onChange={(e)=>{
              setMessage(e.target.value);
            }}></textarea>
          </div>
          <div className="contact_form-group" style={{alignItems:"center",justifyContent:"center"}}>
          <button type="submit" className="btn btn-primary" style={{width:"300px",height:"50px"}}>Submit</button>
          </div>
          
        </form>
      </div>
      <div className="contact_contact-info">
        <div style={{margin:"7vh auto"}}>
        <p><strong>
          For Visual Effects & Business
          </strong>
          </p>
        <p>muneswar@mantrickstudios.com</p>
        <p>anil@mantrickstudios.com</p>
        </div>
        <div style={{margin:"7vh auto"}}>
        <p><strong>
          For VFX & Academy
          </strong>
          </p>
        <p>kumar@mantrickstudios.com</p>
        </div>
        <div style={{margin:"7vh auto"}}>
        <p><strong>For Careers</strong></p>
        <p>hr@mantrickstudios.com</p>
        </div>
        <div style={{margin:"7vh auto"}}>
        <p><strong>For General Enquiry</strong></p>
        <p>info@mantrickstudios.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
