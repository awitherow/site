import React from "react";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Activity from "../../components/Activity";

import sanity from "../../lib/sanity";
import { getAllActivities } from "../../queries/activities";

import "./index.scss";

function activities({ activities }) {
  return (
    <div id="activities" className="page">
      <div className="intro">
        <Navigation />
        <h3>Heighten Your Vibe</h3>
        <p>
          Below is a curated list of activities of a Higher Vibration,
          information about them, their benefits, and some starter pack items.
        </p>
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
