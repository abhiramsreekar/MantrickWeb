import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Clients from './Pages/Clients'
import About from './Pages/About'
import Team from './Pages/Team';
import Navbar from './Components/Navbar'
import Context from './context/Context';
import Courses from './Pages/Courses';
import './App.css'
function App() {
  return (
      <Context>
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <About/>
      <Courses/>
      <Team/>
      <Clients/>
    </div>
      </Context>
  );
}

export default App;
