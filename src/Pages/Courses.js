import React from 'react'
import './courses.css'
export default function Courses() {
  return (
    <div className='courses'>
      <p className="text-blk heading">
        Courses
      </p>
      <div className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Mountain View</h2>
            <p className="">Check out all of these gorgeous mountain.
              <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
            </p>

            <button className="btn">View Trips</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">To The Beach</h2>
            <p className="">Plan your next beach trip
              <p className="copy">Plan your next beach trip with these fabulous destinations</p>
            </p>

            <button className="btn">View Trips</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Desert Destinations</h2>
            <p className="">It's the desert you
              <p className="copy">It's the desert you.</p></p>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Explore The Galaxy</h2>
            <p className="">Seriously, straight up, just blast
              <p className="copy">Seriously, straight up, just blast off into outer space today</p></p>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
