import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Clients from './Pages/Clients'
import About from './Pages/About'
import Context from './context/Context';
// import Navbar2 from './Components/Navbar2'
// import Navbar from './Components/Navbar'
import StudentGallary from './Components/StudentGallary'
import Courses from './Pages/Courses';
import './App.css'
import Team from './Components/Team';
import Navbar3 from './Components/Navbar3';
import Mystudents from './Components/Mystudents';
function App() {
  return (
      <Context>
    <div className="App">
      {/* <Navbar2/> */}
      <Navbar3/>
      <LandingPage/>
      <About/>
      <Team/>
      <Courses/>
      <StudentGallary/>
      <Clients/>
      
      
      {/* <Mystudents/> */}
    </div>
      </Context>
  );
}

export default App;
