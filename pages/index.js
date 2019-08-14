import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import { Button } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { logEvent } from "../lib/analytics";

import sanity from "../lib/sanity";
import { getAllActivities } from "../queries/activities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import Layout, { SectionHeader, Divider } from "../components/Layout";
import Activity from "../components/Activity";

import "./index.scss";

const Home = ({ seo, activities }) => {
  return (
    <Layout id="index" seo={seo}>
      <div className="cover">
        <h1>highvib.es</h1>
        <h2>
          Imagine YOUR LIFE AT ITS HIGHEST VIBRATION. Make dreams reality.
          AWAKEN THE POTENTIAL WITHIN YOU
        </h2>

        <div className="btn-container">
          <AnchorLink
            onClick={e => logEvent("/.button", "scroll to list")}
            offset="220"
            className="btn btn-success"
            href="#lifestyle">
            Awaken Your Potential
          </AnchorLink>
          <Link href="/mail">
            <a
              className="btn btn-primary"
              onClick={e => logEvent("/.button", "nav to /mail")}>
              Free eBook!
            </a>
          </Link>
        </div>
      </div>

      <section>
        <SectionHeader
          title="Awaken The Potential Within You"
          subtitle="Imagine Your Life at its Highest Vibration. Feel that growing sense of wonder at your own Innate Potential. The Ability to Maintain your Highest Vibration is Essential in this Awakening. Don't worry, we got your back with the HighVibes Lifestyle Collection. A curated list of theoretical and practical guides, as well as elite products for the most effective habits, routines, ideas and more #onlyhighvibes."
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
      title: "Evolve to Your Highest Vibration",
      description:
        "Promoting an amazing life that leaves you gasping in a rush of ecstacy IN EVERY MOMENT... Fostering these Moments with knowledge and Effective Solutions. See our High Vibe Hobbies for ideas on how to tweak your vibration.",
    },
  };
};

export default Home;
