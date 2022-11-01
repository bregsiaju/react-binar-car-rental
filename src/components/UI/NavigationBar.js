import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import MyButton from './MyButton';

import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="fixed-top justify-content-center">
      <Container fluid className="navbar-content">
        <Navbar.Brand className="logo-brand"></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel-expand-lg">
              BCR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <div className="navbar-nav ms-0">
                <Nav.Link className="me-4 text-black" href="#service">Our Service</Nav.Link>
                <Nav.Link className="me-4 text-black" href="#why-us">Why Us</Nav.Link>
                <Nav.Link className="me-4 text-black" href="#testi">Testimonial</Nav.Link>
                <Nav.Link className="me-4 text-black" href="#FAQ">FAQ</Nav.Link>
                <Nav.Link href=""><MyButton>Register</MyButton></Nav.Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;