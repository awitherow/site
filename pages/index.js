import React, { useEffect } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { link } from "../lib/routing";

import Navigation from "../components/Navigation";

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
          <Button onClick={() => link("/hobbies")} variant="primary">
            Explore Hobbies
          </Button>
          <Button onClick={() => link("/about")} variant="light">
            Our Story
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
