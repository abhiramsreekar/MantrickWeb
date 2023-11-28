import './carousel.css'
import {useState,useContext, useEffect} from 'react';
import b1 from '../Images/banner1.jpg'
import b2 from '../Images/banner2.jpg'
import b3 from '../Images/banner3.jpg'
import b4 from '../Images/banner4.jpg'
import b5 from '../Images/banner5.jpg'
import context from '../context/useContext';
export default function Carousel() {
  useEffect(()=>{
    // let lists = document.querySelectorAll('.item');
    // setCardNo(lists[0].id);
  })
  const {cardNo,setCardNo}=useContext(context);
    const [slides,setSlides]=useState([
        {
          image:b1,
          name:"Banner1",
          des:"Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu"

        },
        {
          image:b2,
          name:"USTAAD",
          des:"Ustaad Bhagat Singh Movie Poster Designs"
        },
        {
          image:b3,
          name:"Guntur Kaaram",
          des:"Guntur Kaaram movie poster"
        },
        {
          image:b4,
          name:"LUNDEV",
          des:"Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu"
        },
        {
          image:b3,
          name:"Hi Nanna",
          des:"'Jorugaa Husharugaa' song: 'Raffa Raffa' is personal, emotiona Game Changer song: Makers reveal reason behind postpon"
        },
        {
          image:b4,
          name:"Hi Nanna",
          des:"'Jorugaa Husharugaa' song: 'Raffa Raffa' is personal, emotiona Game Changer song: Makers reveal reason behind postpon"
        },
        {
          image:b1,
          name:"Hi Nanna",
          des:"'Jorugaa Husharugaa' song: 'Raffa Raffa' is personal, emotiona Game Changer song: Makers reveal reason behind postpon"
        }
      ]);
      const left=()=>{
        let lists = document.querySelectorAll('.item');
        // let lists=document.getElementById("slide").childNodes;
        setCardNo(lists[0].id);
        document.getElementById('slide').append(lists[0]);
        // console.log("\n:\n");
        // for(let j=0;j<5;j++)
        // console.log(lists[j].id+" ");
        // alert(lists[0].id);
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
        setCardNo(lists[0].id);
        document.getElementById('slide').prepend(lists[lists.length - 1]);
      }
  return (
    <>
      {/* <img src={lists[0].image}/> */}
    <div className="containerbox">
        <div id="slide">
            {
              slides.map((Element,i)=>
              {
                return <><div className="item"  id={i+2} style={{backgroundImage:`URL(${Element.image})`,color:"black"}} onClick={nleft
                }>
                <div className="content">
                    <div className="name" >Random</div>
                    <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                    {/* <button>play now</button> */}
                    <div style={{display:"flex"}} className="play">
                    <img src='https://cdn.pixabay.com/photo/2020/11/01/04/17/youtube-5702828_640.png' style={{height:"50px",cursor:"pointer"}} alt="play"/>
                    </div>
                </div>
                </div>
                </> 
              }
              )
            }   
        </div>
        <div className="buttons">
            <button id="prev" onClick={left}><span class="material-symbols-outlined">
            arrow_back_ios_new
            </span></button>
            {/* <span style={{color:"white",margin:"0px 10px"}}>{cardNo}/{7}</span> */}
            <button id="next" onClick={right}><span class="material-symbols-outlined">
              arrow_forward_ios
              </span></button>
        </div>
    </div>
    </>
  )
}
