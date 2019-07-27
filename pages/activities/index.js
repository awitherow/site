import React from "react";
import { Button } from "react-bootstrap";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Activity from "../../components/Activity";

import sanity from "../../lib/sanity";
import { getAllActivities } from "../../queries/activities";

import "./index.scss";

function activities({ activities }) {
  return (
    <div id="activities" className="page">
      <Navigation />

      <div className="intro">
        <h3>Heighten Your Vibe</h3>
        <p>
          Below is a curated list of activities of a Higher Vibration,
          information about them, their benefits, and some starter pack items.
        </p>
        <div className="btn-container">
          <Button href="#activities-container">Popular Activities</Button>
        </div>
      </div>

      <ul id="activities-container" className="container">
        {activities.map(habit => (
          <Activity data={habit} />
        ))}
      </ul>

      <Footer />
    </div>
  );
}

activities.getInitialProps = async () => {
  return {
    activities: await sanity.fetch(getAllActivities),
  };
};

export default activities;
