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
    
    <div className='clientspage'> 
    <h1 className='text-blk heading' style={{marginTop:"40px"}}><strong>Clients</strong></h1>
    <div className='cards'>
      {
        cardArr.map((e,i)=>{
          return <Newcard img={e.img} delay={i}/>
        })
      }
    </div>
    </div>
  )
}
