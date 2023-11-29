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
                    <div className="name" >{Element.name}</div>
                    <div className="des">{Element.des}</div>
                    <button style={{borderRadius:"8px"}}>Open YouTube</button>
                </div>
                </div>
                </> 
              }
              )
            }   
        </div>
        <div className="buttons">
            <button id="prev" onClick={right}><span class="material-symbols-outlined">
            arrow_back_ios_new
            </span></button>
            {/* <span style={{color:"white",margin:"0px 10px"}}>{cardNo}/{7}</span> */}
            <button id="next" onClick={left}><span class="material-symbols-outlined">
              arrow_forward_ios
              </span></button>
        </div>
    </div>
    </>
  )
}
