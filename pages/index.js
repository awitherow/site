import React, { useState } from "react";
import { useGlobal } from "reactn";
import axios from "axios";
import Link from "next/link";
import { Form, Button, InputGroup } from "react-bootstrap";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { logEvent } from "../lib/analytics";

import sanity from "../lib/sanity";
import { getAllActivities } from "../queries/activities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Layout, { SectionHeader, Divider } from "../components/Layout";
import Activity from "../components/Activity";
import MailchimpForm from "../components/MailchimpForm";

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

const Home = ({ seo, activities }) => {
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
              Theoretical and Practical Learning for Tuning Up Your Vibration,
              in your Inbox, once a week.
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
                  <AnchorLink className="btn btn-secondary" href="#lifestyle">
                    Browse <FontAwesomeIcon icon={faChevronDown} />
                  </AnchorLink>
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
          title="Browse Our Curated Collection"
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
