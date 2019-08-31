import React, { useState } from "react";
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

const successMap = {
  "n/a": {
    text: "Sign up!",
    variant: "primary",
  },
  waiting: {
    text: "Processing...",
    variant: "warning",
  },
  good: {
    text: "Thanks for signing up!",
    variant: "success",
  },
  bad: {
    text: "Try again?",
    variant: "danger",
  },
};

const Home = ({ seo, activities, featuredPosts }) => {
  const [email_address, updateEmail] = useState("");
  const [success, setSuccess] = useState("n/a");

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
            <h2>Create Your Life at its Highest Vibration</h2>
            <p>
              Tune up Your Vibration with our Weekly Email Digest. Premium
              Content Subscription also available at{" "}
              <a target="_blank" href="https://www.patreon.com/awitherow">
                Patreon
              </a>
              .
            </p>
            <Form>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  autoComplete="email"
                  value={email_address}
                  onChange={e => updateEmail(e.target.value)}
                />
                <InputGroup.Append>
                  <Button
                    disabled={success === "good"}
                    onClick={() => handleSignup()}
                    variant={successMap[success].variant}>
                    {successMap[success].text}
                  </Button>
                  <Button
                    className="icon-text"
                    variant="danger"
                    href="https://www.patreon.com/awitherow"
                    targt="_blank">
                    <FontAwesomeIcon icon={faPatreon} /> <span>Subscribe</span>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-muted">
                Your Email is safe with us.
              </Form.Text>
            </Form>
          </div>
        </div>
      </div>

      <section id="lifestyle">
        <SectionHeader
          title="High Vibrational Digest"
          subtitle="The most Effective and Powerful High Vibrational Lifestyle Enhancements brought to you with Simplicty and Ease of Integration. Tried and Tested Solutions Empower you to Truly Go Further in Life."
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
      <section id="blog">
        <SectionHeader
          title="Best of the High Vibes Blog"
          subtitle="Our most insightful posts that not only contain a wealth of theoretical knowledge, but always ends with a Call for Action to a Higher Vibrational Self"
        />

        <PostList posts={featuredPosts} />
      </section>
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
  return {
    featuredPosts: await sanity.fetch(getFeaturedPosts),
    activities: await sanity.fetch(getAllActivities),
    seo: {
      title: "Your Life at its Highest Vibration",
      description:
        "Promoting a life that leaves you gasping in a rush of ecstacy at its own amazingness. Fostering such moments with Succint Knowledge and Effective Solutions.",
    },
  };
};

export default Home;
