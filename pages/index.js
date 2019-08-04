import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import { Button } from "react-bootstrap";
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
        <h1>hivib.es</h1>
        <h2>Evolve to your Highest Vibration</h2>

        <div className="btn-container">
          <AnchorLink
            offset="220"
            className="btn btn-success"
            href="#lifestyle">
            Vibe HIGHER
          </AnchorLink>
          <Link href="/mail">
            <a className="btn btn-primary">Free eBook!</a>
          </Link>
        </div>
      </div>

      <section>
        <SectionHeader
          title="High Vibe Lifestyle"
          subtitle="Below is a collection from the High Vibe Lifestyle to Tune your Vibration in Life to its Highest Potential"
        />
        {activities.length ? (
          <div id="lifestyle" className="container">
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
        "Promoting an amazing life that leaves you gasping in a rush of ecstacy IN EVERY MOMENT... Fostering these Moments with knowledge and Effective Solutions. See our High Vibe Hobbies for ideas on how to tweak your vibration.",
    },
  };
};

export default Home;
