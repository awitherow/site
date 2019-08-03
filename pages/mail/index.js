import React from "react";
import Layout, { Divider } from "../../src/components/Layout";
import { Form, Button } from "react-bootstrap";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import "./index.scss";

function Mail({ seo }) {
  return (
    <Layout seo={seo} id="mail">
      <div className="content">
        <img src="https://via.placeholder.com/500" />
        <div className="preform&form">
          <div className="preform">
            <h2>High Vibrational Habits</h2>
            <p>
              High Vibrational Habits is a quick dive into 5 Essential Habits
              that should constitute your day, boiled down to their Essence, for
              you to absorb and integrate, so that you can Live at your Highest
              Vibration. Product recommendations are also within to help you get
              vibe higher, faster.
            </p>
            <h3>Table of Contents</h3>
            <ul>
              <li>Starting Each Day Right</li>
              <li>Biofuel for Your Rocket Ship</li>
              <li>Wheels Up for a Sustainable Flight</li>
              <li>Wheels Down for a Smooth Landing </li>
              <li>Catalyzing Your Chances for a Successful Tomorrow</li>
            </ul>
            <h3>Get Your eBook Today!</h3>
            <Divider />
          </div>
          <div className="form">
            <MailchimpSubscribe url="https://awitherow.us19.list-manage.com/subscribe?u=c60ea29dfa8a09bdd8e0cca02&id=3f3895ba76" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

Mail.getInitialProps = async () => {
  return {
    seo: {
      title: "Free eBook From hivib.es | High Vibrational Habits",
      description:
        "High Vibrational Habits is a collection of the most Essential Habits and Lifestyle Adjustments, boiled down to their Essence so that you can absorb them, integrate them, and Live Your Best Life at your Highest Vibration! Evolve with us today.",
    },
  };
};

export default Mail;
