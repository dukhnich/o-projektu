
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark"> 
        <Container>
        <Navbar.Brand href="./">Sluneční Průvodce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="mx-4" to="dukhnich">Maryna Dukhnich</NavLink>
            <NavLink to="chuiko">Anastasiia Chuiko</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;