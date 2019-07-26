import React, { useEffect } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import Router from "next/router";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "./index.scss";

function Home({ hobbies, ...props }) {
  useEffect(() => {});

  console.log(hobbies);

  return (
    <div id="index" className="page">
      <div className="cover" style={{ paddingTop: 64 }}>
        <Navigation />

        <h1>HIVIBE</h1>
        <h2>Evolve to your Highest Vibration</h2>
        <div className="btn-container">
          <Button onClick={() => Router.push("/habits")} variant="primary">
            Explore Hobbies
          </Button>
          <Button onClick={() => Router.push("/about")} variant="light">
            Our Story
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
