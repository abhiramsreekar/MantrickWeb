import React, { useEffect } from 'react'
import './studentGallary.css';
import s1 from '../Images/student-works/s1.jpg'
import s2 from '../Images/student-works/s2.jpg'
import s3 from '../Images/student-works/s3.jpg'
import s4 from '../Images/student-works/s4.jpg'
import s5 from '../Images/student-works/s5.jpg'
import s6 from '../Images/student-works/s6.jpg'
import s7 from '../Images/student-works/s7.jpg'
import s8 from '../Images/student-works/s8.jpg'
import s9 from '../Images/student-works/s9.jpg'
import s10 from '../Images/student-works/s10.jpg'
import s11 from '../Images/student-works/s11.jpg'
import s12 from '../Images/student-works/s12.jpg'
import s13 from '../Images/student-works/s13.jpg'
import s14 from '../Images/student-works/s14.jpg'
import s15 from '../Images/student-works/s15.jpg'
import s16 from '../Images/student-works/s16.jpg'
import s17 from '../Images/student-works/s17.jpg'
export default function StudentGallary() {
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
              <section className="carousel">
                <div className="carousel-item">
                  <img src={s1} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s2} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s3} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s4} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s5} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s6} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s7} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s8} alt="Working" />
                </div>
                <div className="carousel-item">
                  <img src={s9} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s10} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s11} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s12} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s13} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s14} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s15} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s16} alt="Holidays" />
                </div>
                <div className="carousel-item">
                  <img src={s17} alt="Holidays" />
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
