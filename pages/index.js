import React from "react";
import Link from "next/link";
import Router from "next/router";

import sanity from "../src/lib/sanity";
import { getAllActivities } from "../src/actions/activities/queries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import Layout, { SectionHeader } from "../src/components/Layout";
import Activity from "../src/components/Activity";

import "./index.scss";

const Home = ({ activities, ...props }) => (
  <Layout id="index">
    <div className="cover">
      <h1>
        <FontAwesomeIcon icon={faChevronUp} />
        <span>hivibes</span>
      </h1>
      <h2>Evolve to your Highest Vibration</h2>

      <div className="btn-container">
        <a href="#activities-container" className="btn btn-primary">
          Frequencie Modulators
        </a>
        <Link href="/lifestyle">
          <a className="btn btn-secondary">Lifestyle</a>
        </Link>
      </div>
    </div>

    <section>
      <SectionHeader
        title="Frequency Modulators"
        subtitle="Below is a collection of Frequency Modulators to Tune your Vibration in Life to its Highest Potential"
      />
      {activities.length && (
        <div id="activities-container" className="container">
          {activities.map((habit, i) => (
            <Activity data={habit} key={i} />
          ))}
        </div>
      )}
    </section>
  </Layout>
);

Home.getInitialProps = async function({ query }) {
  return {
    activities: await sanity.fetch(getAllActivities),
  };
};

export default Home;
