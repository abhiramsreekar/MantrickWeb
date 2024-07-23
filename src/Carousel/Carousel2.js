import './carousel2.css';
import { useEffect, useRef,useState,useContext } from 'react';
import apiClient from "../firebase/apiClient";
import context from '../context/useContext';
function Carousel2() {
  // const {current,setCurrent}=useContext(context);
  var current=0;
  useEffect(()=>{
    fetchAllLandings();
  },[])
  useEffect(()=>{
    scrolling();
    
  },[])
  const [total,setTotal]=useState(null);
  const [landings,setLandings]=useState([
    ]);
    var c=0;
  const fetchAllLandings = async () => {
    try {
      const response = await apiClient.get(`/landingpage.json`);
      setLandings(response.data);
      Object.keys(response.data).forEach(key => {
      c=c+1;
    });
      setTotal(c);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };
  var reset=1;
  var scrolling=async ()=>{
    setTimeout(()=>{
      let d= document.querySelectorAll('.circle');
      // if(eventIds.length>4)
      // {
        left((current+1)%c);
      // }
      // if(reset===0)
      // return;
      scrolling();
    },5000)
  }
  
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const left=(x)=>
  {
    
    // alert(x);
    // alert(current);
    let d= document.querySelectorAll('.circle');
        for(var k=0;k<d.length;k++)
        {
          d[k].style.backgroundColor="white";
        }
        // e.target.style.backgroundColor="black";
        d[x].style.backgroundColor="black";
        let lists = document.querySelectorAll('.slide-container .slide');
        if(current<x)
        {
          for(var l=0;l<(x-current);l++)
          {
            // await sleep(200);
            // alert(1);
            document.getElementById('slide-container').append(lists[l]);
          }
        }
        if(current>x)
        {
          for(var r=0;r<(current-x);r++)
          {
            // await sleep(200);
            document.getElementById('slide-container').prepend(lists[lists.length-1-r]);
          }
        }
        current=x;
        // setCurrent(x);
      }
    const eventIds = Object.keys(landings);
    return (
  <>
  <div id="slides" className='slides'>
      <div className='circles' id="circles">
        {
          eventIds.map((eventId,x) => {
              return(
                <div className='circle' onClick={()=>left(x)}></div>
              )
          })
        }
      </div>
      <div id="slide-container" className='slide-container'>
      {eventIds.map((eventId,i) => {
            const el = landings[eventId];
            return (
              <div className='slide' style={{width:"100vw",height:"100vh"}}>
                <img src={el.imageUrl} alt=''></img>
                <div className='des'>
                <p>{el.title}</p>
                <h1>{el.description}</h1>
                <div className='buttons'>
                <button className='carousel-button'> <span class="material-symbols-outlined">
                  play_circle
                  </span> 
                  <a href={el.youtubeUrl} style={{textDecoration:"none",color:"white"}} target="_blank">
                  Watch Now
                      </a></button>
                  <span class="material-symbols-outlined" onClick={()=>
                  {
                    left((i+1)%eventIds.length);
                    reset=0;
                    // setTimeout(()=>{
                    // reset=1;
                    // },3000);
                  }
                    }>
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
  );
}
export default Carousel2;
