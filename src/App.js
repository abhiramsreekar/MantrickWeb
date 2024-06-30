import './App.css';
import About2 from './Pages/About2'
import Context from './context/Context';
import Footer from './Pages/Footer';
import StudentCorner from './Pages/StudentCorner';
import ServicesTab from './Pages/ServicesTab';
import './App.css'
import Team from './Components/Team';
import Navbar3 from './Components/Navbar3';
import Blogs from './Components/BlogsPage';
import Training from './Components/Training';
import { Navigate, Route, Routes } from 'react-router-dom';
import Chatbot from './Components/Chatbot';
import Home from './home'
import Courses from './Pages/Courses';
import Blog from './Components/Blog';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
        <Context>
        <Navbar3/>
        <Chatbot/>
      <Routes>
      <Route path='/blogs' exact element={<Blogs />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About2 />} />
      <Route path='/services' element={<ServicesTab />} />
      <Route path='/training' element={<Training />} />
      <Route path='/team' element={<Team />} />
      <Route path='/studentcorner' element={<StudentCorner />} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/*' element={<Home/>} />
      
      </Routes>
      <Footer/>
      </Context>
    
    </>
  );
}

export default App;