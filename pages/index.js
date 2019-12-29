import React, { useState, useEffect } from "react";
import { useGlobal } from "reactn";
import axios from "axios";
import Link from "next/link";
import { Form, Button, InputGroup } from "react-bootstrap";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { logEvent } from "../lib/analytics";

import sanity from "../lib/sanity";
import { getAllActivities } from "../queries/activities";
import { getFeaturedPosts } from "../queries/posts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";

import Layout, { SectionHeader, Divider } from "../components/Layout";
import Activity from "../components/Activity";
import MailchimpForm from "../components/MailchimpForm";
import PostList from "../components/PostList";

import "./index.scss";

const Home = ({ seo }) => {
  const [email_address, updateEmail] = useState("");
  const [first_name, updateName] = useState("");
  const [success, setSuccess] = useState("n/a");

  const [activities, setActivities] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      const activities = await sanity.fetch(getAllActivities);
      setActivities(activities);
    }

    // async function fetchFeaturedPosts() {
    //   const featuredPosts = await sanity.fetch(getFeaturedPosts);
    //   setFeaturedPosts(featuredPosts);
    // }

    fetchActivities();
    // fetchFeaturedPosts();
  }, []);

  const handleSignup = async () => {
    setSuccess("waiting");
    const result = await axios.post("/api/mailchimp/subscribe", {
      source: "home intro",
      email_address,
    });

    logEvent(`mailchimp signup`, "/");

    if (typeof result != Error) {
      setSuccess("good");
      updateEmail("");
      // TODO: disable all email signup on that device for that list.
    } else {
      setSuccess("bad");
      //TODO: ROLLBAR
    }
  };

  const sortByMostContent = (a, b) => {
    let aScore = 0;
    let bScore = 0;

    aScore += a.products ? a.products.length : 0;
    aScore += a.resources ? a.resources.length : 0;
    bScore += b.products ? b.products.length : 0;
    bScore += b.resources ? b.resources.length : 0;

    return bScore - aScore;
  };

  return (
    <Layout id="index" seo={seo}>
      <div className="cover">
        <div className="container">
          <div className="inner">
            <MailchimpForm source="Home Page" />
          </div>
        </div>
      </div>

      <section id="lifestyle">
        <SectionHeader
          title="High Vibrational Digest"
          subtitle="Get the Most Bang for your Buck with our Simple, Natural Solutions to Living Life at Your Highest Vibration. Our High Vibe Digest is packed with Health, Hacks and Highdeas to help create Alignment with Your Dream Life."
        />

        <div className="container activities">
          {activities
            .filter(({ featured }) => featured)
            .sort(sortByMostContent)
            .map((activity, i) => (
              <Activity data={activity} key={i} />
            ))}
        </div>
      </section>
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
  return {
    seo: {
      title: "HIGH VIB.ES | HAPPY, HEALTHY, HOLISTIC",
      description:
        "HIGH VIB.ES | HAPPY, HEALTHY, HOLISTIC. We promote a holistic approach to living a happy and healthy lifestyle by offering a variety of validated, quality articles, media, products and more to help you Live Your Dream Life at its Highest Vibration.",
    },
  };
};

export default Home;
