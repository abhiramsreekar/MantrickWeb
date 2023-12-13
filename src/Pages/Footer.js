import React from 'react'
import './footer.css';
import logo from '../Images/mantrick.png';
export default function Footer() {
  return (
    <div className='outerfooter' id="footer">
    <div className='footer'>
        <div className='f3'>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1002133133356!2d78.36752707516648!3d17.454916983443763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c575532ed7%3A0x8b832bc3a49ac5a7!2s3%20Cube%20Towers!5e0!3m2!1sen!2sin!4v1702214300879!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p><strong className='underline'>Address</strong></p>
            <div className='p'>
            <p>Sixth floor, 3 Cube Towers, White Field Rd,</p>
            <p>Whitefields, HITEC City,</p>
            <p>Hyderabad, Telangana 500081.</p>
            <p>Phone: 9553695178 / 8106804212</p>
            <p>Mail us: anil@mantrickstudios.com</p>
            <p>muneswar@mantrickstudios.com</p>
            </div>
        </div>
        <div className='f2'>
            <div className='f21'>
                <p ><strong className='underline '> Quick Links</strong></p>
                <div className='links'>
                    <a href='#'>Home</a>
                    <a href='#'>About us</a>
                    <a href='#'>Meet Us</a>
                    <a href='#'>Our Works</a>
                    <a href='#'>Gallery</a>
                    <a href='#'>Chat</a>
                    <a href='#'>Call Back</a>
                </div>
            </div>
            <div className='f22'>
                <p ><strong className='underline '>Services</strong></p>
                <div className='links'>
                    <a href='#'>Roto</a>
                    <a href='#'>Composting</a>
                    <a href='#'>Vfx</a>
                    <a href='#'>Paint</a>
                    <a href='#'>Match Move</a>
                    <a href='#'>3D</a>
                </div>
            </div>
            <div className='f21'></div>
        </div>
      <div className='f1'>
        <img src={logo} alt=''/>
        <div className='fabox'>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-youtube"></a>
        <p >Email Us:<a>mantrick@gmail.com</a></p>
        <p><strng className='underline'> Contact Us:</strng></p>
        </div>
        <form style={{display:"flex"}}> 
            <input type='email' placeholder='Enter Your Email'/>
            <button type='button'><i class="fa fa-envelope" style={{margin:"0px",padding:"0px",color:"white",backgroundColor:"transparent"}}></i></button>
        </form>
      </div>
    </div>
      <div className='rights'><h6 style={{color:"white",textAlign:"center"}}>&copy; 2023 All rights are reserved</h6></div>
    </div>
  )
}
