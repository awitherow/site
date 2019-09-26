import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

export const links = [
  {
    id: "",
    label: "Home",
  },
  {
    id: "archive",
    label: "Blog Archive",
  },
  {
    id: "products",
    label: "Products",
  },
];

const checkRoute = id => {
  const currentRoute = useRouter().route;
  if (!currentRoute.includes(id)) {
    return false;
  }

  if (currentRoute === "/" && id === "") {
    return true;
  }

  if (currentRoute.includes(id) && id != "") {
    return true;
  }
};

export default function Navigation({ fixedNav = false }) {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed={fixedNav && "top"}>
      <div className="container">
        <Navbar.Brand>
          <Link href="/">
            <img src="../../static/img/logo-text.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {links.map(({ id, label }, i) => (
              <Nav.Item key={i}>
                <Link href={`/${id}`}>
                  <a className={`nav-link${checkRoute(id) ? " active" : ""}`}>
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
