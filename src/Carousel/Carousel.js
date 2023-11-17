import './carousel.css'
import {useState} from 'react';
import b1 from '../Images/banner1.jpg'
import b2 from '../Images/banner2.jpg'
import b3 from '../Images/banner3.jpg'
import b4 from '../Images/banner4.jpg'
import b5 from '../Images/banner5.jpg'
export default function Carousel() {
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
          image:b5,
          name:"Hi Nanna",
          des:"'Jorugaa Husharugaa' song: 'Raffa Raffa' is personal, emotiona Game Changer song: Makers reveal reason behind postpon"
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
    <div className="containerbox">
        <div id="slide">
            {
              slides.map((Element,i)=>
              {
                return <><div className="item"  value={i} style={{backgroundImage:`URL(${Element.image})`,color:"black"}} onClick={()=>{
                  nleft(i);
                }
                }>
                <div className="content">
                    <div className="name" >Random</div>
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
