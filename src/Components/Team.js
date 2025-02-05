import React from 'react'
import './team.css'
import team_1 from '../Images/mantrickstudios_team-3.webp';
import team_2 from '../Images/mantrickstudios_team-2.webp';
import { useEffect } from 'react';
import facebook from '../Images/icons/facebook.png';
import instagram from '../Images/icons/instagram.png';
import twitter from '../Images/icons/twitter.png';
import linkedin from '../Images/icons/linkedin.png';
export default function Team() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
  return (
    <>
    <div style={{height:"7vh"}}></div>
    <div className='wrapper page team' id="team2" style={{marginTop:"0px",paddingTop:"15vh"}}>
        <h1 className='head-one' id="teamId">MEET OUR TEAM</h1>
        <div className='tcards'>
        <div className='tcard'>
            <img src={team_1}/>
            <h3 style={{position:"absolute",bottom:"-60px",color:"white",width:"100%",left:"0px"}}>Mr. Muneswara Rao</h3>
            <div className='info'>
                {/* <h8 ><strong> Mr.Muneswara Rao Tirumalla</strong> </h8> */}
                      <p className='p'> Head of VFX Deparment</p>
                <div className='socialIcons'>
                    <ul> 
                      <li>
                        <a href="https://www.facebook.com/mantrickstudios">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>
                          <img src={facebook} alt='facebook' style={{height:"40px",width:"40px",marginTop:"-4px",marginLeft:"-3px"}}/>
                          </span>
                        </a> 
                      </li>
                      <li>
                        <a href="https://www.instagram.com/mantrick_studios">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>
                          <img src={instagram} alt='facebook' style={{height:"40px",width:"40px",marginTop:"-4px",marginLeft:"-3px"}}/>
                          </span>
                        </a> 
                      </li>
                      
                      <li>
                        <a href="https://www.linkedin.com/in/muneswara-rao-tirumalla-a268b216/" target="_blank" >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>
                          <img src={linkedin} alt='facebook' style={{height:"40px",width:"40px",marginTop:"-4px",marginLeft:"-3px"}}/>
                          </span>
                        </a> 
                      </li>
                    </ul>
                      
                </div> 
                <p className='teamdes' style={{}}>
                
                        "Muneswar, the visionary founder of Mantrick Studios, brings 25 years of expertise across animation, VFX, commercials, and gaming. Known for turning creative challenges into groundbreaking visual stories, Muneswar blends technical brilliance with seamless production management and strategic operations. His sharp understanding of global economies and business cycles powers his unique ability to steer projects toward success, 
                        making him a trusted leader with an extensive industry network that consistently delivers impactful results"
                        </p>
            </div>
        </div>
        <div className='tcard'>
            <img src={team_2}/>
            <h3 style={{position:"absolute",bottom:"-60px",color:"white",width:"100%",left:"0px"}}>Mr. Anil Kumar Telikepalli</h3>
            <div className='info'>
              <div className=''>
            {/* <h8 ><strong>Mr.Anil Kumar Telikepalli</strong> </h8> */}
                <p className='p'> Head of VFX Deparment</p>
                <div className='socialIcons'>
                    <ul> 
                      <li>
                        <a href="https://www.facebook.com/mantrickstudios">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>
                          <img src={facebook} alt='facebook' style={{height:"40px",width:"40px",marginTop:"-4px",marginLeft:"-3px"}}/>
                          </span>
                        </a> 
                      </li>
                      <li>
                        <a href="https://www.instagram.com/mantrick_studios">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>
                          <img src={instagram} alt='facebook' style={{height:"40px",width:"40px",marginTop:"-4px",marginLeft:"-3px"}}/>
                          </span>
                        </a> 
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/anil-telikepalli-82b82416/" target="_blank">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>
                          <img src={linkedin} alt='facebook' style={{height:"40px",width:"40px",marginTop:"-4px",marginLeft:"-3px"}}/>
                          </span>
                        </a> 
                      </li>
                    </ul>  
                </div> 
                        <p className='teamdes' >
                        "Anil Kumar Telikepalli is a dynamic Chief Creative Officer (CCO)."
                        </p>
            </div>
              </div>
        </div>

      </div>
    </div>
    </>
  )
}
