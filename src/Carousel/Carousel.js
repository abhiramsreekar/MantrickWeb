import './carousel.css'
import {useState,useContext, useEffect} from 'react';
import apiClient from "../firebase/apiClient";
import context from '../context/useContext';
export default function Carousel() {
  useEffect(()=>{
    fetchAllLandings();
    auto();
  },[])
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); 
  const [cardNo,setCardNo]=useState(1);
  // var cardNo;
  const [total,setTotal]=useState(0);
    const [landings,setLandings]=useState([
      ]);
      
      var j;
      const auto=async ()=>{
        while(1)
        {
          await sleep(4000);
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').append(lists[0]);
        }
  
      }
      const increase=()=>{
        let x=cardNo+1;

        if(x==total+1)
        {
          x=1;
        }
        setCardNo(x);
      }
      const left=()=>{
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').append(lists[0]);
        increase();
      }

      const right=()=>{
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
        let x=cardNo-1;
        if(x==0)
        {
          x=total;
        }
        setCardNo(x);
      }

      // var eventIds;
      const fetchAllLandings = async () => {
        try {
          const response = await apiClient.get(`/landingpage.json`);
          setLandings(response.data);
          let c=0;
          Object.keys(response.data).forEach(key => {
          c=c+1;
        });
          setTotal(c);
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      };
      const eventIds = Object.keys(landings);
  return (
    <>
    <div className="containerbox" id="first-landing">
      
        <div id="slide">
            {eventIds.map((eventId,i) => {
            const event = landings[eventId];
            return (
              <div className="item"
                //  style={{backgroundImage:`URL(${event.imageUrl})`,color:"black"}}
                  id={i}>
                  <img src={event.imageUrl} ></img>
                <div className="content">
                    <div className="name" >{event.title}</div>
                    <div className="des">{event.description}</div>
                      <div style={{display:"flex"}} >
                      <a href="https://youtu.be/mtrvpCRQ_Lc?si=u48931DN8-B1AT1Q" target="_blank" style={{textDecoration:"none",color:"white"}} >
                      
                      <button className='carousel-button'> <span class="material-symbols-outlined">
                  play_circle
                  </span> 
                  <a  style={{textDecoration:"none",color:"white"}} target="_blank">
                  Watch Now
                      </a></button>
                      </a>
                      <span style={{fontSize:"50px",cursor:"pointer"}} class="material-symbols-outlined" onClick={left}>
                        arrow_right_alt
                      </span>
                      </div>
                </div>
                </div>
            );
          })}

        </div>
    </div>
    </>
  )
}
