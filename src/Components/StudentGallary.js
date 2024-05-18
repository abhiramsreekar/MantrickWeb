import React, { useEffect,useState } from 'react'
import './studentGallary.css';
import apiClient from "../firebase/apiClient";
export default function StudentGallary() {
  const [photos,setPhotos]=useState(null);
  useEffect(() => {
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

  useEffect(()=>{
    fetchAllPhotos();
},[])
const fetchAllPhotos = async () => {
  try {
    const response = await apiClient.get(`/gallary.json`);
    setPhotos(response.data);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};
var eventIds;
if(photos!=null)
{
  eventIds= Object.keys(photos);
}

  return (
    <>
      <diV className="gallaryBox original-gallary page pages" id="gallary">
        <div className='gin'>
          <div className='gallary'>
            <h3 className='text-blk heading' style={{fontSize:"30px",letterSpacing:"-.5px"}}>STUDENT GALLARY</h3>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg>
              </button>
              <section className="carousel student-carousel" >
              {photos?eventIds.reverse().map((eventId) => {
                  const event = photos[eventId];
                  return ( <div className="carousel-item student-carousel-item">
                        <img src={event.imageUrl} alt="Working" />
                      </div>
                  );
                
      }):<div></div>}
                
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
