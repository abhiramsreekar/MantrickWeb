import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container'
import Newcard from '../Components/Newcard'
import './Clients.css'
import apiClient from '../firebase/apiClient'
export default function Clients() {
  const [photos,setPhotos]=useState(null);
 

  useEffect(()=>{
    fetchAllPhotos();
},[])
const fetchAllPhotos = async () => {
  try {
    const response = await apiClient.get(`/clients.json`);
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
    
    <diV className="gallaryBox page clientGallary clientspage" id="gallary">
        <div className='gin'>
          <div className='gallary'>
            <h1 className='head-one' style={{fontSize:"40px",textAlign:"center",width:"93%"}}>CLIENTS</h1>
            <section className="carousel-wrapper">
              <button type="button" className="arrows left-arrow arrow-inactive" aria-label="Arrow Left">
                <svg viewBox="0 0 256 512">
                  <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                </svg>
              </button>
              <section className="carousel">
              {
                photos?eventIds.map((e,i)=>{
                return <div className="carousel-item client-item">
                  {/* <img src="https://pixelloid.com/old/wp-content/grand-media/image/02.jpg" alt="Working" /> */}
                  <Newcard img={photos[e].imageUrl} delay={photos[e]}/>
                </div>
                  }):<></>
              }
              </section>
              <button type="button" className="arrows right-arrow" aria-label="Arrow Right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                </svg>
              </button>
            </section>
          </div>
        </div>
      </diV>
    
  )
}
