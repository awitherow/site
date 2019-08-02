import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import AnchorLink from "react-anchor-link-smooth-scroll";

import sanity from "../src/lib/sanity";
import { getAllActivities } from "../src/actions/activities/queries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import Layout, { SectionHeader } from "../src/components/Layout";
import Activity from "../src/components/Activity";

import "./index.scss";

const Home = ({ seo, activities }) => {
  return (
    <Layout id="index" seo={seo}>
      <div className="cover">
        <h1>
          <FontAwesomeIcon icon={faChevronUp} />
          <span>hivibes</span>
        </h1>
        <h2>Evolve to your Highest Vibration</h2>

        <div className="btn-container">
          <AnchorLink offset="220" className="btn btn-primary" href="#hobbies">
            High Vibe Hobbies
          </AnchorLink>
        </div>
      </div>

      <section>
        <SectionHeader
          title="High Vibe Hobbies"
          subtitle="Below is a collection of High Vibe Hobbies to Tune your Vibration in Life to its Highest Potential"
        />
        {activities.length ? (
          <div id="hobbies" className="container">
            {activities.map((habit, i) => (
              <Activity data={habit} key={i} />
            ))}
          </div>
        ) : null}
      </section>
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
  return {
    activities: await sanity.fetch(getAllActivities),
    seo: {
      title: "hivib.es | Evolve to Your Highest Vibration",
      description:
        "We promote the kind of amazing life that leaves you gasping in a rush of ecstacy due to its sheer awesomeness. We provide the knowledge and simplest but yet most effective solutions for attaining that in all of life's adventures. See our High Vibe Hobbies for ideas on how to tweak your vibration.",
    },
  };
};

export default Home;
