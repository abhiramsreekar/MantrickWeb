import React,{useEffect,useState} from 'react'
import './movies.css';
import apiClient from "../firebase/apiClient";
export default function Movies() {
    const [dynamicshow,setShow]=useState({
        iframeSrc:``,
        imgUrl:"",
        title:""
    });
    const [movies,setMovies]=useState([{
      frame:``,
      imgUrl:"",
      title:""
  }]);
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
        fetchAllLandings();
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
      
      const exit=()=>{
        setShow({
          frame:``,
            imgUrl:"",
            title:""
          });
          document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
          document.querySelector("#show").style.display="none";
        }
        const showdev=(souce)=>{
          setShow(souce);
          const show=document.querySelector("#show");
          show.style.display="flex";
        }
        
      //   const movies2=[
      //         {
      //               frame:`https://www.youtube.com/embed/UZf4vSD5g54?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //               imgUrl:"https://mantrickstudios.com/wp-content/uploads/2021/03/EGwHWV5VUAA2CPy-1400x700.jpg",
      //               title:"KGF"
      //           },
      //           {
      //                 frame:`https://www.youtube.com/embed/4xp98aGpVGQ?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //                 imgUrl:"https://mantrickstudios.com/wp-content/uploads/2021/03/02_FILM-WORKS.png",
      //                 title:"KGF"
      //             },
      //             {
      //                   frame:`https://www.youtube.com/embed/KJr61X4MJWw`,
      //                   imgUrl:"https://mantrickstudios.com/wp-content/uploads/2021/03/10_rangastlam.png",
      //                   title:"KGF"
      //               },
      //               {
      //                     frame:`https://www.youtube.com/embed/iUjwpPzdexY`,
      //                     imgUrl:"https://mantrickstudios.com/wp-content/uploads/2021/03/13_Kavcham.png",
      //       title:"KGF"
      //   },
      //   {
      //       frame:`https://www.youtube.com/embed/e0qsxw2v98c`,
      //       imgUrl:"https://mantrickstudios.com/wp-content/uploads/2021/03/2-16.jpeg",
      //       title:"KGF"
      //   },
      //   {
      //       frame:`https://www.youtube.com/embed/cMw9-JlBawU?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //       imgUrl:"https://m.media-amazon.com/images/M/MV5BMTM2YjMzZGYtZjI3Ny00NjZiLWE1MTAtYTdjM2E0MDJhMzE1XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
      //       title:"KGF"
      //   },
      //   {
      //       frame:`https://www.youtube.com/embed/wySapg9T15Y?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //       imgUrl:"https://rukminim1.flixcart.com/image/850/1000/jcc9ci80/poster/e/x/k/medium-pl-taylor-lautner-twitter-background-movie-abduction-original-imaetdv9hqhczqkh.jpeg?q=90",
      //       title:"KGF"
      //   },
      //   {
      //         frame:`https://www.youtube.com/embed/BDIf7GOop_M?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8Z9uLDfzho7uBvcVxyeUUmS-J9MUZ7Dk7wBQv-HbxQ&s",
      //         title:"KGF"
      //     },
      //     {
      //           frame:`https://www.youtube.com/embed/bS26y574YVo?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //           imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR396TRYPZSRPXpuKX0fqfwFhACFm1jv314qovwEnsgkw&s",
      //           title:"KGF"
      //       },
      //       {
      //             frame:`<iframe id="frame" className='iframe' src="https://www.youtube.com/embed/4xp98aGpVGQ?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada" title="SYERAA MANTRICK STUDIOS MAKING V01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      //             imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2-NvGnmuRT5SXnbRM1PEoOa46MGIvsdp0heueyphgA&s",
      //             title:"KGF"
      //         },
      //         {
      //               frame:`https://www.youtube.com/embed/PpAZ-QX7Vvg?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //               imgUrl:"https://mantrickstudios.com/wp-content/uploads/2021/03/14_NTR-M.png",
      //               title:"KGF"
      //           },
      //           {
      //                 frame:`https://www.youtube.com/embed/0TsTbnqb4HM?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //                 imgUrl:"https://i.ytimg.com/vi/XSPpOs-uYLM/maxresdefault.jpg",
      //       title:"KGF"
      //   },
      //   {
      //         frame:`https://www.youtube.com/embed/XSPpOs-uYLM?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAM9XvjUFdmFDaZUFkpKOxWFB2Il3ZzxZDTG65QIZIKF0xRoHoIzTytxelgvQBIYH0Lc&usqp=CAU",
      //       title:"KGF"
      //   },
      //   {
      //         frame:`https://www.youtube.com/embed/btyHq5eq350?list=PLeRKcLz1gq8IBbdZymGasd_4X3-uSRada`,
      //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAM9XvjUFdmFDaZUFkpKOxWFB2Il3ZzxZDTG65QIZIKF0xRoHoIzTytxelgvQBIYH0Lc&usqp=CAU",
      //         title:"KGF"
      //     },
      // ];
      // var eventIds;
      const fetchAllLandings = async () => {
        try {
          const response = await apiClient.get(`/blogs.json`);
          // return response;
          // alert(JSON.stringify(response.data));
          setMovies(response.data);
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      };
      const eventIds = Object.keys(movies);
      return (
        <div className='movies'>
            <div className='show' id="show">
                <div className='video' id="video">
                    <div className='exit' onClick={exit}>Exit</div>
                    <iframe className='iframe frame' src={dynamicshow.iframeSrc} title={dynamicshow.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* {
                        dynamicshow==null?"":dynamicshow.frame
                      } */}

                </div>
            </div>
      <diV className="gallaryBox page" id="gallary">
        <div className='gin'>
          <div className='gallary'>
            <h3 className='text-blk heading'>OUR WORK</h3>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                {/* <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg> */}
              </button>
              <section className="carousel">
  
                {eventIds.map((eventId) => {
            const event = movies[eventId];
            return (
              <div className="carousel-item">
                        <img onClick={()=>{
                            showdev(event);
                        }}
                         className="img" src={event.imageUrl} alt="Working" />
                        <h3 style={{color:"white"}}>{event.title}</h3>
                </div>
            );
          })}
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
      <script src="froogaloop.min.js"></script>
    </div>
  )
}
