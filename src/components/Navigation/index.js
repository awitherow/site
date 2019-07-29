import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";

import "./index.scss";

function Navigation(props) {
  return (
    <Navbar expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand>
          <Link href="/">HI VIBE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
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
