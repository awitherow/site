import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

import "./index.scss";

const links = [
  {
    id: "lifestyle",
    label: "Lifestyle",
  },
  {
    id: "activities",
    label: "Activities",
  },
];

function Navigation(props) {
  const router = useRouter();

  return (
    <Navbar expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand>
          <Link href="/">
            <a>HIVIBES</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {links.map(({ id, label }, i) => {
              console.log(id, router.route);
              return (
                <Nav.Item key={i}>
                  <Link href={`/${id}`}>
                    <a
                      className={`nav-link${
                        router.route.includes(id) ? " active" : ""
                      }`}>
                      {label}
                    </a>
                  </Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
