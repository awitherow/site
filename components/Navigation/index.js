import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { link } from "../../lib/routing";

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
              <Nav.Link href="#" onClick={() => link("/")}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/hobbies" onClick={() => link("/hobbies")}>
                Habits
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
