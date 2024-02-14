import React from 'react'
import './about2.css';
import './About.css';
import TPN from '../Images/TPN.png'
import cubes from '../Images/3_cubes.JPG'
import huesfx from '../Images/huesfx.JPG'
import cubes2 from '../Images/cubes2.JPG'
import effects from '../Images/effects.png';
import eye from '../Images/eye.png';
import arrow from '../Images/arrow.png';
import image from '../Images/mantrick.png'
export default function About2() {
  return (
    <>

            <h3 className='about-head head-one'>ABOUT COMPANY</h3>
    <div class="aboutUs page" id="aboutUs">
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
        {/* <div className='right'>
            <img src='https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_640.jpg' alt='' id='img1'/>
            <img src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_640.jpg' alt='' id='img2'/>
            <img src='https://cdn.pixabay.com/photo/2017/08/05/13/06/girl-2583442_640.jpg' alt='' id='img3'/>
        </div> */}
        <div className="responsive-container-block rightSide">
              <img className="number2img img1 aleft"src={cubes2}/>
              {/* <img className="number3img img2 aleft" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"/> */}
              {/* <img className="number5img img3 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/> */}
              {/* <iframe allowfullscreen="allowfullscreen aup" className="number4vid" src="https://www.youtube.com/embed/ePOglweqy7o?si=XPvzgauQKtzpfKXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
              <img className="number4vid aright" src={image}/>
              <img className="number7img img4 aright" src={cubes}/>
              <img className="number6img img5 aright" src={TPN}/>
              <img className="number1img  img6 aleft" src={cubes}/>
            </div>
    </div>
        
    </>
  )
}
