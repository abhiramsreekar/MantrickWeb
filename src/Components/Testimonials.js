import React, { useEffect } from 'react'
import "./Testimonials.css"
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

    return (
        <>
            <diV className="testimonial page" id="gallary">
        <div className='gin container'>
          <div className='gallary'>
            <h3 className='text-blk heading'>Testimonials</h3>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                {/* <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg> */}
              </button>
              <section className="carousel wrapper">
                <div className="carousel-item">
                    {/* <img className='img'  src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" class="client-img" alt=""/> */}
                <div class="card img">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client one</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                    </div>
                </div>
            </div>
                </div>
                <div className="carousel-item">
                <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597_640.png" class="client-img" alt=""/>
                    <span class="client-name">client two</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
						<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                    </div>
                </div>
            </div>
                </div>
                <div className="carousel-item">
                <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client three</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
					<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                    </div>
                </div>
            </div>
                </div>
                <div className="carousel-item">
                <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client three</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
					<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                    </div>
                </div>
            </div>
                </div>
                <div className="carousel-item">
                <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2016/11/18/16/17/man-1835599_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client three</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
					<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                    </div>
                </div>
            </div>
                </div>
              </section>
              <button type="button" className="arrows right-arrow" aria-label="Arrow Right">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                </svg> */}
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
	{/* <div class="container">
        <div class="wrapper" id="wrapper">
            <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client one</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597_640.png" class="client-img" alt=""/>
                    <span class="client-name">client two</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
						<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client three</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
					<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client three</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
					<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBNA1493v6nSPqsbs2XlDYVt5YHXU9SuArQ&usqp=CAU" class="star" alt=""/>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-thumb">
                    <img className='img'  src="https://cdn.pixabay.com/photo/2016/11/18/16/17/man-1835599_640.jpg" class="client-img" alt=""/>
                    <span class="client-name">client three</span>
                </div>
                <div class="card-body">
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>
                    <div class="rating">
					<img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                        <img className='img'  src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-classic-black-stars-clipart-png-image_2395202.jpg" class="star" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="indicators">
            <button class="active"></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div> */}
    </>

        
    )
}