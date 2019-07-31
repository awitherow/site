import React, { useEffect } from "react";
import Router from "next/router";
import { Button } from "react-bootstrap";

import Layout from "../../src/components/Layout";
import Activity from "../../src/components/Activity";

import sanity from "../../src/lib/sanity";

import { getAllActivities } from "../../src/actions/activities/queries";

import "./index.scss";

function Activities({ activities }) {
  return (
    <Layout id="activities">
      <div className="intro">
        <h3>Evolve to Your Highest Vibration</h3>
        <p>
          Below you will find a curated list of activities of a Higher
          Vibration, information about them, their benefits, and how to get
          started living in alignment with your Highest Vibration.
        </p>
        <div className="btn-container">
          <Button href="#activities-container">Popular Activities</Button>
        </div>
      </div>

      {activities.length && (
        <div id="activities-container" className="container">
          {activities.map((habit, i) => (
            <Activity data={habit} key={i} />
          ))}
        </div>
      )}
    </Layout>
  );
}

Activities.getInitialProps = async function({ query }) {
  return {
    activities: await sanity.fetch(getAllActivities),
  };
};

export default Activities;
