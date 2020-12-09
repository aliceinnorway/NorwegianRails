import React from 'react';
import './header.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
    <Navbar className="nav" bg="light" fixed="top" variant="light">
        <Navbar.Brand href="#home">Norwegian Rails</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#routes">Routes</Nav.Link>
            <Nav.Link href="#ticket">Log In</Nav.Link>
        </Nav>
    </Navbar>
    );
  }
  
  export default Header;
  