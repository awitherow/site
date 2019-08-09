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
        <h1>hi vibes</h1>
        <h2>
          Promoting effective activities and solutions to help you achieve more.
        </h2>

        <div className="btn-container">
          <AnchorLink
            onClick={e => logEvent("/.button", "scroll to list")}
            offset="220"
            className="btn btn-success"
            href="#lifestyle">
            {" "}
            View The Collection
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
          title="Hi Vibes Lifestyle Collection"
          subtitle="A collection of the best from the Hi Vibes Lifestyle to Tune your Vibes to their Highest Potential. Routines, lifestyle transformations, ideas for the weekend, something to do when you're bored, we got it. All Certified Hi Vibes!"
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
