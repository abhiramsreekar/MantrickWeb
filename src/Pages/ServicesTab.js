import React from 'react'
import './servicesTab.css';
import i5 from '../Images/i5.png';
import i1 from '../Images/i1.png';
import i2 from '../Images/i2.png';
import i3 from '../Images/i3.png';
import i4 from '../Images/i4.png';
import i6 from '../Images/i6.png';
import { useEffect } from 'react';
export default function ServicesTab() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <div id="servicesTabOuter_o" style={{paddingTop:"16vh"}}>

    <div class="servicesTab page" id="servicesTabOuter">
            <h1 className="head-one" id="services-head">OUR SERVICES</h1>
        <div className='service1' id="servicesTab">
            <div className='inner'>
            <div className='tabs' id="tab">
                    <span class="icons">
                        <img src={i5} alt=''></img>
                    </span>
                <h3>VFX</h3>
                <p>Elevate your visuals with our cutting-edge VFX services through our HUES FX. From seamless 
compositing to dynamic effects, we craft stunning visual experiences that captivate and immerse 
audiences.</p>

            </div>
            <div className='tabs'>
            <span class="icons">
                        <img src={i1} alt=''></img>
                    </span>
                <h3>ANIMATION</h3>
                <p>Immerse your stories in life with our animation services. Our skilled animators breathe personality into 
characters, creating narratives that resonate and leave a lasting impact.</p>

            </div>
            <div className='tabs'>
            <span class="icons">
                        <img src={i2} alt=''></img>
                    </span>
                <h3>GAMING</h3>
                <p>Enter the realm of gaming innovation with our services. From conceptualization to development, we 
create immersive gaming experiences that push the boundaries of interactive entertainment.</p>
                
            </div>
            </div>
        </div>
        <div className='service1'>
            {/* <h1>ANIMATION</h1> */}
            <div className='inner'>
            <div className='tabs'>
            <span class="icons">
                        <img src={i3} alt=''></img>
                    </span>
                <h3>IP CREATIONS</h3>
                <p>Welcome to Mantrick Studios, where innovation and ownership unite. We're dedicated to creating and protecting our own Intellectual Property (IP), from cutting-edge tech to original works. Join us on this exciting journey where ideas become valuable assets, shaping our creative future. Explore limitless possibilities with us.
</p>

            </div>
            <div className='tabs'>
            <span class="icons">
                        <img src={i4} alt=''></img>
                    </span>
                <h3>DIGITAL MARKETING</h3>
                <p>Tailor your media presence with our custom solutions. Whether it's branding, marketing, or unique 
multimedia experiences, we craft bespoke solutions that set you apart in the digital landscape.</p>

            </div>
            <div className='tabs'>
            <span class="icons">
                        <img src={i6} alt=''></img>
                    </span>
                <h3>CONSULTANCY SERVICES</h3>
                <p>Navigate the creative landscape with our consultancy services. Our industry experts provide strategic 
guidance, ensuring your projects align with the latest trends and best practices.</p>

            </div>

            </div>
        </div>
    </div>
    </div>
  )
}
