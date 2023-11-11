import React, { useEffect } from 'react'
import './Banner.css'
import './Carousel'
import Carousel from './Carousel';

export default function Banner() {
    const data = [
        {
            "moviename": "Movie1",
            "description": "Nice movie sir",
            "image": "img",
            "link": "link1"
        },
        {
            "moviename": "Movie2",
            "description": "Nice movie sir",
            "image": "img",
            "link": "link2"
        },
        {
            "moviename": "Movie3",
            "description": "Nice movie sir",
            "image": "img",
            "link": "link3"
        }
    ];

  return (
    <div className='banner'>
        <div className="content active">
            <h1 className='movie-title'>Where Imagination Meets Reality <strong>Mantrick Studios</strong></h1>
            <p>Kick-start Your VFX career with Industry Standard Professionals From Mantrick Studios</p>
        </div>
        <Carousel data={data}/>
    </div>
  )
}
