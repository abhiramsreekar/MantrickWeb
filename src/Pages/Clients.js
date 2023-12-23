import React from 'react'
import Container from 'react-bootstrap/Container'
import Newcard from '../Components/Newcard'
import './Clients.css'

export default function Clients() {
  const cardArr=[
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/01_LEGEND-GLOBAL-STUDIO.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/02_VFX-Wala.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/03_EROS.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/05_konidela-p.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/06_g-silver.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/07_Mythri-Movie.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/08_DVV.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/09_Green-GOLD.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/10_SYMBIOSYS-png.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/04_Suresh-Productions.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/11_EFX.png"
    },
    {
      link:"youtube.com",
      img:"https://mantrickstudios.com/wp-content/uploads/2021/03/12_smt.apsri-venkateswara-creations.png"
    }
  ]
  return (
    
    <>
    {/* <div className='clientspage page' id="clients"> 
    <h1 className='text-blk heading' style={{marginTop:"40px"}}><strong>Clients</strong></h1>
    <div className='cards'>
      {
        cardArr.map((e,i)=>{
          return <Newcard img={e.img} delay={i}/>
        })
      }
    </div>
    </div> */}
    <diV className="gallaryBox page clientGallary clientspage" id="gallary">
        <div className='gin'>
          <div className='gallary'>
            <h3 className='text-blk heading' style={{fontSize:"40px",textAlign:"center",width:"100vw"}}>CLIENTS</h3>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                {/* <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg> */}
              </button>
              <section className="carousel">
              {
                cardArr.map((e,i)=>{
                return <div className="carousel-item client-item">
                  {/* <img src="https://pixelloid.com/wp-content/grand-media/image/02.jpg" alt="Working" /> */}
                  <Newcard img={e.img} delay={i}/>
                </div>
                  })
              }
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
    </>
  )
}
