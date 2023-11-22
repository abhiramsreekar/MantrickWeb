import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Clients from './Pages/Clients'
import About from './Pages/About'
import Team from './Pages/Team';
import Context from './context/Context';
import Navbar2 from './Components/Navbar2'
// import Navbar from './Components/Navbar'
import StudentGallary from './Components/StudentGallary'
import Courses from './Pages/Courses';
import './App.css'
function App() {
  return (
      <Context>
    <div className="App">
      <Navbar2/>
      <LandingPage/>
      <About/>
      <Courses/>
      <Team/>
      <Clients/>
      <StudentGallary/>
    </div>
      </Context>
  );
}

export default App;
