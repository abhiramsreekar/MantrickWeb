import React from 'react'
import Container from 'react-bootstrap/Container'
import Newcard from '../Components/Newcard'
import './Clients.css'

export default function Clients() {
  const cardArr=[
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    },
    {
      link:"youtube.com"
    }
  ]
  return (
    
    <div className='clientspage'> 
    <h1><strong>Clients</strong></h1>
    <div className='cards'>
      {
        cardArr.map((e,i)=>{
          return <Newcard/>
        })
      }
    </div>
    </div>
  )
}
