import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Clients from './Pages/Clients'
import About2 from './Pages/About2'
import Context from './context/Context';
import StudentGallary from './Components/StudentGallary'
import Courses from './Pages/Courses';
import Footer from './Pages/Footer';
import ServicesTab from './Pages/ServicesTab';
import './App.css'
import Team from './Components/Team';
import Navbar3 from './Components/Navbar3';
import Testimonials from './Components/Testimonials';
import Mystudents from './Components/Mystudents';
import Services from './Pages/Services';
function App() {
  return (
      <Context>
    <div className="App">
      <Navbar3/>
      <LandingPage/>
      {/* <About/> */}
      <About2/>
      <ServicesTab/>
      <Courses/>
      <Mystudents/>
      <StudentGallary/>
      <Testimonials/>
      <Team/>
      <Services/>
      <Clients/>
    <Footer/>
    </div>
      </Context>
  );
}

export default App;
