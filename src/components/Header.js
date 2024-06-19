import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#section1');

  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#section1" 
              className={activeLink === '#section1' ? 'active' : ''}
              onClick={() => setActiveLink('#section1')}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              href="#section2" 
              className={activeLink === '#section2' ? 'active' : ''}
              onClick={() => setActiveLink('#section2')}
            >
              Sección 2
            </Nav.Link>
            <Nav.Link 
              href="#section3" 
              className={activeLink === '#section3' ? 'active' : ''}
              onClick={() => setActiveLink('#section3')}
            >
              Sección 3
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
