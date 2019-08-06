import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const links = [
  {
    id: "mail",
    label: "Free eBook!",
  },
];

function Navigation({ fixedNav = false }) {
  return (
    <Navbar expand="lg" fixed={fixedNav && "top"}>
      <div className="container">
        <Navbar.Brand>
          <Link href="/">
            <a>hivib.es</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {links.map(({ id, label }, i) => (
              <Nav.Item key={i}>
                <Link href={`/${id}`}>
                  <a
                    className={`nav-link${
                      useRouter().route.includes(id) ? " active" : ""
                    }`}>
                    {label}
                  </a>
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
