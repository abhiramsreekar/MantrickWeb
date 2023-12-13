import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
            <div className="responsive-container-block bigContainer page" id="about">
              <div className='trBlock'></div>
          <div className="responsive-container-block Container">
            <div className="responsive-container-block leftSide">
              <p className="text-blk heading ">
                About Us
              </p>
              <p className="text-blk subHeading">
              Incorporated in 2017, Mantrick Studios produces world-class cutting-edge Visual effects (VFX), Animation, Commercials, Game assets and Video Productions for a battery of domestic and international clients. In the span of 5 years, we have grown up from a tiny company to one of the preferred companies in the VFX market.
              <br/>
              <br/>
              <br/>
              At Mantrick Studios, having strong command on creative, technical and production aspects, we pursue a defined process to ensure a seamless start to end production delivery in terms of budget, time and quality for all kinds of projects. We love pushing the boundaries of technology for implementing a slew of highly productive tools that can optimize technology deployment in our creative industry.
              <br/>
              <br/>
              <br/>
              Mantrick Studios also runs a hands-on, training hub as a separate division that keeps the next pipeline of top talent ready for the inhouse requirements.
              </p>
            </div>
            <div className="responsive-container-block rightSide">
              <img className="number2img img1 aleft"src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"/>
              {/* <img className="number3img img2 aleft" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"/> */}
              {/* <img className="number5img img3 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/> */}
              {/* <iframe allowfullscreen="allowfullscreen aup" className="number4vid" src="https://www.youtube.com/embed/ePOglweqy7o?si=XPvzgauQKtzpfKXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
              <img className="number4vid aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"/>
              <img className="number7img img4 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"/>
              <img className="number6img img5 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"/>
              <img className="number1img  img6 aleft" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"/>
            </div>
          </div>
        </div>
    </>
  )
}
