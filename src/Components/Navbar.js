import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../Images/mantrick.png'
import { useContext } from 'react';
import context from '../context/useContext';
import './Navbar.css'
function CollapsibleExample() {
  const {gpt,setGpt}=useContext(context);
  const change=(e)=>{
        // const nav=document.querySelector(".nav");
        // nav.childNodes.dis
  }
  return (
    <>
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={image} alt="" width={"200px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#brochure" >Brochure</Nav.Link>
            <Nav.Link href="#schedule" >Schedule Meet</Nav.Link>
            <Nav.Link href="#contact" >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header>
      <button type="button"  style={{zIndex:"1000"}} onClick={()=>{
        if(gpt===true)
        {
          setGpt(false);
        }
        else
        {
          setGpt(true);
        }
      }} id="chatBot"  class="" >Chat With Bot</button>
    </header>
      </>
  );
}

export default CollapsibleExample;