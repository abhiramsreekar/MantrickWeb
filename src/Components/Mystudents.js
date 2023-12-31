import React from 'react'
import './mystudents.css'
export default function Mystudents() {
  return (
	<div className='my-students'>
{/* 
	  <div className='page outerStudent page'>
        <div className='gout2'>
            <h4 className='text-blk heading' style={{color:"white",margin:"5px 0px"}}>OUR STUDENTS ARE WORKING IN</h4>
            <div class="grid-wrapper">

          </div>
		  <div/>
     </div>
     </div> */}
	
      <diV className="gallaryBox page pages" id="gallary">
        <div className='gin'>
          <div className='gallary'>
            <h3 className='text-blk heading' style={{fontSize:"30px",marginLeft:"20px",letterSpacing:"-.5px"}}>OUR STUDENTS ARE WORKING IN</h3>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg>
              </button>
              <section className="carousel">
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/02.jpg" alt="Working" /> */}
		<img src="https://media.mpcfilm.com/app/uploads/2022/09/Untitled-1-1-640x960.jpg" alt="" />
                </div>
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/10.jpg" alt="Working" /> */}
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLq9e1sk6JUWPtCsrqNSjUu_9-BC2YNscVnA&usqp=CAU" alt="" />
                </div>
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/06.jpg" alt="Working" /> */}
		<img src="https://media.mpcfilm.com/app/uploads/2022/12/MicrosoftTeams-image-123.jpg" alt="" />
                </div>
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/09.jpg" alt="Working" /> */}
	<img src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1" alt="" />
                </div>
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/12.jpg" alt="Working" /> */}
	<img src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2." alt="" />
                </div>
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/14.jpg" alt="Working" /> */}
		<img src="https://media.mpcfilm.com/app/uploads/2023/07/MPC_Award-Emmys-Nominees_Website_16x9-1-1280x720.jpg" alt=""/>
                </div>
                <div className="carousel-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/15.jpg" alt="Working" /> */}
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOGIOg8lbnRJfiqsGgzOvjFO-Mxu772AVaw&usqp=CAU" alt="" />
                </div>
                <div className="carousel-item">
                  <img src="https://pixelloid.com/wp-content/grand-media/image/17.jpg" alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src="https://pixelloid.com/wp-content/grand-media/image/19.jpg" alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src="https://pixelloid.com/wp-content/grand-media/image/18.jpg" alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src="https://pixelloid.com/wp-content/grand-media/image/08.jpg" alt="Holidays" />
                </div>
              </section>
              <button type="button" className="arrows right-arrow" aria-label="Arrow Right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                </svg>
              </button>
            </section>
            <section id="toggle-overflow" style={{ display: "none" }}>
              <h2>Overflow</h2>
              <input id="toggle" type="checkbox" />
              <label htmlFor="toggle">
                <p id="on">ON</p>
                <p id="off">OFF</p>
              </label>
            </section>
          </div>
        </div>
      </diV>
    </div>
      )
}
