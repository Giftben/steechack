import React from "react";
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavBar.css";
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <>
          
          {['md'].map((expand) => (
        <Navbar key={expand} bg="#000000" expand={expand} className="mb-0 nav__bar">
          <Container fluid>
            <Navbar.Brand href="/"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo}  alt="logo" className="canvas_logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-list-items">
                  <Nav.Link className='link list-items' href="/">Home</Nav.Link>
                  <Nav.Link className='link list-items' href="#about">About Us</Nav.Link>
                  <Nav.Link className='link list-items' href="#faqs">FAQs</Nav.Link>
                  <Nav.Link className='link list-items' href="#contact">Contact Us</Nav.Link>

                <Nav.Link className='link'>< Link to="/Signup" className="button">Sign up</Link></Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    )
}

export default NavBar;
