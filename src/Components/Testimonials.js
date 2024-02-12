import React, { useEffect } from 'react'
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
export default function Testimonials() {
    // useEffect(()=>{
	// 	const wrapper = document.querySelector('#wrapper');
	// 	const indicators = [...document.querySelectorAll('.indicators button')];
		
	// 	let currentTestimonial = 0;
	// 	indicators.forEach((item, i) => {
	// 		item.addEventListener('click', () => {
	// 			indicators[currentTestimonial].classList.remove('active');
	// 			wrapper.style.marginLeft = `-${100 * i}%`;
	// 			item.classList.add('active');
	// 			currentTestimonial = i;
	// 		})
	// 	})
    // },[]);
    function scrollEv(leftArrow, rightArrow, carousel) {
        if (carousel.scrollLeft <= 0) {
          leftArrow.classList.add("arrow-inactive");
        } else {
          leftArrow.classList.remove("arrow-inactive");
        }
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth - 1) {
          rightArrow.classList.add("arrow-inactive");
        } else {
          rightArrow.classList.remove("arrow-inactive");
        }
      }
    
      function clicleftArrow(carousel, rectList) {
        let shiftScroll;
        for (let i = 0; i < rectList.length; i++) {
          if (carousel.scrollLeft > rectList[rectList.length - 1]) {
            shiftScroll = rectList[rectList.length - 1];
          } else if (
            carousel.scrollLeft > rectList[i] &&
            carousel.scrollLeft <= rectList[i + 1]
          ) {
            shiftScroll = rectList[i];
          }
        }
        carousel.scrollTo({
          left: shiftScroll,
          behavior: "smooth"
        });
      }
    
      function clickRight(carousel, rectList) {
        let shiftScroll;
        for (let i = 0; i < rectList.length; i++) {
          if (
            carousel.scrollLeft >= rectList[i] - 1 &&
            carousel.scrollLeft < rectList[i + 1]
          ) {
            shiftScroll = rectList[i + 1];
          }
        }
        carousel.scrollTo({
          left: shiftScroll,
          behavior: "smooth"
        });
      }
    
      function listRectCarousel(carouselNumber, carousels) {
        let divs = carousels[carouselNumber].getElementsByClassName("carousel-item");
        let rectList = [];
        let rectGauche = carousels[carouselNumber].getBoundingClientRect().left;
    
        for (let i = 0; i < divs.length; i++) {
          let rect = divs[i].getBoundingClientRect();
          rectList.push(rect.left - rectGauche);
        }
    
        for (let i = rectList.length - 1; i >= 0; i--) {
          rectList[i] = rectList[i] - rectList[0];
        }
        return rectList;
      }
    
      function autoSlidePosLeft(carouselNumber, carousels, leftArrows) {
        let rectList = listRectCarousel(carouselNumber, carousels);
        leftArrows[carouselNumber].addEventListener("click", () => {
          clicleftArrow(carousels[carouselNumber], rectList);
        });
      }
    
      function autoSlidePosRight(carouselNumber, carousels, rightArrows) {
        let rectList = listRectCarousel(carouselNumber, carousels);
        rightArrows[carouselNumber].addEventListener("click", () => {
          clickRight(carousels[carouselNumber], rectList);
        });
      }
      useEffect(() => {
        let leftArrows = document.getElementsByClassName("left-arrow");
        let rightArrows = document.getElementsByClassName("right-arrow");
        let carousels = document.getElementsByClassName("carousel");
    
        for (let i = 0; i < leftArrows.length; i++) {
          autoSlidePosLeft(i, carousels, leftArrows);
          window.onresize = () => {
            autoSlidePosLeft(i, carousels, leftArrows);
          };
        }
    
        for (let i = 0; i < rightArrows.length; i++) {
          autoSlidePosRight(i, carousels, rightArrows);
          window.onresize = () => {
            autoSlidePosRight(i, carousels, rightArrows);
          };
        }
    
        for (let i = 0; i < carousels.length; i++) {
          carousels[i].addEventListener("scroll", () => {
            scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
          });
        }
    
        for (let i = 0; i < carousels.length; i++) {
          scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
          window.onresize = () => {
            scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
          };
        }
    
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
                <div className="carousel-item"
                 >
                <div className='back'></div>
                <div className="card img">
                <div className="card-body">
                    <p className="review ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div className="rating">
                    <p onClick={viewMore} id="0">View More</p>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={staro} alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={t1} alt=""/>
                    <span className="client-name">Durga Prasad</span>
                </div>
            </div>
                </div>
                <div className="carousel-item" 
                // style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_640.jpg')`}}
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">I express my gratitude towards Mantrick for enabling me to establish a firm groundwork in Multimedia, refine my technical proficiencies, and offer me an internship opportunity where I can put my knowledge and skills to practical use in live projects. My internship journey was helped me a lot to my career growth as a Roto Artist. </p>
                    <div className="rating">
                    <p onClick={viewMore} id="1">View More</p>
						            <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={starh}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={t2} alt=""/>
                    <span className="client-name">Kishore</span>
                </div>
            </div>
                </div>
                <div className="carousel-item"
                //  style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_640.jpg')`}}
                 >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">It was my immense luck and fortune to be the part of Mantrick Studios where I can grow. The entire faculty and department leaves no stone unturned to shape every one's future. My professional course have been a wonderful experience of learning in VFX with prolific exposure to outside. </p>
                    <div className="rating">
                    <p onClick={viewMore} id="2">View More</p>
                    <img className='img     star'   src={stare} alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={t3} alt=""/>
                    <span className="client-name">Nagam Biswas</span>
                </div>
            </div>
                </div>
                <div className="carousel-item"
                //  style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_640.jpg')`}}
                 >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">Mantrick Studios is only institute which is provides live-project along with 100% placement in Multimedia. By researching I found the institute and joined for VFX Professional Course. After completing my course  I cracked my first interview and got placed at Hues FX as a Comp Artist and  really I am thankful to all my supports in floor. </p>
                    <div className="rating">
                    <p onClick={viewMore} id="3">View More</p>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={staro}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={t4}  alt=""/>
                    <span className="client-name">Rajeswari</span>
                </div>
            </div>
                </div>
                <div className="carousel-item" 
                // style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_640.jpg')`}}
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">My experience at Mantrick Studios has been wonderful. I got placed into my dream Job which returns my career to high due to working in live projects. The all-time support and motivation of faculty members have enlightened me on this amazing journey.</p>
                    <div className="rating">
                    <p onClick={viewMore} id="4">View More</p>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={t5} alt=""/>
                    <span className="client-name">Srikanth</span>
                </div>
            </div>
                </div>
                <div className="carousel-item" 
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">Mantrick Studios is great place to learn. It gives me great to say with pride that i have completed my VFX training in Compositing. Mantrick gave me an opportunity to excel in my area of interest. The Training and Placement cell is very supportive and they have conducted various sessions which helped me to get placed.</p>
                    <div className="rating">
                    <p onClick={viewMore} id="5">View More</p>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src={t6}  alt=""/>
                    <span className="client-name">Vamshi</span>
                </div>
            </div>
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

    </>

        
    )
}