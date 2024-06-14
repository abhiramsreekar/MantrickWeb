import React, { useEffect, useState } from 'react'
import "./Testimonials.css"
import starf from '../Images/starf.png';
import starh from '../Images/star-half.png';
import stare from '../Images/stare.png';
import staro from '../Images/star-outline.png';
import t1 from '../Images/testimonal/t1.jpeg';
import t2 from '../Images/testimonal/t2.jpeg';
import t3 from '../Images/testimonal/t3.jpeg';
import t4 from '../Images/testimonal/t4.jpeg';
import t5 from '../Images/testimonal/t5.jpeg';
import t6 from '../Images/testimonal/t6.jpeg';
import apiClient from '../firebase/apiClient';
export default function Testimonials() {
      useEffect(() => {
        fetchAllLandings();
        let leftArrows = document.getElementsByClassName("left-arrow");
        let rightArrows = document.getElementsByClassName("right-arrow");
        let carousels = document.getElementsByClassName("carousel");
    
        /* TOGGLE OVERFLOW */
    
        let toggleOverflow = document.getElementById("toggle");
        toggleOverflow.addEventListener("click", () => {
          for (let i = 0; i < carousels.length; i++) {
            carousels[i].classList.toggle("overflow");
            carousels[i].parentNode.classList.toggle("scrollbar-overflow");
          }
        });
      }, [])
      const viewMore=(e)=>{
        const x=document.querySelectorAll(".review");
        for(var j=0;j<x.length;j++)
        {
          document.querySelectorAll(".review")[j].style.overflowY="hidden";
        }
        document.querySelectorAll(".review")[parseInt(e.target.id)].style.overflowY="scroll";
        // e.target.style.overflowY="scroll";
      }
      const [landings,setLandings]=useState([]);
      const fetchAllLandings = async () => {
        try {
          const response = await apiClient.get(`/testimonials.json`);
          setLandings(response.data);
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      };
      const stars=[1,2,3,4,5];
      const eventIds = Object.keys(landings);
      return (
        <>
            <diV className="testimonial page pages" id="gallary">
        <div className='gin container'>
          <div className='gallary' style={{display:"block",margin:"0px auto"}}>
            <h3 className='text-blk heading' style={{fontSize:"30px",marginLeft:"20px",letterSpacing:"-.5px"}}>TESTIMONIALS</h3>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg>
              </button>
              <section className="carousel wrapper">
              {eventIds.map((eventId,i) => {
            const event = landings[eventId];
            return (
              <div className="carousel-item"
                 >
                <div className='back'></div>
                <div className="card img">
                <div className="card-body">
                    <p className="review ">{event.description.slice(0,200)+"......"}</p>
                    <div className="rating">
                        {/* {
                          stars.map((el,i)=>{
                            if((i+2)<=event.youtubeUrl)
                            {
                             return <img className='img star'  src={stare} alt=""/>
                            }
                          })
                        } */}
                        {
                          event.youtubeUrl>=1?<img className='img star'  src={stare} alt=""/>:<img className='img star'  src={staro} alt=""/>
                        }
                        {
                          event.youtubeUrl>=2?<img className='img star'  src={stare} alt=""/>:<img className='img star'  src={staro} alt=""/>
                        }
                        {
                          event.youtubeUrl>=3?<img className='img star'  src={stare} alt=""/>:<img className='img star'  src={staro} alt=""/>
                        }
                        {
                          event.youtubeUrl>=4?<img className='img star'  src={stare} alt=""/>:<img className='img star'  src={staro} alt=""/>
                        }
                        {
                          event.youtubeUrl>=5?<img className='img star'  src={stare} alt=""/>:<img className='img star'  src={staro} alt=""/>
                        }
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={event.imageUrl} alt=""/>
                    <span className="client-name">{event.title}</span>
                </div>
            </div>
                </div>
            );
          })}


                
               
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

    </>

        
    )
}