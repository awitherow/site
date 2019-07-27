import React, { useEffect } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import Router from "next/router";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "./index.scss";

function Home({ activities, ...props }) {
  useEffect(() => {});

  return (
    <div id="index" className="page">
      <Navigation />

      <div className="cover" style={{ paddingTop: 64 }}>
        <h1>HIVIBE</h1>
        <h2>Evolve to your Highest Vibration</h2>

        <div className="btn-container">
          <Button onClick={() => Router.push("/activities")} variant="primary">
            Vibe Higher
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
