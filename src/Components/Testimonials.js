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
                    <p className="review ">I have completed my Intensive course recently ,and it's great place if u really want to learn and go into VFX industry. Great faculty and 100% placemen. Best environment for upgrading your future</p>
                    <div className="rating">
                    <p onClick={viewMore} id="0">View More</p>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                        <img className='img star'  src={stare} alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src="https://lh3.googleusercontent.com/a-/ALV-UjUzD_kWPwmBsztbQ_z8j5poPv_qJGyzL14WKDI67eU8O_kfUYhoQQ=w75-h75-p-rp-mo-br100" alt=""/>
                    <span className="client-name">Sai Teja</span>
                </div>
            </div>
                </div>
                <div className="carousel-item" 
                // style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_640.jpg')`}}
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">Mantrick studios is great place for learning 3D animation & VFX. The faculty are very helpful and polite. After completing the class daily I am practicing  live projects and it will be helpful for my career growth. </p>
                    <div className="rating">
                    <p onClick={viewMore} id="1">View More</p>
						            <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src="https://lh3.googleusercontent.com/a-/ALV-UjVedbetLV1psmqIY1KbHfWbWqbCzKLTQJE9BdzK6gKu2PwKUmMG=w75-h75-p-rp-mo-br100" alt=""/>
                    <span className="client-name">Nadiminti Balamurali</span>
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
                    <span className="client-name">Senbaga Rajan Muthu</span>
                </div>
            </div>
                </div>
                <div className="carousel-item"
                //  style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_640.jpg')`}}
                 >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">The best VFX training in Hyderabad, we had live project experience with faculty. The faculty was highly experienced more than 25yrs from VFX industry. </p>
                    <div className="rating">
                    <p onClick={viewMore} id="3">View More</p>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                        <img className='img star'  src={stare}  alt=""/>
                    </div>
                </div>
                <div className="card-thumb">
                    <img className='img client-img'  src="https://lh3.googleusercontent.com/a-/ALV-UjXzo3QSyAiKA4PDzMj33aO8dWlbmeRm8KubF43nEnTQtE2hpe2j=w75-h75-p-rp-mo-br100"  alt=""/>
                    <span className="client-name">anil kumar</span>
                </div>
            </div>
                </div>
                <div className="carousel-item" 
                // style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_640.jpg')`}}
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">My experience is wonderful and I have learnt many tools which used to my career in Animation  & enjoyed my classes, and they helping us with live projects to our practice.</p>
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
                    <img className='img client-img'  src="https://lh3.googleusercontent.com/-Kqh_ReY0pvY/AAAAAAAAAAI/AAAAAAAAAAA/s6uS5oeiH7M/w70-h70-p/photo.jpg" alt=""/>
                    <span className="client-name">digital swetha</span>
                </div>
            </div>
                </div>
          <div className="carousel-item" 
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">Mantrick is a great learning and experience with professional faculty. I started my career as a student now I'm working with production team. THANKS TO MANTRICK STUDIOS</p>
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
                    <img className='img client-img'  src="https://lh3.googleusercontent.com/a-/ALV-UjUhRn6_0Cl8DddrNDDQwwj58HgiZUzIW8IJPJHggUk1VF_a97JZ=w75-h75-p-rp-mo-br100"  alt=""/>
                    <span className="client-name">VENU</span>
                </div>
            </div>
          </div>
          <div className="carousel-item" 
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">An excellent academy for career in VFX with multiple career opportunities in ever growing media and entertainment sector. Recently complted my Vfx course and got placed waiting for my big day to join.</p>
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
                    <img className="https://lh3.googleusercontent.com/a/ACg8ocLOvWcWR0806jH4KXRSee35AidmjyZ05ysjqK0jNFSFjyA9PA=w75-h75-p-rp-mo-br100"  alt=""/>
                    <span className="client-name">Divya Lakshmi Kancharla</span>
                </div>
            </div>
          </div>
          <div className="carousel-item" 
                >
                <div className='back'></div>
                <div className="card">
                <div className="card-body">
                    <p className="review">Best Institute for the best career , their teaching skills were interesting. Mantrick was one with good fame in the Animation industry..</p>
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
                    <img className="https://lh3.googleusercontent.com/a-/ALV-UjU_TvBvFmKJiQL1U9hXkijxr_ZHJLpbmdCZaNfTFg3RkSGWSQ0=w75-h75-p-rp-mo-br100"  alt=""/>
                    <span className="client-name">srikanth alaparthi</span>
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