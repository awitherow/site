import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import Router from "next/router";

import "./index.scss";

function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#home">HI VIBE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link onClick={() => Router.push("/")}>Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => Router.push("/habits")}>
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
