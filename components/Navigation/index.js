import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import Link from "next/link";

import "./index.scss";

function Navigation(props) {
  console.log(props);
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#home">HI VIBE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/">
                <Nav.Link href="#">Home</Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/habits">
                <Nav.Link href="#">Habits</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
