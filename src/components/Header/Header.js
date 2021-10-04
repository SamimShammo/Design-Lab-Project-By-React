import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import img from '../Img/logo.png'

const Header = () => {
    return (
        <Navbar className="py-4 header-container" expand="lg">
        <Container>
          <Navbar.Brand ><img src={img} alt=""  className="lab-logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             <NavLink to="/home" className="manu" 
  activeStyle={{
    fontWeight: "bold",
    borderBottom:"1px solid grey"
  }}>HOME</NavLink>
             <NavLink to="/about" className="manu" 
  activeStyle={{
    fontWeight: "bold",
  }}>ABOUT</NavLink>
             <NavLink to="/course" className="manu" 
  activeStyle={{
    fontWeight: "bold",
    borderBottom:"1px solid grey"
  }}>COURSE</NavLink>
             <NavLink to="/teachers" className="manu" 
  activeStyle={{
    fontWeight: "bold",
    borderBottom:"1px solid grey"
  }}>TEACHERS</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;