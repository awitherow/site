import React from "react";
import { useGlobal } from "reactn";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

export const links = [
  {
    id: "mail",
    label: "Free eBook!",
    modal: "MailchimpSignup",
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    modal: "MailchimpSignup",
  },
  {
    id: "products",
    label: "Products",
  },
  {
    id: "archive",
    label: "Blog Archive",
  },
];

export default function Navigation({ fixedNav = false }) {
  const [globalModal, setModal] = useGlobal("modal");

  return (
    <Navbar expand="lg" fixed={fixedNav && "top"}>
      <div className="container">
        <Navbar.Brand>
          <Link href="/">
            <a>highvib.es</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {links.map(({ id, label, modal }, i) => (
              <Nav.Item key={i}>
                {!modal ? (
                  <Link href={`/${id}`}>
                    <a
                      className={`nav-link${
                        useRouter().route.includes(id) ? " active" : ""
                      }`}>
                      {label}
                    </a>
                  </Link>
                ) : (
                  <Button variant="link" onClick={() => setModal(modal)}>
                    {label}
                  </Button>
                )}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
