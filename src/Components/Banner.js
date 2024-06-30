import React, { useEffect } from 'react'
import './Banner.css'
<<<<<<< HEAD
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

=======
import Carousel2 from '../Carousel/Carousel2'
import Carousel from '../Carousel/Carousel'
import { v4 as uuidv4 } from 'uuid';
export default function Banner() {
>>>>>>> newMain
  return (
    <>
    <div className='banner'>
<<<<<<< HEAD
        <div className="content active">
            <h1 className='movie-title'>Where Imagination Meets Reality <strong>Mantrick Studios</strong></h1>
            <p>Kick-start Your VFX career with Industry Standard Professionals From Mantrick Studios</p>
        </div>
        <Carousel data={data}/>
=======
      <Carousel2/>
      <Carousel/>
>>>>>>> newMain
    </div>
      </>
  )
}
