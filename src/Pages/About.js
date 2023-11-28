import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
            <div className="responsive-container-block bigContainer">
              <div className='trBlock'></div>
          <div className="responsive-container-block Container">
            <div className="responsive-container-block leftSide">
              <p className="text-blk heading ">
                About Us
              </p>
              <p className="text-blk subHeading">
                Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising &amp; Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.
              </p>
            </div>
            <div className="responsive-container-block rightSide">
              <img className="number2img img1 aleft"src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"/>
              <img className="number3img img2 aleft" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"/>
              <img className="number5img img3 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/>
              <iframe allowfullscreen="allowfullscreen aup" className="number4vid" src="https://www.youtube.com/embed/ePOglweqy7o?si=XPvzgauQKtzpfKXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              <img className="number7img img4 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"/>
              <img className="number6img img5 aright" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"/>
              <img className="number1img  img6 aleft" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"/>
            </div>
          </div>
        </div>
    </>
  )
}
