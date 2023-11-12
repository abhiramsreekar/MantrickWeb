import './carousel.css'
import {useState} from 'react';
export default function Carousel() {
    const [slides,setSlides]=useState([
        {
          image:"https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg",
          name:"LUNDEV",
          des:"Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu"
        },
        {
          image:"https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg",
          name:"USTAAD",
          des:"Ustaad Bhagat Singh Movie Poster Designs"
        },
        {
          image:"https://cdn.pixabay.com/photo/2019/10/17/21/17/joker-4557864_1280.jpg",
          name:"Guntur Kaaram",
          des:"Guntur Kaaram movie poster"
        },
        {
          image:"https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg",
          name:"LUNDEV",
          des:"Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu"
        },
        {
          image:"https://cdn.pixabay.com/photo/2013/09/29/12/21/camera-188083_1280.jpg",
          name:"Hi Nanna",
          des:"'Jorugaa Husharugaa' song: 'Raffa Raffa' is personal, emotiona Game Changer song: Makers reveal reason behind postpon"
        },
        {
          image:"https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg",
          name:"bro",
          des:"Bro Movie Poster Designs"
        },
        {
          image:"https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg",
          name:"LUNDEV",
          des:"Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu"
        }
      ]);
      const left=()=>{
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
      }
      const nleft=(x)=>{
        alert(x);
        let lists = document.querySelectorAll('.item');
        for(let i=0;i<x;i++)
        {
          document.getElementById('slide').append(lists[i]);
        }
      }
      const right=()=>{
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
      }
  return (
    <div className="container">
        <div id="slide">
            {
              slides.map((Element,i)=>
              {
                return <><div className="item"  value={i} style={{backgroundImage:`URL(${Element.image})`,color:"black"}} onClick={()=>{
                  nleft(i);
                }
                }>
                <div className="content">
                    <div className="name" >LUNDEV</div>
                    <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                    <button>See more</button>
                </div>
                </div>
                </> 
              }
              )
            }   
        <div className="buttons">
            <button id="prev" onClick={left}><span class="material-symbols-outlined">
            arrow_back_ios_new
            </span></button>
            <button id="next" onClick={right}><span class="material-symbols-outlined">
              arrow_forward_ios
              </span></button>
        </div>
        </div>
    </div>
  )
}
