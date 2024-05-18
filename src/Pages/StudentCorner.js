import React, { useEffect } from 'react'
import './StudentCorner.css';
import apiClient from '../firebase/apiClient';
import { useState } from 'react';
export default function StudentCorner() {
    const [landings,setLandings]=useState(null);
    const expand=(e)=>{
        var portfolioId = e.target.parentElement.parentElement.dataset.portfolio;
                var portfolio = document.getElementById(portfolioId);
                if (portfolio.style.display === 'none') {
                    portfolio.style.display = 'table-row';
                } else {
                    portfolio.style.display = 'none';
                }
    }
    const fetchCorner=async ()=>{
        try {
            // const response = await apiServices.fetchAllBlogs();
            try {
                const response = await apiClient.get(`/studentcorner.json`);
                
                setLandings(response.data);
              } catch (err) {
                console.error(`Error: ${err}`);
              }
          } catch (error) {
          }
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
        fetchCorner();
    },[])
    var eventIds=[];
    if(landings)
    {
        eventIds = Object.keys(landings);
    }
  return (
    
    <div>
      <div className="containerCorner">
        <h1 class="text-blk heading" style={{textAlign:"center"}}>Student Corner</h1>
        {/* <div className="search-bar">
            <input type="text" placeholder="Search..."/>
            <i className="material-icons search-icon">search</i>
        </div> */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Date Joined</th>
                    <th>Portfolio</th>
                </tr>
            </thead>
            <tbody>
            {eventIds.map((eventId,i) =>{
            const event = landings[eventId];
            return (
              <>
                <tr className="student-details" data-portfolio={"portfolio-"+i}>
                    <td>{event.title}</td>
                    <td>{event.course}</td>
                    <td>{event.duration}</td>
                    <td>{event.date}</td>
                    <td><i className="material-icons expand-icon" onClick={expand}>arrow_drop_down</i></td>
                </tr>
                <tr className="portfolio" id={"portfolio-"+i}>
                    <td colspan="5">
                        <div className="portfolio-container">
                            {
                                event.blogcontent.map((e)=>{
                                    return (
                                        <iframe width="560" height="315" src={e.iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    )
                                })
                            }
                            
                            
                            
                        </div>
                    </td>
                </tr>
              </>
            );
          })}



        

            </tbody>
        </table>
    </div>
    </div>
  )
}
