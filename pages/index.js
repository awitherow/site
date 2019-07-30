import React, { useEffect } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import Router from "next/router";

import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

import useGlobal from "../src/store";

import "./index.scss";

function Home({ activities, ...props }) {
  const [globalState, globalActions] = useGlobal();

  return (
    <div id="index" className="page">
      <Navigation />

      <div className="cover" style={{ paddingTop: 64 }}>
        <h1>HIVIBE</h1>
        <h2>Evolve to your Highest Vibration</h2>

        <div className="btn-container">
          <Button
            onClick={() => {
              Router.push("/activities");
            }}
            variant="primary">
            Get Active
          </Button>
          <Button
            onClick={() => {
              Router.push("/lifestyle");
            }}
            variant="light">
            Lifestyle
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
