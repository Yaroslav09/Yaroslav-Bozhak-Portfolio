import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">YB Yaroslav Bozhak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>            
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>    
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

// function Header() {
//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand as={Link} to="/Yaroslav-Bozhak-Portfolio/">YB Yaroslav Bozhak</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto" >
//               <Nav.Link as={Link} to="/Yaroslav-Bozhak-Portfolio/">Home</Nav.Link>
//               <Nav.Link as={Link} to="/Yaroslav-Bozhak-Portfolio/about">About</Nav.Link>
//               <Nav.Link href="#link">Skills</Nav.Link>
//               <Nav.Link as={Link} to="/Yaroslav-Bozhak-Portfolio/portfolio">Portfolio</Nav.Link>            
//               <Nav.Link as={Link} to="/Yaroslav-Bozhak-Portfolio/contact">Contact</Nav.Link>    
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Outlet />
//     </>
//   );
// }

export default Header;