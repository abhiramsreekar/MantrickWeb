import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Clients from './Pages/Clients'
import About from './Pages/About'
import Team from './Pages/Team';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <About/>
      <Team/>
      <Clients/>
      
    </div>
  );
}

export default App;
