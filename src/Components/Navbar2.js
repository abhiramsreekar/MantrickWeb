import React ,{useContext}from 'react'
import './Navbar2.css';
import context from '../context/useContext';
import image from '../Images/mantrick.png'
export default function Navbar2() {
    const {gpt,setGpt}=useContext(context);
  return (
    <div className='nav'>
    <header class="header">
    <h1 class="logo"><a href="#"><img src={image} alt="" width={"200px"}/></a></h1>
  <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Brochure</a></li>
      <li><a href="#">Schedule Meet</a></li>
      <li><a href="#">Contact Us</a></li>
  </ul>
      <div type="button"  style={{zIndex:"1000"}} onClick={()=>{
        if(gpt===true)
        {
          setGpt(false);
        }
        else
        {
          setGpt(true);
        }
      }} id="chatBot"  class="btn btn-primary" ><img src='https://cdn.pixabay.com/photo/2016/04/01/11/09/cartoon-1300224_640.png' alt="" style={{height:"100px"}}></img></div>
</header> 

    </div>

  )
}
