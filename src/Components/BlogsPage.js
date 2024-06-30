import React, { useEffect, useState ,useContext} from 'react'
import BlogThumbnail from './BlogThumbnail';
import './BlogPage.css'
import { useNavigate } from 'react-router-dom';
import apiServices from '../services/apiServices';
import { a } from 'react-spring';
import axios from 'axios';
import context from '../context/useContext';
const BlogPage = () => {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

//   const navigate = useNavigate();
  const [blogs, setBlogs] = useState({});

  const fetchBlogs = async () => {
    try {
      // const response = await apiServices.fetchAllBlogs();
      const response = await axios.get('https://mantrickweb-default-rtdb.firebaseio.com/realblogs.json');
      setBlogs(response.data);
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, [])
    const {data,setData}=useContext(context);
  const exit=()=>{
      document.querySelector(".blogShow").style.display="none";
    }
  const blogIds = Object.keys(blogs);
  return (
    <div className='blogs-Container' id="blogs-Container" style={{paddingTop:"7vh"}}>
        <div className='blogsContainer'>
            <div className='blogsChangingHeading'>
                <h1 className='head-one'>Blogs</h1>
                <p>
                We team Mantrick Studios is aiming at providing blogs incessantly to feed our audience and students with utilitarian information to enhance their knowledge on various domains.                     
                </p>
            </div>
            
            
        </div>
        <div className="tabsContainer">
                <div className="bloc-tabs">
                    <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    >
                    All
                    </button>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"} >
                        <div className='content-items'>
                            {blogIds.map((blogId) => {
                              // alert(JSON.stringify(blogs[blogId].blogcontent));
                                    return <BlogThumbnail 
                                        date={blogs[blogId].date} 
                                        blogtitle={blogs[blogId].title} 
                                        blogdescription={blogs[blogId].iframeSrc} 
                                        blogthumbnail={blogs[blogId].imageUrl} 
                                        id={blogId}
                                        blogData={blogs[blogId]}
                                        content={blogs[blogId].blogcontent}
                                        />
                                        
                                })}
                        </div>
                        
                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"} >
                        <div className='content-items'>
                            No Items found
                        </div>
                    </div>                
                </div>
        </div>
    </div>
  )
}

export default BlogPage