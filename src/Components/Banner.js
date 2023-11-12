import React, { useEffect } from 'react'
import './Banner.css'
import Carousel from '../Carousel/Carousel'
import { v4 as uuidv4 } from 'uuid';
export default function Banner() {
  return (
    <>
    <div className='banner'>
      <Carousel/>
    </div>
      </>
  )
}
