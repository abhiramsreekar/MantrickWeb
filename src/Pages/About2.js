import React from 'react'
import './about2.css';
import './About.css';
import TPN from '../Images/about/mantrickstudios_tpn.webp'
import cubes from '../Images/about/mantrickstudios_3_cubes.webp'
import cubes2 from '../Images/about/mantrickstudios_cubes2.webp'
import effects from '../Images/mantrickstudios_effects.png';
import eye from '../Images/mantrickstudios_eye.png';
import arrow from '../Images/mantrickstudios_arrow.png';
import image from '../Images/mantrickstudios_logo.webp'
import { useEffect } from 'react';
export default function About2() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <>
    <div style={{height:"5vh"}}></div>
<div className='about-route'>

            <h3 className='about-head head-one'>ABOUT COMPANY</h3>
    <div className="aboutUs page" id="aboutUs">
        <div className='left'>
            <h3 className='text-blk heading' style={{fontSize:"35px"}}>BRINGING IMAGINATION ALIVE, ON SCREEN</h3>
            <div className='tabs'>
                <div className='tableft'>
                    <img src={eye}></img>
                </div>
                <div className='tabright'>
                    <h3>Vision</h3>
                    <p>At Mantrick Studios, we envision becoming a global leader in the realms of VFX, animation, and 
gaming, setting unparalleled standards of excellence in creativity and technology. Through our strategic 
joint venture, Hues FX, we aim to be recognized as one of the premier VFX companies serving 
international clients, delivering cuttingedge visual experiences that captivate audiences worldwide
                    </p>
                </div>
            </div>
            <div className='tabs' >
                <div className='tableft'>
                <img src={arrow}></img>
                </div>
                <div className='tabright'>
                    <h3>Mission</h3>
                    <p>Our mission at Mantrick Studios is to push the boundaries of imagination through innovative 
and top-tier VFX, animation, and gaming solutions. We are committed to providing industry-leading 
services to our global clientele, leveraging the synergies of our joint venture with Hues FX. Our focus on 
production-oriented training at our educational institute aims to empower aspiring talents with the skills 
and knowledge necessary to excel in the competitive VFX landscape, ensuring they are industry-ready
                    </p>
                </div>
            </div>
            <div className='tabs' >
                <div className='tableft'>
                <img src={effects}></img>
                </div>
                <div className='tabright'>
                    <h3>HUES FX</h3>
                    <p> Embark on a transformative journey with Hues FX, a dynamic joint venture born from the 
evolution of Mantrick Studios' VFX production. Guided by Mathew Kemper, we specialize in elevating 
visual effects production. Hues FX proudly holds the Trusted Partner Network (TPN) certification, 
reflecting our commitment to industry-leading security. Join us, along with Mantrick Studios, in 
redefining visual storytelling
                    </p>
                </div>
            </div>
        </div>
        <div className="responsive-container-block rightSide">
              {/* <img className="number2img img1 aleft"src={cubes2}/>
              <img className="number4vid aright" src={image}/> */}

              <div className="number2img videos img1 aleft">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BwhOY2ptiSY?si=fhNgp7gOHCsd46zV" >
</iframe>

              </div>
              <div className="number5img videos img1 aleft">
              <iframe src="https://player.vimeo.com/video/891437649?h=9fa4c56e8a" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


              </div>
              <div className="number4vid videos aright">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOdqs8FnYYU?si=OwMb9clTMDxWXpb5" >
</iframe>

              </div>
              
              <img className='number6img videos img5 aright' src={TPN}/>
              
              
              {/* <img className="number1img  img6 aleft" src={cubes}/> */}
            </div>
    </div>
</div>
        
    </>
  )
}
