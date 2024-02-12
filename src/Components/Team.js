import React from 'react'
import './team.css'
export default function Team() {
  return (
    <>

    <div className='wrapper page team' id="team">
        <h1 className='head-one'>MEET OUR TEAM</h1>
        <div className='tcards'>
        <div className='tcard'>
            <img src='https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg'/>
            <h3 style={{position:"absolute",bottom:"-60px",color:"white",width:"100%",left:"0px"}}>Mr.Anil Kumar Telikepalli</h3>
            <div className='info'>
              <div className=''>
            {/* <h8 ><strong>Mr.Anil Kumar Telikepalli</strong> </h8> */}
                <p className='p'> Head of VFX Deparment</p>
                <div className='socialIcons'>
                    <ul> 
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-facebook"></span>
                        </a> 
                      </li>
                      {/* <li>
                        <a href="#">
                        <span></span>
                        <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-twitter"></span>
                          </a> 
                        </li> */}
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-instagram"></span>
                        </a> 
                      </li>
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-linkedin"></span>
                        </a> 
                      </li>
                    </ul>  
                </div> 
                        <p className='teamdes' >
                        "Avul Pakir Jainulabdeen Abdul Kalam BR (/bdəl kə; 15 October 193127 July 2015) was an Indian aerospace scientist and stat."
                        </p>
            </div>
              </div>
        </div>
        <div className='tcard'>
            <img src='https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg'/>
            <h3 style={{position:"absolute",bottom:"-60px",color:"white",width:"100%",left:"0px"}}>Mr.Muneswara Rao</h3>
            <div className='info'>
                {/* <h8 ><strong> Mr.Muneswara Rao Tirumalla</strong> </h8> */}
                      <p className='p'> Head of VFX Deparment</p>
                <div className='socialIcons'>
                    <ul> 
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-facebook"></span>
                        </a> 
                      </li>
                      {/* <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-twitter"></span>
                        </a> 
                      </li> */}
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-instagram"></span>
                        </a> 
                      </li>
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-linkedin"></span>
                        </a> 
                      </li>
                    </ul>
                      
                </div> 
                <p className='teamdes' >
                        "Avul Pakir Jainulabdeen Abdul Kalam BR (/bdəl kə; 15 October 193127 July 2015) was an Indian aerospace scientist and stat."
                        </p>
            </div>
        </div>
        {/* <div className='tcard'>
            <img src='https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372_640.jpg'/>
            <div className='info'>
            <h8 ><strong> Mountain</strong> </h8>
                <p className='p'> Head of VFX Deparment</p>
                <div className='socialIcons'>
                    <ul> 
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-facebook"></span>
                        </a> 
                      </li>
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-instagram"></span>
                        </a> 
                      </li>
                      <li>
                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="fa fa-linkedin"></span>
                        </a> 
                      </li>
                    </ul>  
                </div> 
                <p className='teamdes'>
                        "Avul Pakir Jainulabdeen Abdul Kalam BR (/bdəl kə; 15 October 193127 July 2015) was an Indian aerospace scientist and stat."
                        </p>
            </div>
        </div> */}
      </div>
    </div>
    </>
  )
}
