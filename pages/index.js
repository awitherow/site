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
        <h1>hivib.es</h1>
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
          title="High Vibe Lifestyle Collection"
          subtitle="Acollection from the High Vibe Lifestyle to Tune your Vibration in Life to its Highest Potential. Whether you are looking for routines to integrate into your schedule, entire lifestyle changes to make, some ideas for the weekend, or something for when you're bored, everything below is certified High Vibe."
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
