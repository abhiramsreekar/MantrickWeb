import React,{useEffect,useState} from 'react'
import './services.css'
import Video from '../videos/rain.mp4';
import Movies from '../Components/Movies';
import apiClient from "../firebase/apiClient";
export default function Services() {
    const [photo,setPhoto]=useState("");
    const [i,setI]=useState(0);
    useEffect(()=>{
        fetchAllPhotos();
    },[])
    const [photos,setPhotos]=useState(null);
    const photos2=[
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2022/11/RRR-2-768x432.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2022/11/PUSHPA-3-768x432.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2022/11/GOD-FATHER-4-768x432.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2022/11/bheemla-nayak-2-768x432.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2022/11/Bangaraju-3-768x432.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2022/11/VARASUDU-1-768x432.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/EGwHWV5VUAA2CPy-800x400.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/Venky-Mama-Diwali-Wishes-HD-Poster-and-Still--289x400.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/2-16-768x432.jpeg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/Sooryavanshi-Full-Movie-Download-402x400.jpg`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/15_Sayvasachi.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/17_ee-maya-perumeto.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/14_NTR-M.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/13_Kavcham.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/11_Abduction.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/10_rangastlam.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/07_Arjun-survaram.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/05_Maharshi.png`
        },
        {
            img:`https://mantrickstudios.com/wp-content/uploads/2021/03/02_FILM-WORKS.png`
        },

    ];
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
          // return response;
          // alert(JSON.stringify(response.data));
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
    <div className='services' >
        <video autoPlay muted loop id="myVideo"  src={Video} type="video/mp4">
        </video>
        <Movies/>
        <div className='back'></div>
            <div className='showphoto'>
                <div className='inner'>
                <p onClick={prev}>
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
                <p onClick={photoNext}>
                <span class="material-symbols-outlined">
                arrow_forward_ios
                </span>
                </p>
                </div>
            </div>
        <div className='outerWork'>
            
        <div className='ourWork'>
        <div className='outerphotos'>
            {/* <h3 style={{color:"white",textAlign:"center"}}>PHOTOS</h3> */}
        <div className='photos' id="photos">
            {photos?eventIds.map((eventId) => {
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
