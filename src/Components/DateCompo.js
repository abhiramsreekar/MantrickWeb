import React,{useState} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
export default function DateCompo({triggerNextStep}) {
    const [date, setDate] = useState(new Date());
    const submitDate=(e)=>{
      e.preventDefault();
      triggerNextStep({trigger:"intro-user"})
    }
  return (
    <div> 
    <form id="msform">
  <fieldset>
  <h2 class="fs-title">Enter Date To Get Call Back</h2>
  <input type="Date" name="date" placeholder="Enter Date" />
  <input type="submit" onClick={submitDate} name="next"  class="next action-button" value="Next" />
  </fieldset>
  </form>
    </div>
  )
}
