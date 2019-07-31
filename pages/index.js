import React from "react";
import Link from "next/link";
import Router from "next/router";

import Layout from "../src/components/Layout";

import "./index.scss";

const Home = ({ activities, ...props }) => (
  <Layout id="index">
    <div className="cover">
      <h1>HIVIBE</h1>
      <h2>Evolve to your Highest Vibration</h2>

      <div className="btn-container">
        <Link href="/activities">
          <a className="btn btn-primary">Get Active</a>
        </Link>
        <Link href="/lifestyle">
          <a className="btn btn-secondary">Lifestyle</a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Home;
