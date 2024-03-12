import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, NavLink, Link } from 'react-router-dom';
import './header.css'

function Footer() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/Yaroslav-Bozhak-Portfolio/">YB Yaroslav Bozhak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">              
              <Nav.Link as={NavLink} to="/Yaroslav-Bozhak-Portfolio/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/Yaroslav-Bozhak-Portfolio/about">About</Nav.Link>              
              <Nav.Link as={NavLink} to="/Yaroslav-Bozhak-Portfolio/portfolio">Portfolio</Nav.Link>            
              <Nav.Link as={NavLink} to="/Yaroslav-Bozhak-Portfolio/contact">Contact</Nav.Link>    
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    </>
  );
}


export default Footer;