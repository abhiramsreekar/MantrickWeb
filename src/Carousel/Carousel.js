import './carousel.css'
import {useState,useContext, useEffect} from 'react';
import b1 from '../Images/banner1.jpg'
import b2 from '../Images/banner2.jpg'
import b3 from '../Images/banner3.jpg'
import b4 from '../Images/banner4.jpg'
import b5 from '../Images/banner5.jpg'
import apiClient from "../firebase/apiClient";
import context from '../context/useContext';
export default function Carousel() {
  useEffect(()=>{
    fetchAllLandings();
    auto();
  },[])
  const {cardNo,setCardNo}=useState(1);
  const {count,setCount}=useState(4);
  const {j,setJ}=useState(1);
    const [landings,setLandings]=useState([
      ]);
      const t=[
        {
          image:"https://mantrickstudios.com/wp-content/uploads/2022/11/RRR-2-1536x864.jpg",
          name:"RRR",
          des:"Directed by Rajamouli"

        },
        {
          image:"https://mantrickstudios.com/wp-content/uploads/2022/11/PUSHPA-3-1536x864.jpg",
          name:"Pushpa",
          des:"Details"
        },
        {
          image:"https://mantrickstudios.com/wp-content/uploads/2022/11/GOD-FATHER-4-1536x864.jpg",
          name:"GodFather",
          des:"Details"
        },
        {
          image:"https://mantrickstudios.com/wp-content/uploads/2022/11/bheemla-nayak-2-1536x864.jpg",
          name:"Bheemla Nayak",
          des:"Details"
        },
        {
          image:"https://mantrickstudios.com/wp-content/uploads/2022/11/Bangaraju-3-1536x864.jpg",
          name:"Bangaraju",
          des:"details"
        },
        {
          image:"https://mantrickstudios.com/wp-content/uploads/2022/11/VARASUDU-1-1536x864.jpg",
          name:"Varasudu",
          des:"details"
        }
      ];
      const auto=()=>{
        let lists = document.querySelectorAll('.item');
        // setCount(lists[2].id);
        document.getElementById('slide').append(lists[0]);
        setTimeout(()=>{
          auto();
        },2000);
      }
      const left=()=>{
        let lists = document.querySelectorAll('.item');
        // setJ(lists[2].id);
        document.getElementById('slide').append(lists[0]);
      }
      const nleft=(e)=>{
        // alert(e.target.id);
        // for(let i=0;i<(e.target.id-2);i++)
        // {
        //   setTimeout(()=>{
        //     let lists = document.querySelectorAll('.item');
        //     document.getElementById('slide').append(lists[0]);
        //   },2000)
          
        // }
      }
      const right=()=>{
        let lists = document.querySelectorAll('.item');
        // setJ(lists[0].id);
        document.getElementById('slide').prepend(lists[lists.length - 1]);
      }

      // var eventIds;
      const fetchAllLandings = async () => {
        try {
          const response = await apiClient.get(`/landingpage.json`);
          // return response;
          // alert(JSON.stringify(response.data));
          setLandings(response.data);
          setCount(response.data.length);
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      };
      const eventIds = Object.keys(landings);
  return (
    <>
      {/* <img src={lists[0].image}/> */}
    <div className="containerbox">
        <div id="slide">
            {/* {
              slides.map((Element,i)=>
              {
                return <><div className="item"  id={i===0?6:i}
                 style={{backgroundImage:`URL(${Element.image})`,color:"black"}} onClick={nleft
                }>
                <div className="content">
                    <div className="name" >{Element.name}</div>
                    <div className="des">{Element.des}</div>
                    <button>Open YouTube</button>
                </div>
                </div>
                </> 
              }
              )
            }    */}

            {eventIds.map((eventId,i) => {
            const event = landings[eventId];
            return (
              <div className="item"
                 style={{backgroundImage:`URL(${event.imageUrl})`,color:"black"}} id={i}>
                <div className="content">
                    <div className="name" >{event.title}</div>
                    <div className="des">{event.description}</div>
                    <button href={event.youtubeUrl}><a href={event.youtubeUrl} style={{textDecoration:"none"}} target="_blank">
                      Open YouTube
                      </a>
                      </button>
                </div>
                </div>
            );
          })}

        </div>
        <div className="buttons">
            <button id="prev" onClick={right}><span class="material-symbols-outlined">
            arrow_back_ios_new
            </span></button>
            <span style={{color:"white",margin:"0px 10px"}}>{j}   |   {count}</span>
            <button id="next" onClick={left}><span class="material-symbols-outlined">
              arrow_forward_ios
              </span></button>
        </div>
    </div>
    </>
  )
}
