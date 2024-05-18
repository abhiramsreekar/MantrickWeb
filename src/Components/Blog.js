import React from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export default function Blog() {
    const {id}=useParams();
    const [realblog,setRealblog]=useState(null);
      const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }; 
  const fetchrealblog = async () => {
    try {
      // const response = await apiServices.fetchAllrealblogs();
      const response = await axios.get(`https://mantrickweb-default-rtdb.firebaseio.com/realblogs/${id}.json`);
      setRealblog(response.data);
    } catch (error) {
    }
  }
  useEffect(()=>{
    fetchrealblog();
  },[])
  return (
    <>
      <div className='show blogShow' style={{paddingTop:"20vh",margin:"1px auto",width:"60%",backgroundColor:"black",zIndex:"9",display:"block",position:"relative"}} id="show">
                    <div className='video' id="video" style={{width:"89vw"}}>
                        
                        
                        {
                          realblog && realblog.length!=0 && <div className='getInvolvedPage' id="event" style={{height:"90vh",width:"100vw",overflowY:"scroll",paddingBottom:"5vh"}}>
                          <h3 style={{margin:"5px auto"}}><b>{realblog.title}</b></h3>
                          <p>{formatDate(realblog.date)}</p>
                          <img src={realblog.imageUrl} className="img" alt="Description of the image"></img>
                          <br/>
                          <br/>
                          <p style={{marginLeft:"0px",width:"60%"}}>{realblog.iframeSrc}</p>
                          {realblog.blogcontent && realblog.blogcontent.map((item, i) => {
                              if('heading' in item)
                                return <h4 style={{width:"60%", margin:"20px auto",marginLeft:"0px"}}><b>{item.heading}</b></h4>
                              else if('subheading' in item)
                                return <h5 style={{width:"60%", margin:"20px auto",marginLeft:"0px"}}><b>{item.subheading}</b></h5>
                              else if('paragraph' in item)
                                return <p style={{width:"60%", margin:"20px auto",marginLeft:"0px"}}>{item.paragraph}</p>
                              else if('image' in item)
                                return <img className="img" src={item.image} alt="Description of the image"></img>
                              else if('quote' in item)
                                return <div style={{width:"60%", margin:"20px auto", backgroundColor:"lightblue", fontStyle:'italic', padding:"14px", borderLeft:"5px solid #065f7d",marginLeft:"0px"}}>"{item.quote}"</div>
                              else if('note' in item)
                                return <div style={{width:"60%", margin:"20px auto", fontStyle:'italic', padding:"14px", borderLeft:"5px solid #eb4438",marginLeft:"0px"}}>Note: {item.note}</div>
                          })}
                    </div>
                        }
                        
                    </div>
                </div>
    </>
  )
}
