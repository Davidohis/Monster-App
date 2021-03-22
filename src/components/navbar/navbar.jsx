import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand className="logo" href="/"> <span>RobotFriends</span></Navbar.Brand>

        <Navbar className="ml-auto mr-sm-3" style={{marginRight: "30px"}}>
          <Nav>
            <Link to="/robots" className="btn btn-white btn-animated p-3 ">Watch Now</Link>
          </Nav>
        </Navbar>
      </Navbar>
    </>
  )
}

export default NavbarComponent;