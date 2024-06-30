import React,{useContext} from 'react'
import './BlogThumbnail.css';
import context from '../context/useContext';
import { useNavigate } from 'react-router-dom';
function BlogThumbnail({blogtitle,blogdescription,date, blogthumbnail, id,content}) {
  const navigate=useNavigate();
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
      };
      
      const {data,setData}=useContext(context);
    //   const navigate = useNavigate();
      const originalDateString = date;
      const formattedDate = formatDate(originalDateString);
      console.log(formattedDate); // Output: Jul 06, 2023
      const month = formattedDate.slice(0,3)
      const dateActual = formattedDate.slice(4,6)
      const year = formattedDate.slice(8)
        const showdev=(
          )=>{
            navigate(`/blog/${id}`);         
        }
        const exit=()=>{
          document.querySelector(".blogShow").style.display="none";
        }
  return (
    <>
      
        <div className='thumbnailContainer' style={{cursor:"pointer"}}
        onClick={() => {
            showdev();
            }
        }
        >
            <div className='thumbnailImage'>
                <img src={blogthumbnail} alt="Description of the image"></img>
            </div>
            <div className='thumbnailDetails'>
                <div className='thumbnailDate'>
                    <p>{month}</p>
                    <p className='date' style={{backgroundColor:"black"}}>{dateActual}</p>
                    <p>{year}</p>
                </div>
                <div className='thumbnailNameDetails'>
                        <div className='thumbnailTitle'>
                            <p>{blogtitle}</p>
                        </div>
                        <div className='thumbnailDescription'>
                            <p>{blogdescription}</p>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogThumbnail