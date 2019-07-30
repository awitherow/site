import React, { useEffect } from "react";
import Router from "next/router";
import { Button } from "react-bootstrap";

import Layout from "../../src/components/Layout";
import Activity from "../../src/components/Activity";

import sanity from "../../src/lib/sanity";

import useGlobal from "../../src/store";

import "./index.scss";

function Activities() {
  const [globalState, globalActions] = useGlobal();

  useEffect(() => {
    async function getActivities() {
      await globalActions.activities.getActivities();
    }

    getActivities();
  }, []);

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

      {globalState.activities.length && (
        <div id="activities-container" className="container">
          {globalState.activities.map((habit, i) => (
            <Activity data={habit} key={i} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Activities;
