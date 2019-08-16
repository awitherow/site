import React, { useEffect } from "react";
import Link from "next/link";

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
        <h2>Create Your life at its highest vibration</h2>

        <div className="btn-container">
          <AnchorLink
            onClick={e => logEvent("/.button", "scroll to list")}
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

      <section id="lifestyle">
        <SectionHeader title="Awaken The Potential Within You" subtitle="The most Effective and Powerful High Vibrational Lifestyle Enhancements brought to you with Simplicty and Ease of Integration. Tried and Tested Solutions Empower you to Truly Go Further in Life. Awaken the Potential Within You." />

        <div className="container activities">
          {activities.map((habit, i) => (
            <Activity data={habit} key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
  return {
    activities: await sanity.fetch(getAllActivities),
    seo: {
      title: "Your Life at its Highest Vibration",
      description:
        "Promoting a life that leaves you gasping in a rush of ecstacy at its own amazingness. Fostering such moments with Succint Knowledge and Effective Solutions.",
    },
  };
};

export default Home;
