import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";

import "./index.scss";

function Navigation(props) {
  return (
    <Navbar expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#home">HI VIBE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/activities">
                <a className="nav-link">Activities</a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
