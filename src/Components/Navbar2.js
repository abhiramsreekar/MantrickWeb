import React ,{useContext}from 'react'
import './Navbar2.css';
import context from '../context/useContext';
export default function Navbar2() {
    const {gpt,setGpt}=useContext(context);
  return (
    <div className='nav'>
    <header class="header">
    <h1 class="logo"><a href="#">Flexbox</a></h1>
  <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
  </ul>
      <button type="button"  style={{zIndex:"1000"}} onClick={()=>{
        if(gpt===true)
        {
          setGpt(false);
        }
        else
        {
          setGpt(true);
        }
      }} id="chatBot"  class="btn btn-primary" >Chat With Bot</button>
</header> 

    </div>

  )
}
