import React,{useEffect,useState} from 'react'
import './services.css'
// import Video from '../videos/rain.mp4';
import apiClient from "../firebase/apiClient";
export default function Services() {
    const [photo,setPhoto]=useState("");
    const [i,setI]=useState(0);
    useEffect(()=>{
        fetchAllPhotos();
            window.scrollTo(0, 0);
    },[])
    const [photos,setPhotos]=useState(null);
    const prev=()=>{
        let temp=i-1;
        setI(temp);
        if(temp===-1)
        {
            setI(photos.length-1);
        }
        setPhoto(photos[i].imageUrl);
    }
    const photoNext=()=>{
        let temp=i+1;
        setI(temp);
        if(temp===photos.length)
        {
            setI(0);
        }
        setPhoto(photos[i].value.imageUrl);
    }
    const showphoto=(l)=>{
        setPhoto(l);
        document.querySelector('.showphoto').style.display="block";
        document.querySelector('.showphoto').style.position="fixed";
    }
    const exit=()=>{
        document.querySelector('.showphoto').style.display="none";
    }
    // var eventIds;
    const fetchAllPhotos = async () => {
        try {
          const response = await apiClient.get(`/events.json`);
          setPhotos(response.data);
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      };
      var eventIds;
      if(photos!=null)
      {
        eventIds= Object.keys(photos);
      }
  return (
    <div className='services' id="services">
        <div className='portfolio-first'>
        {/* <video style={{display:"absolute",width:"100%"}} autoPlay muted loop id="myVideo"  src={Video} type="video/mp4"> 
      </video> */}
        </div>
        <div className='back'></div>
            <div className='showphoto'>
                <div className='inner'>
                <p className='p' onClick={prev}>
                <span class="material-symbols-outlined">
                arrow_back_ios
                </span>
                </p>
                <div className='img'>
                <p className='exit' onClick={exit}><span class="material-symbols-outlined">
                close
                </span></p>
                <img src={photo}></img>
                </div>
                <p className='p' onClick={photoNext}>
                <span class="material-symbols-outlined">
                arrow_forward_ios
                </span>
                </p>
                </div>
            </div>
        <div className='outerWork' id="photos_o">
            <h3 style={{color:"white",textAlign:"center"}}className="head-one">OUR PORTFOLIO</h3>
        <div className='ourWork'>
        <div className='outerphotos'>
        <div className='photos' id="photos">
            {photos?eventIds.reverse().map((eventId) => {
        const event = photos[eventId];
        return (
        <div className='photo'>
                            <img src={event.imageUrl} onClick={()=>{
                                showphoto(event.imageUrl);
                            }}/>
                            <h3>{event.title}</h3>
                        </div>
        );
                
      }):<div></div>}
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
